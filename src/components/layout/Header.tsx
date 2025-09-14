"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-gradient-to-r from-white via-blue-50/50 to-white backdrop-blur-lg supports-[backdrop-filter]:bg-white/85 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-60 sm:h-24 sm:w-72">
              <Image
                src="/logo.png"
                alt="MKM Solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-all duration-300 pb-1 ${
                    isActive
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t-2 border-primary/20 bg-gradient-to-b from-white to-blue-50/30 backdrop-blur-md">
              {NAVIGATION.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative block px-4 py-3 text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-all duration-200 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
