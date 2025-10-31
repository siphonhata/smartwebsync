import Link from "next/link";
import { Monitor, Mail, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-12">
        <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-1">
          <Link href="#home" className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">{BUSINESS_INFO.name}</span>
          </Link>
          <p className="text-sm">
            {BUSINESS_INFO.tagline}
          </p>
          <p className="text-sm mt-2">
            Building modern web solutions for South African businesses and students.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
             <li><Link href="#blog" className="hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${BUSINESS_INFO.phone.raw}`} className="hover:text-primary transition-colors">
                {BUSINESS_INFO.phone.display}
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${BUSINESS_INFO.email.info}`} className="hover:text-primary transition-colors">
                {BUSINESS_INFO.email.info}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Business Hours</h4>
          <p>{BUSINESS_INFO.hours.days}</p>
          <p>{BUSINESS_INFO.hours.time}</p>
        </div>
      </div>
      <div className="bg-muted/50 border-t">
        <div className="container mx-auto py-4 px-4 text-center text-sm">
          © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
