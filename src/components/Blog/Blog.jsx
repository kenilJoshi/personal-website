import React from 'react';
import { blogs } from '../../data/blogs';

function Blog() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-left">Stories</h1>
        <div className="space-y-6">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className=" p-6 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <p className="text-sm text-gray-500">Written by: {blog.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
