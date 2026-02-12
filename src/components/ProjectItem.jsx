import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectItem = ({ img, title, tech, liveUrl, sourceUrl, description }) => {
  return (
    <motion.div
      className="bg-gray-900/80 border border-gray-700 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 group glitch-hover flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Image section with overlay on hover */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-green-400 px-4 py-2 text-sm font-mono border border-gray-600 hover:bg-gray-700 hover:border-green-500 transition-all duration-200"
              aria-label={`View source for ${title}`}
            >
              <FaGithub size={16} />
              Source
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 text-sm font-mono border border-green-500/50 hover:bg-green-500/30 transition-all duration-200"
              aria-label={`View live site for ${title}`}
            >
              <FaExternalLinkAlt size={14} />
              Live
            </a>
          )}
          {!sourceUrl && !liveUrl && (
            <span className="text-gray-500 text-sm font-mono">// private project</span>
          )}
        </div>
      </div>

      {/* Always-visible info section */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-200 font-mono mb-1 group-hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Tech badge */}
        <p className="text-green-500/70 text-xs font-mono tracking-wider mb-3">
          [{tech}]
        </p>

        {/* Description */}
        {description && (
          <p className="text-gray-400 text-sm leading-relaxed flex-1">
            {description}
          </p>
        )}

        {/* Bottom links (always visible, mobile-friendly) */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-800">
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-400 text-xs font-mono transition-colors duration-200 flex items-center gap-1"
            >
              <FaGithub size={12} />
              source
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-400 text-xs font-mono transition-colors duration-200 flex items-center gap-1"
            >
              <FaExternalLinkAlt size={10} />
              live
            </a>
          )}
          {!sourceUrl && !liveUrl && (
            <span className="text-gray-600 text-xs font-mono">// no public links</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;