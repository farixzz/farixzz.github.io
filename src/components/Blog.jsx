import React from 'react';

const Blog = () => {
  return (
    <div id="blog" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-8">
        [ PERSONAL LOGS / BLOG ]
      </h1>
      <div className="text-center p-8 bg-gray-900 border-2 border-dashed border-gray-700 rounded-lg">
        <p className="text-gray-400 text-lg">
          This section is under development.
          <br />
          My personal blog posts and project write-ups will be published here soon.
        </p>
      </div>
    </div>
  );
};

export default Blog;