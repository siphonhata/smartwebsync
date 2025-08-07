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
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">1. Provide Content Details</CardTitle>
          <CardDescription>
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
                  <FormItem>
                    <FormLabel>Blog Post Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., How SEO Can Boost Your Small Business in South Africa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="outline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brief Outline</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Intro to SEO, importance for local SA market, keyword research, on-page basics, conclusion."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Generating...' : 'Generate Blog Post'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || generatedPost) && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">2. Generated Content</CardTitle>
            <CardDescription>
              Below is the AI-generated blog post. You can copy the markdown content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col items-center justify-center min-h-[200px] text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                <p>Generating your content... please wait.</p>
              </div>
            )}
            {generatedPost && (
              <div>
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="markdown">Markdown</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="mt-4 p-4 border rounded-md">
                     <div className="prose dark:prose-invert max-w-none">
                       <ReactMarkdown remarkPlugins={[remarkGfm]}>{generatedPost}</ReactMarkdown>
                     </div>
                  </TabsContent>
                  <TabsContent value="markdown">
                     <Textarea
                       readOnly
                       value={generatedPost}
                       className="min-h-[400px] font-mono text-sm"
                     />
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </CardContent>
          {generatedPost && (
            <CardFooter>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(generatedPost);
                  toast({ title: 'Copied to clipboard!' });
                }}
              >
                Copy Markdown
              </Button>
            </CardFooter>
          )}
        </Card>
      )}
    </div>
  );
}
