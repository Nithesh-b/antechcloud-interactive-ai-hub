
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogData';
import BlogCard from '@/components/BlogCard';

const BlogsSection = ({ limit = 3 }: { limit?: number }) => {
  const featuredPosts = blogPosts.slice(0, limit);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest AI Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends and developments in AI agent technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/blogs">
            <Button className="bg-ant-purple hover:bg-ant-purple/90">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
