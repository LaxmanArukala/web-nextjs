

import{ getAllBlogs} from '../services/blogsService'
import { BlogResponse} from '@/app/models/blogModel'
import BlogList from "@/app/blog/BlogList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Browse verified lawyers by expertise and location",
};
export default async function BlogPage() {

  const blogPosts :BlogResponse = await getAllBlogs(); 

  if (blogPosts?.error) {
    throw new Error(blogPosts?.message); // 👈 Global error.tsx will show
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest legal insights, case studies, and expert analysis
            </p>
          </div>
        </div>
      </div>
      <BlogList blogPosts={blogPosts}/>
      
    </div>
  );
};

