import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";

// app/layout.tsx
export const metadata = {
  title: 'SmartWebSync | Web & App Development in South Africa',
  description:
    'SmartWebSync offers professional web and app development services in South Africa. We build modern websites, apps, and digital solutions for your business.',
  openGraph: {
    title: 'SmartWebSync | Web & App Development',
    description: 'SmartWebSync builds websites and apps for startups and businesses in South Africa.',
    url: 'https://smartwebsync.co.za',
    type: 'website',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630.png?text=SmartWebSync',
        width: 1200,
        height: 630,
        alt: 'SmartWebSync Preview',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased min-h-screen bg-background flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-grow">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
