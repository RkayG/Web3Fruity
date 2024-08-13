import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import axios from 'axios';
import { formatTimestamp } from '../../utils';
import { BottomSubscribe } from '../../Components';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaCalendarAlt, FaUser, FaFacebookF, FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Navigation = ({ title }) => {
  return (
    <nav className="flex items-center space-x-2 text-pink-900 ml-6 mt-6">
      <p>
        <Link href="/academy" className="hover:text-blue-600">
          Crypto News <span className='mr-1'>&gt;</span>
        </Link>
        <p className="font-semibold text-blue-800 inline">{title}</p>
      </p>
    </nav>
  );
};


const ShareButton = ({ icon, color, onClick, label }) => (
  <button
    onClick={onClick}
    className={`${color} text-white p-2 rounded-full hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}`}
    aria-label={label}
  >
    {icon}
  </button>
);

const CryptoNewsContent = () => {
  const [cryptoNewsData, setCryptoNewsData] = useState(null);
  const [additionalNews, setAdditionalNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCryptoNews = async (slug) => {
      try {
        const response = await fetch(`${apiUrl}/crypto-news/${slug}`);
        const cryptoNews = await response.json();
        setCryptoNewsData(cryptoNews);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load crypto news:', error);
        setError('Failed to load crypto News');
        setLoading(false);
      }
    };

    const fetchAdditionalCryptoNews = async (slug) => {
      try {
        const response = await axios.get(`${apiUrl}/crypto-news`, {
          params: { limit: 6 },
        });
        const cryptoNews = response.data.filter((news) => news.slug !== slug);
        setAdditionalNews(cryptoNews);
      } catch (error) {
        console.error('Failed to load additional crypto News:', error);
      }
    };

    if (router.isReady) {
      const { slug } = router.query;
      if (slug) {
        fetchCryptoNews(slug);
        fetchAdditionalCryptoNews(slug);
      }
    }
  }, [router.isReady, router.query.slug]);

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(cryptoNewsData.newsHeading)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(cryptoNewsData.newsHeading)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500 text-xl bg-red-100 p-6 rounded-lg shadow-md">
          {error}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }

  const { newsHeading, imageLink, timestamp, content, author } = cryptoNewsData;

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <div className="my-8">
            <img src={file.url} alt={title} className="w-full rounded-lg shadow-md" />
            {title && <p className="text-center text-sm text-gray-600 mt-2">{title}</p>}
          </div>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-6 leading-relaxed">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-6">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="text-blue-600 font-bold hover:underline transition-colors duration-300">
          {children}
        </a>
      ),
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation title={newsHeading} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {newsHeading}
        </motion.h1>
        
        <motion.div 
          className="flex flex-wrap justify-between items-center mb-8 text-gray-600"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            {formatTimestamp(timestamp)}
          </p>
          <p className="flex items-center mt-2 sm:mt-0">
            <FaUser className="mr-2" />
            Written by {author}
          </p>
        </motion.div>

        {imageLink && (
          <motion.img 
            src={imageLink} 
            alt='Crypto news thumbnail' 
            className="w-full h-80 object-cover rounded-xl shadow-lg mb-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        )}

        {/* =============== SHARE BUTTONS, NEEDS MORE TWEAKING ======================*/}

       {/*  <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ShareButton
            icon={<FaFacebookF />}
            color="bg-blue-600"
            onClick={shareOnFacebook}
            label="Share on Facebook"
          />
          <ShareButton
            icon={<FaTwitter />}
            color="bg-blue-400"
            onClick={shareOnTwitter}
            label="Share on Twitter"
            title="Share on Twitter"
            
          />
          <ShareButton
            icon={<FaLinkedinIn />}
            color="bg-blue-700"
            onClick={shareOnLinkedIn}
            label="Share on LinkedIn"
          />
          <ShareButton
            icon={<FaLink />}
            color="bg-gray-600"
            onClick={copyLink}
            label="Copy link"
          />
        </motion.div>
        {copied && (
          <motion.p
            className="text-green-600 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Link copied to clipboard!
          </motion.p>
        )} */}
      {/* ==================================================================== */}

        {content ? (
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {documentToReactComponents(content, renderOptions)}
          </motion.div>
        ) : (
          <p className="text-center text-gray-500">Content unavailable</p>
        )}
      </div>

      <motion.div 
        className="bg-gray-100 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalNews.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={`/crypto-news/${item.slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <img src={item.imageLink} alt={item.newsHeading} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{item.newsHeading}</h3>
                      <p className="text-gray-600 text-sm">{formatTimestamp(item.timestamp)}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <BottomSubscribe />
    </motion.section>
  );
};

export default CryptoNewsContent;