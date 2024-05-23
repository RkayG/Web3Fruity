import { useEffect, useState } from 'react';
import { getTimeDifference } from '../utils';
import Link from 'next/link'; // Import Link for internal navigation

const CryptoNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:1225/crypto-news');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching crypto news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="crypto-news py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cryptocurrency News & Insights
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Link href={`/news/${item.fields.slug}`} key={index}>
              <a className="news-card block rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.fields.newsThumbnailLink}
                  alt={item.fields.cryptoNewsTitle}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition duration-300 ease-in-out">
                    {item.fields.cryptoNewsTitle}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.fields.cryptoNewsDescription}</p>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-500">
                      {getTimeDifference(item.fields.timestamp)}
                    </p>
                    <p className="text-gray-500 font-semibold">
                      {item.fields.cryptoNewsSiteName}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <button className="py-2 px-4 mt-8 mx-auto block rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold transition duration-300 ease-in-out">
          Read More News
        </button>
      </div>
    </section>
  );
};

export default CryptoNews;
