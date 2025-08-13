import Link from "next/link";
import { Monitor, Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-12">
        <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-1">
          <Link href="#home" className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Smart WebSync Solutions</span>
          </Link>
          <p className="text-sm">
            Innovate Brightly, Sync Smoothly
          </p>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="#services" className="hover:text-primary">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
             <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+27 76 335 1282</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@smartwebsync.co.za</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Business Hours</h4>
          <p>Monday - Saturday</p>
          <p>9:00 AM - 5:00 PM (SAST)</p>
        </div>
      </div>
      <div className="bg-muted/50 border-t">
        <div className="container mx-auto py-4 px-4 text-center text-sm">
          © {new Date().getFullYear()} Smart WebSync Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
