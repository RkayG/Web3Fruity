import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaLightbulb, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const AcademySection = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:1225/academy');
        setArticles(response.data.slice(0, 3));
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to fetch articles:', err);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FaLightbulb className="text-yellow-400 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Ready to Expand Your Crypto Knowledge?
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Dive into our Academy and master the world of cryptocurrencies!
          </p>
        </motion.div>

        {isLoading ? (
          <div className="text-center text-gray-600 dark:text-gray-400">Loading latest insights...</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={article.imageLink} 
                  alt={article.postHeading} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{article.postHeading}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                  <Link href={`/academy/${article.id}`}>
                    <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200">
                      Learn More <FaArrowRight className="ml-2" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/academy">
            <span className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Explore All Lessons
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademySection;