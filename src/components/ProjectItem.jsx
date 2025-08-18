import React from 'react';

const ProjectItem = ({ img, title, tech, liveUrl, sourceUrl, description }) => {
  return (
    <div 
    tabIndex="0"
    className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-t from-gray-900 to-[#001f00] glitch-hover focus:outline-none focus:ring-2 focus:ring-green-500">
      <img src={img} alt={title} className="rounded-xl group-hover:opacity-10 group-focus:opacity-10 transition-opacity duration-300" />
      
      <div className="absolute inset-0 flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 flex transition-opacity duration-300">
        <h3 className="text-2xl font-bold text-white tracking-wider">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white">{tech}</p>
        
        {description ? (
          <p className="text-sm text-gray-300 px-4">{description}</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 text-[#00ff00]
              font-bold cursor-pointer rounded-lg hover:bg-gray-600 transition-colors">
                [ Live Site ]
              </a>
            )}
            {sourceUrl && (
              <a href={sourceUrl} target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-700 text-[#00ff00] font-bold cursor-pointer rounded-lg hover:bg-gray-600 transition-colors">
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