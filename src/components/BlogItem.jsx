import React from 'react';
import { FaMedium } from 'react-icons/fa';

const BlogItem = ({ title, description, url }) => {
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer" 
      className="block bg-gray-900 border-2 border-gray-700 p-6 rounded-lg transform hover:scale-105 hover:border-green-500 transition-all duration-300 group"
    >
      <div className="flex items-center mb-4">
        <FaMedium className="text-gray-400 group-hover:text-white transition-colors duration-300" size={30} />
        <h3 className="ml-4 text-xl font-bold text-gray-200 group-hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      <span className="font-bold text-green-500 group-hover:underline">
        Read on Medium &rarr;
      </span>
    </a>
  );
};

export default BlogItem;