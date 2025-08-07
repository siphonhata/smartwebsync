import { BlogGeneratorClient } from './blog-generator-client';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Admin: Blog Post Generator',
  description: 'Use AI to generate blog posts for Smart WebSync Solutions.',
};

export default function BlogGeneratorPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto text-center px-4">
          <Shield className="w-12 h-12 mx-auto text-primary mb-4" />
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 font-headline">
            AI Blog Post Generator
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Create relevant and helpful blog posts for our target audience of small SA businesses and IT students.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <BlogGeneratorClient />
        </div>
      </section>
    </div>
  );
}
