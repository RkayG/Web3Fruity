import { useEffect, useState } from 'react';
import { getTimeDifference } from '../utils';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaNewspaper } from 'react-icons/fa';

const CryptoNewsSkeleton = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((index) => (
        <div key={index} className="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6">
          <div className="relative h-[300px] overflow-hidden rounded-lg bg-gray-200 animate-pulse"></div>
          <div className="mt-4">
            <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CryptoNews = () => {
  const router = useRouter();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:1225/crypto-news');
        const data = await response.json();
        console.log(data);
        setNews(data.slice(0, 3)); // Limit to 3 articles
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleNavigateToCryptoNews = () => {
    router.push('/crypto-news');
  };

  return (
    <section className="py-12 md:py-24 lg:py-32 max-w-[1580px] m-auto w-full mb-32">
      <span className="flex flex-wrap md:px-4 lg:px-8 px-4">
        <FaNewspaper className="text-2xl md:text-3xl lg:text-3xl text-blue-500 lg:ml-5 mr-4 mt-1" />
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 inline-block bg-clip-text 
        text-transparent bg-gradient-to-r from-blue-500 to-red-500">Crypto News</h2>
      </span>
      <div className="mx-3">
        {loading ? (
          <CryptoNewsSkeleton />
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <a href={item.newsUrl} key={index}>
                <div className="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6 hover:opacity-80">
                  <div className="relative h-[300px] overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full object-cover object-center"
                      height="300"
                      src={item.imageLink}
                      alt="News thumbnail"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white bg-black bg-opacity-50 px-2 py-2">{item.newsHeading}</h2>
                    </div>
                  </div>
                  <div className="mt-4">
                     <p className="text-gray-500 dark:text-gray-400 mr-3">
                      Source: 
                      <a href={item.newsUrl} className="text-blue-200 hover:underline ml-3" title={item.newsUrl}>
                        {item.sourceWebsiteName}
                      </a>
                    </p> 
                    <p className="text-gray-500 dark:text-gray-400">{getTimeDifference(item.timestamp)}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <button className='py-2 px-4 m-auto mt-6 flex justify-self-center hover:bg-blue-500 hover:text-white hover:transition-[0.2s]
         text-black active:bg-blue-100 rounded-xl hover:ease-in-out bg-gray-200' onClick={handleNavigateToCryptoNews}>
        More
      </button>
    </section>
  );
};

export default CryptoNews;
