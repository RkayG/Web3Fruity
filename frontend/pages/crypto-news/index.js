import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { getTimeDifference } from '../../utils';
import { FaArro } from 'react-icons/fa';

const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState('');
  const newsPerPage = 2;
  const loader = useRef(null);

  const fetchNews = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:1225/crypto-news?page=${pageNumber}&limit=${newsPerPage}`);
      const data = await response.json();
      if (data) {
        if (data.length < newsPerPage) {
          setHasMore(false);
        }
        setNews((prevNews) => {
          const newNews = data.filter(
            (newItem) => !prevNews.some((prevItem) => prevItem._id === newItem._id)
          );
          return [...prevNews, ...newNews];
        });
      }
   
    } catch (error) {
      console.error('Error fetching crypto news:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loading, hasMore]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto px-4">
          <h2 className="lg:text-[57px] text-2xl font-bold text-center py-10  mb-20 -mt-3 bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent">
            Latest Cryptocurrency News & Insights
          </h2>
        {error && 
            <p className='text-center font-semibold '>{error}</p>
          }
        
        {loading ? (
          <div className="loading-dots m-auto my-28">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        ) : (
          <>
           
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item, index) => {
                if (index === 0 || index % 4 === 0) {
                  return (
                    <a href={item.newsUrl} key={item._id}>
                      <div className="rounded-lg bg-[#1a1a1a] p-6 md:col-span-2 lg:col-span-1 hover:bg-black/70 cursor-pointer">
                      
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
                                {item.description} The meme-inspired cryptocurrency continues its meteoric rise, fueled by celebrity endorsements and
                                growing retail investor interest.
                              </p>
                                <div className="">
                                    <p className="text-gray-500 dark:text-gray-400 mr-3 relative -bottom-5 ">
                                      <a href={item.newsUrl} className="text-blue-200 font-semibold hover:underline" title={item.newsUrl}>
                                        {item.sourceWebsiteName}
                                      </a>
                                  </p> 
                                  {/*  <p className="text-gray-500 dark:text-gray-400">{getTimeDifference(item.timestamp)}</p> */}
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </a>
                  );
                } else {
                  return (
                    <a href={item.newsUrl} key={item._id}>
                      <div className="h-[350px] rounded-lg bg-[#f5f5f5] p-4 hover:bg-black hover:text-white cursor-pointer">
                        <div className="flex h-[100px] items-center justify-center overflow-hidden rounded-lg">
                          <img
                            src={item.imageLink}
                            alt={item.newsHeading}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="relative right-1 py-2">
                            <p className=" mr-3 absolute right-1 text-yellow-800 font-semibold">
                                {item.sourceWebsiteName}        
                            </p> 
                           {/*  <p className="text-gray-500 dark:text-gray-400">{getTimeDifference(item.timestamp)}</p> */}
                          </div>
                        <div className="mt-4 space-y-2">
                          <h3 className="text-lg font-medium">{item.newsHeading}</h3>
                          <p className="text-gray-500">
                            {item.description}The meme-inspired cryptocurrency continues its meteoric rise, fueled by celebrity endorsements and
                            growing retail investor interest.
                          </p>
                        </div>
                       
                      </div>
                    </a>
                  );
                }
              })}
            </div>
            {hasMore && (
              <div ref={loader} className="loading-dots m-auto my-28">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default CryptoNews;
