import { Code, GraduationCap, Layers, Server, Smartphone, TrendingUp } from "lucide-react";

export const services = [
  {
    title: "Custom Website Design & Development",
    icon: Layers,
    description:
      "We craft visually stunning, fast, and mobile-responsive websites that elevate your brand and convert visitors into customers. From personal brands to corporate sites, we deliver pixel-perfect experiences tailored to your goals.",
    benefits: [
      "Unique, modern UI tailored to your brand",
      "Lightning-fast load times",
      "Fully mobile and tablet optimized",
      "Easy content updates via CMS",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    timeline: "1-3 Weeks",
  },
  {
    title: "Full-Stack Web App Solutions",
    icon: Code,
    description:
      "We build powerful full-stack applications that streamline business operations and deliver seamless user experiences. Whether you're launching a SaaS platform, dashboard, or booking system — we’ve got you covered.",
    benefits: [
      "End-to-end custom functionality",
      "Secure, scalable cloud-based architecture",
      "User management & authentication",
      "API integrations and database design",
    ],
    tech: ["Node.js", "PHP", "Java", "C# .Net", "Python", "Supabase", "PostgreSQL", "Next.js", "TypeScript"],
    timeline: "3-8 Weeks",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    icon: Smartphone,
    description:
      "Turn your app idea into a fully functional mobile experience. We build fast, beautiful, and reliable apps using Flutter or React Native — all from a single codebase, optimized for both platforms.",
    benefits: [
      "Cross-platform (Android + iOS) from one codebase",
      "Modern UI/UX with smooth animations",
      "In-app payments, push notifications, and more",
      "Launch support for Play Store & App Store",
    ],
    tech: ["Flutter", "React Native", "Stripe", "Supabase"],
    timeline: "4-10 Weeks",
  },
  {
    title: "Local SEO & Google Ranking Boost",
    icon: TrendingUp,
    description:
      "Get found on Google by the right audience. Our local SEO service helps your business rank higher, attract local customers, and stay ahead of the competition — with proven results in South Africa.",
    benefits: [
      "Boost local search visibility",
      "Targeted SEO for your services and location",
      "Optimized Google Business Profile",
      "Monthly performance reports and keyword tracking",
    ],
    tech: ["Google Search Console", "Ahrefs", "SEMRush", "Yoast SEO"],
    timeline: "Ongoing (Monthly Packages)",
  },
  {
    title: "Student Project Development & Mentorship",
    icon: GraduationCap,
    description:
      "Need help with your final-year IT or Computer Science project? We provide expert mentorship and development support — from project planning to execution — to help you graduate with confidence and a portfolio-worthy project.",
    benefits: [
      "Project topic selection and guidance",
      "Modern software & hardware stacks",
      "One-on-one coding support",
      "Fully functional final product with documentation",
    ],
    tech: ["React", "C++", "Java", "C#", "Python", "Flutter", "ESP32", "Raspberry Pi"],
    timeline: "Based on project scope",
  },
  {
    title: "Reliable Hosting & Website Maintenance",
    icon: Server,
    description:
      "Keep your website fast, secure, and always online with our managed hosting and maintenance services. We handle everything from server setup to ongoing updates and backups — so you can focus on your business.",
    benefits: [
      "High-performance SSD hosting with 99.9% uptime",
      "Automatic backups and disaster recovery",
      "Regular security patches and software updates",
      "24/7 monitoring and support",
      "Scalable solutions to grow with your business",
    ],
    tech: ["Vercel", "Netlify", "AWS", "DigitalOcean", "Cloudflare"],
    timeline: "Ongoing Monthly Service",
  },
];

export const projects = [
 
  {
    id: "2",
    title: "Booking System for a Guesthouse",
    type: "web-app",
    description: "A custom web app allowing guests to book rooms, manage reservations, and pay online.",
    image: "/guesthouse.jpg",
    data_ai_hint: "hotel booking",
    techStack: ["React", "Node.js", "PostgreSQL", "Shadcn UI"],
  },
  {
    id: "f22f8ec0-9061-41fa-a989-911d71c38c4f",
    title: "Corporate Website for a Law Firm",
    type: "web-design",
    description: "A professional and elegant website to represent a leading law firm online.",
    image: "/law.jpg",
    data_ai_hint: "corporate website",
    techStack: ["Next.js", "Framer Motion", "Contentful"],
  },
  {
    id: "7e87cd3a-06da-44b8-9d88-1b67a59c2e8a",
    title: "Smart Farm Monitoring System",
    type: "student-project",
    description: "An IoT-based system using ESP32 sensors to monitor soil moisture and temperature, with data visualized on a web dashboard.",
    image: "/smartfarm.jpg",
    data_ai_hint: "iot farming",
    techStack: ["ESP32", "Arduino", "React", "Firebase"],
  },
  {
    id: "e3c8f9f1-b24d-46a9-aeec-3fbe2e9c8b99",
    title: "Smart Home Energy Monitoring System",
    type: "student-project",
    description: "A Raspberry Pi-based IoT solution for monitoring household energy usage in real-time, helping users identify high-consumption devices and reduce electricity bills.",
    image: "/energy.jpg",
    data_ai_hint: "raspberry pi energy monitor",
    techStack: ["Raspberry Pi", "Python", "MQTT", "React", "InfluxDB", "Grafana"],
  }

  // {
  //   id: "4",
  //   title: "Portfolio Site for a Final-Year Student",
  //   type: "student-project",
  //   description: "A dynamic portfolio website to showcase a student's projects and skills, helping them land their first job.",
  //   image: "https://placehold.co/600x400",
  //   data_ai_hint: "developer portfolio",
  //   techStack: ["React", "TypeScript", "GSAP"],
  // },
  // {
  //   id: "5",
  //   title: "Local Restaurant Website with SEO",
  //   type: "web-design",
  //   description: "A visually appealing website for a Durban-based restaurant, optimized for local search to attract diners.",
  //   image: "https://placehold.co/600x400",
  //   data_ai_hint: "restaurant website",
  //   techStack: ["WordPress", "Elementor", "Yoast SEO"],
  // },
  // {
  //   id: "6",
  //   title: "Student Project: AI-Powered Study Planner",
  //   type: "student-project",
  //   description: "An innovative web app that helps students organize their study schedules using AI.",
  //   image: "https://placehold.co/600x400",
  //   data_ai_hint: "planner app",
  //   techStack: ["Python (Flask)", "React", "OpenAI API"],
  // },
];

export const blogPosts = [
  {
    slug: '5-reasons-your-sa-business-needs-a-website',
    title: '5 Reasons Your SA Small Business Needs a Website in 2024',
    author: 'Admin',
    date: '2024-07-15',
    image: '/webistebusiness.jpeg',
    data_ai_hint: "business meeting",
    content: `
Even in the age of social media, a dedicated website is the most valuable digital asset for any South African small business. Here's why you can't afford to be without one.

### 1. 24/7 Online Presence
Your website works for you around the clock, even when you're not working. It's your digital storefront, always open to potential customers looking for your products or services, no matter the time.

### 2. Build Credibility and Trust
A professional, modern website instantly builds trust. For South African consumers, a good website signals that you are a legitimate and serious business. It's your space to tell your story and show off what makes you great.

### 3. Reach a Wider Audience
A website isn't limited by geography. You can reach customers across Gauteng, the Western Cape, or even internationally. With basic SEO, you can attract customers actively searching for what you offer.

### 4. Showcase Your Products & Services
Unlike a social media post, a website gives you unlimited space and control to detail your offerings. Use high-quality images, detailed descriptions, and customer testimonials to convince visitors to buy.

### 5. Generate Leads & Sales
Your website is a powerful tool for generating leads. Through contact forms, newsletter sign-ups, and e-commerce functionality, your website can directly contribute to your bottom line. It's an investment that pays for itself.
    `
  },
  {
    slug: 'tech-stack-for-student-projects',
    title: 'Choosing the Right Tech Stack for Your Final-Year Project',
    author: 'Admin',
    date: '2024-07-10',
    image: '/techstack.png',
    data_ai_hint: "code screen",
    content: `
Your final-year project is your chance to shine. Choosing the right technologies (your "tech stack") is crucial. Here's a quick guide for SA IT students.

### The MERN Stack (MongoDB, Express, React, Node.js)
- **What it is:** A popular JavaScript-based stack.
- **Why use it:** It's versatile, has a huge community, and is in high demand in the job market. Perfect for full-stack web apps, from social networks to e-commerce sites.
- **Good for:** Projects that need to be built quickly and efficiently.

### Python with Django/Flask
- **What it is:** Using the Python language for your backend.
- **Why use it:** Python is famous for its clean syntax and powerful libraries, especially for data science, machine learning, and AI. Django is a full-featured framework, while Flask is more lightweight.
- **Good for:** Projects involving data analysis, AI integration, or scientific computing.

### Next.js and Firebase
- **What it is:** A modern, powerful combination. Next.js is a React framework that simplifies building fast, SEO-friendly sites. Firebase provides a backend-as-a-service (BaaS), handling databases, authentication, and hosting.
- **Why use it:** It allows you to build complex applications with less backend code. It's incredibly fast to develop and deploy. This is the stack I use for many of my own projects!
- **Good for:** High-performance web apps, portfolios, and projects you want to get online quickly.

### Key Takeaway
Choose a stack that not only fits your project's requirements but also excites you. Learning a modern, in-demand stack will give you a huge advantage when you start your career in the South African tech industry.
`
  },
  {
    slug: 'why-every-beginner-should-learn-git',
    title: 'Why Every Beginner Programmer Should Learn Git and Version Control',
    author: 'Admin',
    date: '2025-04-06',
    image: '/git.webp',
    data_ai_hint: 'programmer coding',
    content:`
Have you ever worked on a project, made changes, and then realized you broke something? Or maybe you wish you could go back to an earlier version of your code, but you have no idea how? Well, this is where version control, specifically Git, comes to the rescue!

Git is a powerful tool that helps developers track and manage changes to their code over time. Its used by professional developers worldwide, but it’s also a crucial skill for beginners. In this post, I’ll explain why version control is so important, how Git works, and why every new programmer should learn it.

### What is Version Control?
**Definition:**  
Version control is a system that helps developers track and manage changes to the codebase over time. It allows you to revisit earlier versions of your code, collaborate with others, and keep your projects organized.

**Why it’s important:**  
Without version control, it can be difficult to manage changes, especially when working on bigger projects. You may find yourself losing track of what changes you’ve made, or worse, overwriting valuable code. Version control makes sure you can always revert to a stable version if something goes wrong.

### Introducing Git
**What is Git?**  
Git is the most widely-used version control system. It was created by Linus Torvalds, the creator of Linux, and is known for being fast, efficient, and scalable. Git allows you to track changes in your code and store these changes in ‘commits’.

**How Git works:**  
At its core, Git helps you keep track of changes by creating a ‘snapshot’ of your code whenever you commit. This means that every time you make a change and commit it, Git saves that version of your code. You can then compare, review, or go back to that point whenever you need to.

### Why Should Beginners Learn Git?
**Collaboration:**  
As a beginner, you might work on solo projects, but eventually, you’ll want to collaborate with others. Git helps you work in teams by allowing multiple developers to work on the same project simultaneously without overwriting each other’s code.

**Keeping Track of Changes:**  
As you develop your code, you will inevitably make mistakes. With Git, you can track your changes and roll back to a previous version if something goes wrong. This makes it easy to experiment without fear of ruining your project.

**Better Workflow:**  
Git allows you to organize your code into branches. This means you can work on new features or fixes in isolation (in a separate branch) and then merge them back into the main codebase when they’re ready.

**Industry Standard:**  
Git is used by developers in almost every industry, from small startups to large corporations. Learning Git early on will give you an edge and help you integrate with development teams more effectively.

**Backup Your Code:**  
Git makes it easy to back up your code. If you’re working on your local computer and something happens, having your code saved in a Git repository means you can retrieve it from an online repository like GitHub or GitLab.

### How Git Works: Basic Workflow
- Initialize a repository: git init
- Track changes: git add <filename>
- Commit changes: git commit -m 'message'
- Push changes: git push

**Simple Example:**  
Let’s say you’re building a simple ‘To-Do List’ application. After working on your code, you make a change to the way tasks are displayed. You would:  
git add .  
git commit -m 'Added task display feature' 
git push  

This allows you to track the feature and collaborate with others.

### Resources for Getting Started with Git:
- Git Documentation: The official Git documentation is a great place to start.
- GitHub Learning Lab: GitHub offers a Learning Lab with free courses to help you get started with Git and GitHub.
- YouTube Tutorials: There are tons of beginner-friendly tutorials on YouTube that will guide you through the Git process.

### Conclusion
As a beginner programmer, learning Git might seem intimidating at first, but it’s an invaluable skill that will help you throughout your programming journey. Not only will it improve your workflow, but it will also make you a better developer overall. So don’t hesitate — get started with Git today, and see how it can transform your development process!
    `
},

];
