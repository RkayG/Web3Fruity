import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaShip, Fa } from 'react-icons/fa';
import { Close } from '../../Components';

const Academy = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTrack, setSelectedTrack] = useState('Any');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')
  const [progress, setProgress] = useState({});
  const tracks = ['Any', 'Beginner', 'Intermediate', 'Advanced'];
  const topics = ['All', 'Blockchain', 'DeFi', 'NFTs', 'Cryptocurrency', 'Trading'];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:1225/academy');
        setArticles(response.data);
        setCategories(['All', ...new Set(response.data.map(article => article.category))]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
        setError('Unable to fetch articles, please refresh the browser');
      }
    };

    fetchArticles();
  }, []);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  if (error)
    return <div className="text-red-500 my-28 lg/md:my-44 m-auto text-center">{error}</div>;

  const filterArticles = () => {
    return articles.filter(article => {
      return (
        (selectedCategory === 'All' || article.category === selectedCategory) &&
        (selectedTrack === 'Any' || article.track === selectedTrack) &&
        (selectedTopic === 'All' || article.tags.includes(selectedTopic)) &&
        (searchQuery === '' || article.postHeading.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  };

  const filteredArticles = filterArticles();

  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32">
      <div className="mx-auto">
        <div className="bg-gradient-to-b from-[#F7E0D4] to-white lg:h-[50vh] mb-12 md:mb-24 lg:mb-32 pt-12 md:pt-24 lg:pt-32">
          <h1 className="text-3xl lg:text-[67px] font-bold flex justify-center mx-3 text-center pt-10 py-8  -mt-3 bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent">
            Crypto Education Articles
          </h1>
          <p className='text-xl text-gray-400 font-semibold text-center mb-10'>Dive into topics that spark your interest, from Blockchain to DeFi, NFTs to Cryptocurrency, and beyond.</p>
          <div className="flex flex-wrap relative justify-center gap-4 mb-20 w-[80%] mx-auto">
            <label className="w-full lg:w-[80%] relative">
              <input 
                type="text"
                className="p-3 px-4 rounded-lg bg-white  w-full flex justify-center mx-auto lg:w-[80%] border border-orange-700 text-gray-400 "
                placeholder="Search for a topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-[90px] top-[10px] text-white bg-gray-300 p-1 rounded-lg"
                  onClick={handleClearSearch}
                >
                  <Close />
                </button>
              )}
             
            </label>
          </div>
        </div>
        <div className="mb-8 flex flex-col items-center px-4 lg/md:px-8">
          <div className="flex flex-wrap justify-center w-full p-6 gap-4 mb-12 bg-blue-300 mx-8 rounded-3xl">
            <label>
              <span className="block mb-3 font-bold text-2xl lg/md:text-3xl text-center text-blue-600">Choose a learning track:</span>
              <ul className="p-2 rounded-lg bg-gray-200 flex flex-wrap justify-center gap-0 lg/md:gap-4 mb-4">
                {tracks.map(track => (
                  <li key={track}>
                    <button
                      className={`py-2 px-4 rounded-lg ${selectedTrack === track ? 'bg-orange-700 text-white' : 'bg-gray-200'}`}
                      onClick={() => setSelectedTrack(track)}
                    >
                      {track}
                    </button>
                  </li>
                ))}
              </ul>
            </label>
          </div>
          <div className="flex flex-wrap justify-center w-full p-6 pt-10 pb-0 gap-4 mb-4 bg-[#F7E0D4] mx-8 rounded-3xl">
            <label>
              <span className="block mb-4 font-bold text-2xl lg/md:text-3xl text-center text-orange-700">Choose interested topic(s):</span>
              <ul className="p-2 rounded-t-3xl bg-gray-200 border border-orange-700/70 border-b-0 lg:w-[80%] mx-auto flex flex-wrap gap-0 lg/md:gap-4 relative bottom-0">
                {topics.map(topic => (
                  <li key={topic}>
                    <button
                      className={`py-2 px-4 lg/md:px-4 rounded-lg ${selectedTopic === topic ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      onClick={() => setSelectedTopic(topic)}
                    >
                      {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </label>
          </div>
        </div>
        <div className="text-2xl px-2 lg/md:text-3xl font-bold my-20 text-center flex items-center flex-wrap justify-center">
          <p className="text-center mr-4 bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent">Begin Your Learning Journey</p>
          <FaShip className="text-[52px] text-orange-700 text-center" />
        </div>
        {loading ? (
          <div className="loading-dots m-auto my-28">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map(article => (
              <Link href={`/academy/${article.slug}`} key={article._id}>
                <div className="rounded-lg bg-[#f5f5f5] p-4 hover:bg-black hover:text-white cursor-pointer">
                  <div className="relative h-[200px] overflow-hidden rounded-lg">
                    <img src={article.imageLink} alt={article.postHeading} className="h-full w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h2 className="text-xl font-bold bg-black bg-opacity-50 text-white">{article.postHeading}</h2>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-500">{article.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      className="py-2 px-4 rounded-lg bg-blue-600 text-white"
                      onClick={() => setProgress(prev => ({ ...prev, [article._id]: !prev[article._id] }))}
                    >
                      {progress[article._id] ? 'Mark as Unread' : 'Mark as Read'}
                    </button>
                    {progress[article._id] && <span className="text-green-500">Completed</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Academy;
