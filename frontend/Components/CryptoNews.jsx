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
      <h2 className="text-3xl md:text-4xl  font-extrabold flex items-center mb-12 px-4 md:px-8">
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
      <Link href="/crypto-news">
          <span className="text-blue-800 hover:text-orange-800 flex justify-center mx-auto items-center cursor-pointer text-lg mt-16 font-semibold transition-colors duration-300">
            Explore All <FaChevronRight className="ml-2" />
          </span>
      </Link>
    </section>
  );
};

export default CryptoNews;
