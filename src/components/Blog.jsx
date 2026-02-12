import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';

// Hardcoded fallback posts
const fallbackPosts = [
  {
    title: 'Cyber Recon Scanner: My Python-based Open-Source Tool',
    description: 'An in-depth look at the development and features of Cyber Recon Scanner, a custom-built tool designed to automate the reconnaissance phase for ethical hackers and penetration testers.',
    url: 'https://medium.com/@muhammedfaris654/cyber-recon-scanner-my-python-based-open-source-tool-for-ethical-hackers-759ea1983068',
  },
  {
    title: 'TryHackMe Walkthrough: OWASP Top 10 2025 — Insecure Data Handling 🔒',
    description: 'A hands-on walkthrough of the OWASP Top 10 2025 Insecure Data Handling room on TryHackMe, exploring real-world vulnerabilities and defensive strategies.',
    url: 'https://medium.com/@muhammedfaris654/tryhackme-walkthrough-owasp-top-10-2025-insecure-data-handling-ec2571943184',
  },
];

const MEDIUM_USERNAME = 'muhammedfaris654';
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

const Blog = () => {
  const [posts, setPosts] = useState(fallbackPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(RSS_URL);
        const data = await res.json();

        if (data.status === 'ok' && data.items?.length > 0) {
          const fetched = data.items.map((item) => {
            // Strip HTML tags from description
            const desc = item.description
              ?.replace(/<[^>]+>/g, '')
              ?.substring(0, 200)
              ?.trim();

            return {
              title: item.title,
              description: desc ? `${desc}...` : '',
              url: item.link,
              pubDate: item.pubDate,
            };
          });
          setPosts(fetched);
        }
      } catch {
        // Keep fallback posts on error
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div id="blog" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-4">
        [ PERSONAL LOGS / BLOG ]
      </h1>
      <p className="text-gray-500 text-center text-sm mb-12 font-mono">
        // Auto-synced from{' '}
        <a
          href={`https://medium.com/@${MEDIUM_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500/70 hover:text-green-400 transition-colors"
        >
          Medium
        </a>
      </p>

      {loading && (
        <div className="text-center text-gray-600 font-mono text-sm py-8 animate-pulse">
          &gt; Fetching latest blog posts...
        </div>
      )}

      <div className="grid sm:grid-cols-1 gap-8">
        {posts.map((post, idx) => (
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