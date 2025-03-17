
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import BlogCard from '@/components/BlogCard';
import { Separator } from '@/components/ui/separator';

const Blogs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Agent Insights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of articles on AI agents, their applications, and the future of artificial intelligence.
            </p>
          </div>
          
          <Separator className="mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
