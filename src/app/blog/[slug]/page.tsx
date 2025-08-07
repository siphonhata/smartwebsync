// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/placeholder-data';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: post?.title ?? 'Post Not Found',
    description: post?.content.substring(0, 150),
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-2">
          {new Date(post.date).toLocaleDateString('en-ZA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="text-sm text-muted-foreground mb-6">By {post.author}</p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md mb-8"
        />

        {/* 🟢 Render the blog content using Markdown */}
        <div className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-headings:font-headline prose-a:text-primary">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
