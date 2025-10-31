"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Monitor, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useState } from "react";
import { BUSINESS_INFO } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(
    navLinks.map((l) => l.href.substring(1)),
    {
      rootMargin: "0% 0% -80% 0%",
    }
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="#home" className="flex items-center space-x-2">
            <Monitor className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            <span className="font-bold text-sm md:text-base lg:text-lg whitespace-nowrap">
              Smart WebSync Solutions
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80 px-3 py-2 rounded-md",
                activeId === link.href.substring(1)
                  ? "text-foreground bg-accent"
                  : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
          <Button asChild variant="secondary" size="sm" className="shadow">
            <a href={BUSINESS_INFO.phone.whatsapp} target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp Us
            </a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center space-x-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[280px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="#home" onClick={() => setOpen(false)} className="flex items-center space-x-2">
                    <Monitor className="h-6 w-6 text-primary" />
                    <span className="font-bold text-sm">Smart WebSync Solutions</span>
                  </Link>
                </div>
                <nav className="flex flex-col p-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-foreground/80 px-3 py-3 rounded-md",
                        activeId === link.href.substring(1)
                          ? "text-foreground bg-accent"
                          : "text-foreground/60"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t space-y-3">
                  <Button asChild className="w-full" variant="secondary">
                    <a href={BUSINESS_INFO.phone.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
