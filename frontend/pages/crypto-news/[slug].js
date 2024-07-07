import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import axios from 'axios';
import { formatTimestamp } from '../../utils';
import { BottomSubscribe } from '../../Components';

const Navigation = ({ title }) => {
  return (
    <nav className="flex items-center space-x-2 text-pink-900 ml-6 mt-6">
      <p>
        <Link href="/crypto-news" className="hover:text-blue-600">
          Crypto News <span className='mr-1'>&gt;</span>
        </Link>
        <p className="font-semibold text-blue-800 inline">{title}</p>
      </p>
    </nav>
  );
};

const CryptoNewsContent = () => {
  const [cryptoNewsData, setCryptoNewsData] = useState(null);
  const [additionalNews, setAdditionalNews] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCryptoNews = async (slug) => {
      try {
        const response = await fetch(`http://localhost:1225/crypto-news/${slug}`);
        const cryptoNews = await response.json();
        setCryptoNewsData(cryptoNews);
      } catch (error) {
        console.error('Failed to load crypto news:', error);
        setError('Failed to load crypto News');
      }
    };

    const fetchAdditionalCryptoNews = async (slug) => {
      try {
        const response = await axios.get('http://localhost:1225/crypto-news', {
          params: {
            limit: 6,
          },
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

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!cryptoNewsData) {
    return (
      <div className="loading-dots m-auto my-44">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    );
  }

  const { newsHeading, imageLink, timestamp, content, author } = cryptoNewsData;

  // Define custom render options
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <div className="my-4 rounded-md">
            <img src={file.url} alt={title} className="mx-auto rounded-lg" />
            {title && <p className="text-center text-sm text-gray-600">{title}</p>}
          </div>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="text-blue-500 hover:underline">
          {children}
        </a>
      ),
    },
  };

  return (
    <section>
      <Navigation title={newsHeading} />

      <div className='max-w-[785px] m-auto'>
        <div className="p-4 mt-12">
          <h1 className="text-3xl font-bold text-center my-6 max-w-[785px]">{newsHeading}</h1>
          <span className='flex flex-wrap justify-between mb-6'>
            <p>{formatTimestamp(timestamp)}</p>
            <p>Written by {author}</p>
          </span>
          {imageLink && <img src={imageLink} alt='Crypto news thumbnail' className="w-[785px]" />}

          {content ? (
            <div>
              <div className='border-t-2 p-6 lg:px-12 bg-gray-100'>{documentToReactComponents(content, renderOptions)}</div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Content unavailable</p>
          )}
        </div>
      </div>

      {/* Display additional news */}
      <div className="py-8 px-3 mt-12 border rounded-md bg-gray-50 mb-32">
        <h2 className="text-2xl font-bold mb-6 px-6">Related News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalNews.map((item) => (
            <Link href={`/crypto-news/${item.slug}`} key={item._id}>
              <div className="rounded-lg bg-[#f5f5f5] p-6 md:col-span-2 lg:col-span-1 hover:bg-black cursor-pointer">
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <img src={item.imageLink} alt={item.newsHeading} className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold bg-black bg-opacity-50 text-white">{item.newsHeading}</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BottomSubscribe />
    </section>
  );
};

export default CryptoNewsContent;
