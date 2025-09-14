import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema for form data
const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "Voornaam is verplicht")
    .max(50, "Voornaam is te lang"),
  lastName: z
    .string()
    .min(1, "Achternaam is verplicht")
    .max(50, "Achternaam is te lang"),
  email: z
    .string()
    .email("Ongeldig e-mailadres")
    .max(100, "E-mailadres is te lang"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z
    .string()
    .min(3, "Bericht moet minimaal 10 karakters bevatten")
    .max(1000, "Bericht is te lang"),
});

// Rate limiting (simple in-memory store - in production use Redis)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Te veel aanvragen. Probeer het later opnieuw." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();

    // Sanitize all string inputs
    const sanitizedBody = {
      firstName: sanitizeInput(body.firstName || ""),
      lastName: sanitizeInput(body.lastName || ""),
      email: sanitizeInput(body.email || ""),
      phone: sanitizeInput(body.phone || ""),
      service: sanitizeInput(body.service || ""),
      message: sanitizeInput(body.message || ""),
    };

    // Validate with Zod schema
    const validatedData = contactSchema.parse(sanitizedBody);

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "E-mail service is niet geconfigureerd" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "MKM Solutions <info@mkmsolutions.be>", // Use your verified domain
      to: [process.env.CONTACT_EMAIL || "info@mkmsolutions.be"],
      subject: `Nieuwe contactaanvraag van ${validatedData.firstName} ${
        validatedData.lastName
      }${validatedData.service ? ` - ${validatedData.service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Nieuwe Contactaanvraag - MKM Solutions
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contactgegevens:</h3>
            <p><strong>Naam:</strong> ${validatedData.firstName} ${
        validatedData.lastName
      }</p>
            <p><strong>E-mail:</strong> ${validatedData.email}</p>
            ${
              validatedData.phone
                ? `<p><strong>Telefoon:</strong> ${validatedData.phone}</p>`
                : ""
            }
             ${
               validatedData.service
                 ? `<p><strong>Onderwerp:</strong> ${validatedData.service}</p>`
                 : ""
             }
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Bericht:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${
              validatedData.message
            }</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 5px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Verzonden op:</strong> ${new Date().toLocaleString(
                "nl-BE"
              )}<br>
              <strong>IP-adres:</strong> ${ip}
            </p>
          </div>
        </div>
      `,
      text: `
Nieuwe Contactaanvraag - MKM Solutions

Contactgegevens:
- Naam: ${validatedData.firstName} ${validatedData.lastName}
- E-mail: ${validatedData.email}
${validatedData.phone ? `- Telefoon: ${validatedData.phone}` : ""}
 ${validatedData.service ? `- Onderwerp: ${validatedData.service}` : ""}

Bericht:
${validatedData.message}

Verzonden op: ${new Date().toLocaleString("nl-BE")}
IP-adres: ${ip}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error: "Er is een fout opgetreden bij het verzenden van het bericht",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Uw bericht is succesvol verzonden. Wij nemen zo snel mogelijk contact met u op.",
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Ongeldige gegevens",
          details: error.issues.map((err) => err.message),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Er is een onverwachte fout opgetreden" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
