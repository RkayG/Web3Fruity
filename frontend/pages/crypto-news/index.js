import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';

const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const newsPerPage = 2;
  const observer = useRef();
  const lastNewsElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const fetchNews = useCallback(async (pageNumber) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:1225/crypto-news?page=${pageNumber}&limit=${newsPerPage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      if (data) {
        if (data.length < newsPerPage) {
          setHasMore(false);
        }
        setNews(prevNews => {
          const newNews = data.filter(
            (newItem) => !prevNews.some((prevItem) => prevItem._id === newItem._id)
          );
          return [...prevNews, ...newNews];
        });
      }
    } catch (error) {
      console.error('Error fetching crypto news:', error);
      setError('Failed to load news. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews(page);
  }, [page, fetchNews]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRetry = () => {
    setError('');
    fetchNews(page);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderNewsItem = (item, index) => {
    const isLargeCard = index === 0 || index % 4 === 0;
    const cardClass = isLargeCard
      ? "rounded-lg bg-[#1a1a1a] p-6 md:col-span-2 lg:col-span-1 hover:bg-black/70 cursor-pointer"
      : "h-[350px] rounded-lg bg-[#f5f5f5] p-4 hover:bg-black hover:text-white cursor-pointer";

    return (
      <motion.div
        key={item._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link
          href={`/crypto-news/${item.slug}`}
          ref={index === news.length - 1 ? lastNewsElementRef : null}
        >
          <div className={cardClass}>
            {isLargeCard ? (
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <img
                  src={item.imageLink}
                  alt={item.newsHeading}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold bg-black bg-opacity-50 text-white">
                    {item.newsHeading}
                  </h2>
                  <p className="mt-2 text-white/80 bg-black bg-opacity-50">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex h-[100px] items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={item.imageLink}
                    alt={item.newsHeading}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">{item.newsHeading}</h3>
                  <p className="text-gray-500">{item.description}The meme-inspired cryptocurrency continues its meteoric rise, fueled by celebrity endorsements and
                  growing retail investor interest.</p>
                </div>
              </>
            )}
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="mx-auto px-4">
        <h2 className="lg:text-[57px] text-2xl font-bold text-center py-10 mb-20 -mt-3 bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent">
          Latest Cryptocurrency News & Insights
        </h2>
        {error && (
          <div className="text-center mb-8">
            <p className='font-semibold text-red-500 mb-4'>{error}</p>
            <button 
              onClick={handleRetry}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Retry
            </button>
          </div>
        )}
        <AnimatePresence>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {news.map(renderNewsItem)}
          </div>
        </AnimatePresence>
        {loading && (
          <div className="loading-dots m-auto my-10">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
        {!hasMore && <p className="text-center mt-8">No more news to load.</p>}
      </div>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="sticky z-500 bottom-8 lg:left-[90%] left-[80%] bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};

export default CryptoNews;