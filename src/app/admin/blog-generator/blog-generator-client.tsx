'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateBlogPost } from '@/ai/flows/generate-blog-post';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters.'),
  outline: z.string().min(20, 'Outline must be at least 20 characters.'),
});

export function BlogGeneratorClient() {
  const [generatedPost, setGeneratedPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      outline: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedPost('');
    try {
      const result = await generateBlogPost(values);
      setGeneratedPost(result.blogPost);
      toast({
        title: 'Blog Post Generated!',
        description: 'The AI has successfully created a new blog post.',
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'There was an error generating the blog post. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm hover:border-primary/50">
        <CardHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
              <span className="text-lg font-bold text-primary">1</span>
            </div>
            <CardTitle className="font-headline text-2xl">Provide Content Details</CardTitle>
          </div>
          <CardDescription className="text-base">
            Enter a title and a brief outline for the blog post you want to create.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-semibold">Blog Post Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., How SEO Can Boost Your Small Business in South Africa"
                        className="h-12 text-base border-2 focus:border-primary transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="outline"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-semibold">Brief Outline</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Intro to SEO, importance for local SA market, keyword research, on-page basics, conclusion."
                        className="min-h-[140px] text-base border-2 focus:border-primary transition-colors resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                className="w-full sm:w-auto text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {isLoading ? 'Generating Magic...' : 'Generate Blog Post'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || generatedPost) && (
        <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm animate-slide-up">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <CardTitle className="font-headline text-2xl">Generated Content</CardTitle>
            </div>
            <CardDescription className="text-base">
              Below is the AI-generated blog post. You can copy the markdown content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <Loader2 className="relative h-16 w-16 animate-spin mb-6 text-primary" />
                </div>
                <p className="text-lg font-medium animate-pulse">Generating your content... please wait.</p>
                <p className="text-sm text-muted-foreground/60 mt-2">This usually takes 10-30 seconds</p>
              </div>
            )}
            {generatedPost && (
              <div className="animate-fade-in">
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 h-12">
                    <TabsTrigger value="preview" className="text-base font-medium">Preview</TabsTrigger>
                    <TabsTrigger value="markdown" className="text-base font-medium">Markdown</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="mt-6 p-6 border-2 rounded-lg bg-background/50 backdrop-blur-sm">
                     <div className="prose dark:prose-invert max-w-none prose-headings:font-headline prose-headings:scroll-mt-20 prose-p:leading-relaxed">
                       <ReactMarkdown remarkPlugins={[remarkGfm]}>{generatedPost}</ReactMarkdown>
                     </div>
                  </TabsContent>
                  <TabsContent value="markdown" className="mt-6">
                     <Textarea
                       readOnly
                       value={generatedPost}
                       className="min-h-[500px] font-mono text-sm border-2 bg-background/50 backdrop-blur-sm"
                     />
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </CardContent>
          {generatedPost && (
            <CardFooter className="flex gap-3 flex-wrap">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(generatedPost);
                  toast({ title: 'Copied to clipboard!' });
                }}
                size="lg"
                className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Copy Markdown
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setGeneratedPost('');
                  form.reset();
                }}
                className="font-semibold border-2"
              >
                Generate Another
              </Button>
            </CardFooter>
          )}
        </Card>
      )}
    </div>
  );
}
