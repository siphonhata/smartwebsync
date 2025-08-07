
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  LifeBuoy,
  Phone,
  Rocket,
  Wallet,
  Zap,
  Award,
  Heart,
  Users,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { useIsMobile } from "@/hooks/use-mobile";
import { projects, services } from "@/lib/placeholder-data";
import React, { Suspense, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import BlogSection from "@/components/sections/BlogSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "web-app", label: "Web Apps" },
  { value: "web-design", label: "Web Design" },
  { value: "student-project", label: "Student Projects" },
];

export default function Home() {
  const [filter, setFilter] = useState("all");
  const isMobile = useIsMobile();

  const filteredProjects = projects.filter(project =>
    filter === "all" ? true : project.type === filter
  );

  const whyChooseUs = [
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: "Built for Speed",
      description: "We build high-performance sites that load in a flash, keeping your visitors engaged.",
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-accent" />,
      title: "Dedicated Support",
      description: "We local SA developers, offering hands-on support you can count on.",
    },
    {
      icon: <Wallet className="w-8 h-8 text-accent" />,
      title: "Affordable Pricing",
      description: "Fair, transparent pricing designed for small businesses and student budgets.",
    },
  ];

  const pricingTiers = [
    {
      name: "Basic Website",
      price: "R2,500",
      description: "Perfect for a professional online presence.",
      features: ["5 Pages", "Mobile Responsive", "Contact Form", "Basic SEO"],
      cta: "Get Started",
    },
    {
      name: "Web Application",
      price: "R7,000+",
      highlight: true,
      description: "For custom solutions and interactive features.",
      features: ["Custom Functionality", "Database Integration", "User Accounts", "Advanced SEO"],
      cta: "Book a Quote",
    },
    {
      name: "Custom Project",
      price: "Let's Talk",
      description: "Tailored solutions for unique business needs.",
      features: ["Full-Stack Development", "API Integrations", "Ongoing Support", "Student Project Help"],
      cta: "Contact Us",
    },
  ];

  const testimonials = [
    {
      name: "John Kutama",
      role: "Founder, JG Designs",
      avatar: "TM",
      image: "https://avatars.githubusercontent.com/u/217587635?v=4",
      data_ai_hint: "man portrait",
      text: "Smart WebSync Solutions brought the vision to life! The service was professional, affordable, and i delivered a stunning website that has already boosted our sales.",
    },
    {
      name: "John Kutama",
      role: "Founder, JG Designs",
      avatar: "TM",
      image: "https://avatars.githubusercontent.com/u/217587635?v=4",
      data_ai_hint: "man portrait",
      text: "Smart WebSync Solutions brought the vision to life! The service was professional, affordable, and i delivered a stunning website that has already boosted our sales.",
    },
    // {
    //   name: "Aisha Patel",
    //   role: "BSc IT Student, TUT",
    //   avatar: "AP",
    //   image: "https://placehold.co/100x100",
    //   data_ai_hint: "woman portrait",
    //   text: "I was struggling with my final year project until I found Smart WebSync Solutions. The guidance was invaluable. I got a distinction thanks to their help!",
    // },
    // {
    //   name: "David Smith",
    //   role: "Owner, Cape Town Cafe",
    //   avatar: "DS",
    //   image: "https://placehold.co/100x100",
    //   data_ai_hint: "man face",
    //   text: "The new website is amazing and so easy to manage. Our online bookings have tripled. Highly recommend Smart WebSync Solutions to any small business in SA.",
    // },
  ];

  const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Firebase", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Shadcn UI"];


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32 bg-background">
        <motion.div
          className="container mx-auto text-center px-4"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.div variants={fadeIn}>
            <Badge variant="secondary" className="mb-4 text-sm py-1 px-3">
              <Zap className="w-4 h-4 mr-2" />
              For SA Businesses & Students
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4 font-headline"
          >
            Innovate Brightly, Sync Smoothly.
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            We build fast, modern, and reliable digital solutions to help South African businesses and students succeed online.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform transform hover:scale-105">
              <Link href="#contact">Book Free Quote <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg transition-transform transform hover:scale-105">
              <a href="https://wa.me/+27763351282" target="_blank" rel="noopener noreferrer">
                <Phone className="ml-2" /> Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">About Us</h2>
            <p className="text-lg text-muted-foreground mt-2">The story behind Smart WebSync Solutions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-headline">
                From a Student Project to a Thriving Agency
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                The journey started where many of our clients are today. As a final-year IT students, We saw a gap. Small businesses were being quoted astronomical prices for basic websites, and fellow students were struggling to find practical help for their projects.
              </p>
              <p className="text-lg text-muted-foreground">
                We started Smart WebSync Solutions to change that. We combined technical expertise with a genuine desire to help others succeed. We are proudly South African developers dedicated to building digital solutions that make a real-world impact.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="relative h-96">
              <Image
                src="/workplace.jpg"
                alt="Founder's workspace"
                fill
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="desk developer"
              />
            </motion.div>
          </div>
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-headline">Our Core Values</h3>
            <p className="text-lg text-muted-foreground mt-2">What drives us every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline">Client Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We work with you, not just for you. Your success is our success.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline">Quality Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We take pride in writing clean, efficient code and designing beautiful, intuitive interfaces.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline">Honesty & Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No jargon, no hidden fees. We believe in clear communication and honest work.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">Our Services</h2>
            <p className="text-lg text-muted-foreground mt-2">What We can do for you.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem key={service.title} value={`item-${index}`}>
                <AccordionTrigger className="text-xl md:text-2xl hover:no-underline font-headline">
                  <div className="flex items-center gap-4">
                    <service.icon className="w-8 h-8 text-primary" />
                    {service.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-base text-muted-foreground">
                  <p className="mb-6">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Rocket className="w-5 h-5" />Benefits</h4>
                      <ul className="space-y-2 list-disc list-inside">
                        {service.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Code className="w-5 h-5" />Key Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>

                      <h4 className="font-semibold text-foreground mt-6 mb-3 flex items-center gap-2"><Clock className="w-5 h-5" />Typical Timeline</h4>
                      <p>{service.timeline}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">Our Work</h2>
            <p className="text-lg text-muted-foreground mt-2">A selection of projects we proud of.</p>
          </div>
          <div className="flex justify-center mb-12">
            {isMobile ? (
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Filter projects" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Tabs value={filter} onValueChange={setFilter}>
                <TabsList>
                  {filterOptions.map(option => (
                    <TabsTrigger key={option.value} value={option.value}>
                      {option.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            )}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
              Loved by SA Businesses & Students
            </h2>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Avatar className="w-16 h-16 mb-4">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.data_ai_hint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <BlogSection showHeading={true} limit={3} />

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mt-2">Have a project in mind or just want to say hello? We love to hear from you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Contact Details</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form, or use one of the methods below. We excited to learn about your ideas and help bring them to life.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Call or WhatsApp</h3>
                    <p className="text-muted-foreground">+27 76 335 1282</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Email Me</h3>
                    <p className="text-muted-foreground">info@smartwebsync.co.za</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Location</h3>
                    <p className="text-muted-foreground">Pretoria, South Africa (Remote)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
