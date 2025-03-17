
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const Blog = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-20">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/blogs">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blogs" className="inline-block mb-8">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blogs
            </Button>
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4 mb-8 text-muted-foreground">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{format(post.publishedDate, 'MMMM d, yyyy')}</span>
            </div>
            
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-[400px] object-cover rounded-lg mb-8" 
            />
            
            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
          
          <div className="mt-12 pt-6 border-t text-sm text-muted-foreground">
            Last updated: {format(post.lastUpdated, 'MMMM d, yyyy')}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
