import { useEffect, useState } from 'react';
import { getTimeDifference } from '../utils';
import Link from 'next/link';

const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:1225/crypto-news');
        const data = await response.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Calculate the news to be displayed on the current page
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="crypto-news py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        
        {loading ? (
          <div className="loading-dots m-auto my-28">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-10">
              Cryptocurrency News & Insights
             </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentNews.map((item, index) => (
                <Link href={'/crypto-news'} key={index} className="news-card block rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.imageLink}
                    alt={item.newsHeading}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition duration-300 ease-in-out">
                      {item.newsHeading}
                    </h3>
                    <p className="text-gray-700 mb-4">{item.cryptoNewsDescription}</p>
                    <div className="flex items-center justify-between text-sm">
                      <p className="text-gray-500">
                        {getTimeDifference(item.timestamp)}
                      </p>
                      <p className="text-gray-500 font-semibold">
                        {item.author}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {Array.from({ length: Math.ceil(news.length / newsPerPage) }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CryptoNews;
