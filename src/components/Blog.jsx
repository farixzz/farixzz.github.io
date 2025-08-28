import React from 'react';
import BlogItem from './BlogItem';

// Array to hold your blog posts. To add more, just add a new object here!
const blogPosts = [
  {
    title: 'Cyber Recon Scanner: My Python-based Open-Source Tool',
    description: 'An in-depth look at the development and features of Cyber Recon Scanner, a custom-built tool designed to automate the reconnaissance phase for ethical hackers and penetration testers.',
    url: 'https://medium.com/@muhammedfaris654/cyber-recon-scanner-my-python-based-open-source-tool-for-ethical-hackers-759ea1983068',
  },
  // {
  //   title: 'Your Next Blog Post Title',
  //   description: 'A brief and exciting description of your next article.',
  //   url: 'https://medium.com/your-next-article-link',
  // },
];

const Blog = () => {
  return (
    <div id="blog" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-12">
        [ PERSONAL LOGS / BLOG ]
      </h1>
      {/* Grid container for the blog posts */}
      <div className="grid sm:grid-cols-1 gap-8">
        {blogPosts.map((post, idx) => (
          <BlogItem
            key={idx}
            title={post.title}
            description={post.description}
            url={post.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;