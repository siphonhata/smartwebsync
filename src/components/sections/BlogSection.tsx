'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogSectionProps {
    showHeading?: boolean;
    limit?: number;
}

export default function BlogSection({ showHeading = true, limit }: BlogSectionProps) {
    const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

    return (
        <section id="blog" className="py-20 md:py-32 bg-muted/50">
            {showHeading && (
                <div className="container mx-auto text-center px-4 mb-12">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4 font-headline">
                        From the Blog
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Insights on web development, SEO strategies, and practical advice for SA businesses and IT students.
                    </p>
                </div>
            )}

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Card key={post.slug} className="flex flex-col overflow-hidden">
                            <CardHeader className="p-0">
                                <Link href={`/blog/${post.slug}`}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-48 object-cover"
                                        data-ai-hint={post.data_ai_hint}
                                    />
                                </Link>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow">
                                <Badge variant="secondary" className="mb-2">
                                    {new Date(post.date).toLocaleDateString('en-ZA', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </Badge>
                                <CardTitle className="font-headline mb-2">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription>
                                    {post.content.substring(0, 150).trim()}...
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button asChild variant="link" className="p-0 h-auto">
                                    <Link href={`/blog/${post.slug}`}>
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                {/* <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/blog">View All Posts</Link>
                    </Button>
                </div> */}
            </div>
        </section>
    );
}
