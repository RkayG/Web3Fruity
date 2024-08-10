import { useEffect, useState } from 'react';
import { getTimeDifference } from '../utils';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaNewspaper, FaChevronRight } from 'react-icons/fa';

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
    <section className="py-4 max-w-[1580px] m-auto w-full mb-32">
      <h2 className="text-3xl md:text-4xl font-extrabold flex items-center mb-12 px-4 md:px-8">
        <FaNewspaper className="text-orange-800 mr-4 text-4xl md:text-5xl" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-orange-800">
          Crypto News
        </span>
      </h2>
      <div className="mx-3">
        {loading ? (
          <CryptoNewsSkeleton />
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <Link href={`/crypto-news/${item.slug}`} key={index}>
                <div className="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#e6e6e6] dark:hover:bg-[#2a2a2a]">
                  <div className="relative h-[300px] overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
                      height="300"
                      src={item.imageLink}
                      alt="News thumbnail"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white bg-black bg-opacity-50 px-2 py-2 transition-colors duration-300 ease-in-out hover:bg-opacity-70">{item.newsHeading}</h2>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-700 dark:hover:text-gray-200">{getTimeDifference(item.timestamp)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link href="/crypto-news">
        <span className="text-blue-800 hover:text-orange-800 flex w-[96%] justify-center mx-auto items-center cursor-pointer text-lg mt-16 font-semibold transition-all duration-300 ease-in-out hover:translate-x-2">
          Explore Crypto News <FaChevronRight className="ml-2" />
        </span>
      </Link>
    </section>
  );
};

export default CryptoNews;