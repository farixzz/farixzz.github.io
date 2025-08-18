import React from 'react';

const ProjectItem = ({ img, title, tech, liveUrl, sourceUrl, description }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-t from-gray-900 to-[#001f00] glitch-hover">
      <img src={img} alt={title} className="rounded-xl group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="hidden group-hover:flex absolute inset-0 flex-col items-center justify-center text-center p-4">
        <h3 className="text-2xl font-bold text-white tracking-wider">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white">{tech}</p>
        
        {description ? (
          <p className="text-sm text-gray-300 px-4">{description}</p>
        ) : (
          <div className="flex gap-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 text-[#00ff00] font-bold cursor-pointer rounded-lg hover:bg-gray-600 transition-colors">
                [ Live Site ]
              </a>
            )}
            {sourceUrl && (
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 text-[#00ff00] font-bold cursor-pointer rounded-lg hover:bg-gray-600 transition-colors">
                [ Source ]
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;