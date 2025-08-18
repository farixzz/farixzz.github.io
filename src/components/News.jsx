import React, { useState, useEffect } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
      if (!apiKey) {
        setError('GNews API key is missing. Please add it to your GitHub Secrets.');
        setLoading(false);
        return;
      }
      
      const url = `https://gnews.io/api/v4/search?q=cybersecurity&lang=en&max=6&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); 

  return (
    <div id="news" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-12">
        [ LATEST THREAT INTEL ]
      </h1>
      
      {loading && <p className="text-center text-gray-400">Fetching latest threat intel...</p>}
      {error && <p className="text-center text-red-500">Failed to load news: {error}</p>}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!loading && !error && articles.map((article, index) => (
          <a 
            href={article.url} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-gray-900 border-2 border-gray-700 p-4 rounded-lg hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold text-gray-200 mb-2">{article.title}</h3>
            <p className="text-sm text-green-500 font-semibold mb-4">{article.source.name}</p>
            <p className="text-xs text-gray-500">
              Published: {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;