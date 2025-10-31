import { BlogGeneratorClient } from './blog-generator-client';
import { Shield, Sparkles, Zap, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Admin: Blog Post Generator',
  description: 'Use AI to generate blog posts for Smart WebSync Solutions.',
};

export default function BlogGeneratorPage() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] animate-float">
          <Sparkles className="w-8 h-8 text-primary/20" />
        </div>
        <div className="absolute top-1/3 right-[15%] animate-float-delayed">
          <Zap className="w-6 h-6 text-violet-500/20" />
        </div>
        <div className="absolute bottom-1/4 right-[20%] animate-float">
          <TrendingUp className="w-7 h-7 text-blue-500/20" />
        </div>
      </div>

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-muted/50 via-background to-muted/30">
        <div className="container mx-auto text-center px-4">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <Shield className="relative w-16 h-16 mx-auto text-primary drop-shadow-lg animate-bounce-subtle" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 font-headline bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground animate-gradient">
            AI Blog Post Generator
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Create relevant and helpful blog posts for our target audience of small SA businesses and IT students.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm animate-fade-in">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI-Powered
              </span>
            </div>
            <div className="px-4 py-2 bg-violet-500/10 rounded-full border border-violet-500/20 backdrop-blur-sm animate-fade-in delay-200">
              <span className="text-sm font-medium text-violet-600 dark:text-violet-400 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Lightning Fast
              </span>
            </div>
            <div className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm animate-fade-in delay-400">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                SEO Optimized
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <BlogGeneratorClient />
        </div>
      </section>
    </div>
  );
}
