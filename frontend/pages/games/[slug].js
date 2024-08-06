import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe, FaDollarSign, FaChartLine, FaCoins, FaSackDollar } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import ReactPlayer from 'react-player/youtube';
import { Dialog } from '@headlessui/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';


const Navigation = ({ title }) => {
  
    return (
      <nav className="flex items-center space-x-2 text-pink-900 ml-6 mt-6">
        <Link href="/games" className="hover:text-blue-600"> 
           Games
        </Link>
        <span> &gt; </span>
        <span className="font-semibold text-blue-800">{title}</span>
      </nav>
    );
};

const GalleryAndTrailer = ({ trailer, gallery }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      } else if (event.key === 'ArrowLeft') {
        navigateImage(-1);
      } else if (event.key === 'ArrowRight') {
        navigateImage(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const navigateImage = (direction) => {
    if (gallery.length > 1) {
      setSelectedImageIndex((prevIndex) => {
        const newIndex = (prevIndex + direction + gallery.length) % gallery.length;
        return newIndex;
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:row-span-2">
          <div className="aspect-w-16 aspect-h-24 rounded-lg overflow-hidden shadow-lg h-[260px]">
            <ReactPlayer
              url={trailer}
              width="100%"
              height="100%"
              controls
              playing
              light={true}
              playIcon={
                <button className="bg-red-600 text-white rounded-full p-4 hover:bg-red-700 transition-colors duration-300">
                  Play Trailer
                </button>
              }
            />
          </div>
        </div>
        
        {gallery.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.slice(0, 5).map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative cursor-pointer overflow-hidden rounded-lg shadow-md ${
                  index === 4 ? 'col-span-2 sm:col-span-1' : ''
                }`}
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
            ))}
            {gallery.length > 5 && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                onClick={() => openModal(5)}
              >
                <span className="text-white text-xl font-bold">+{gallery.length - 5} More</span>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="col-span-full flex items-center justify-center bg-gray-100 rounded-lg p-8">
            <p className="text-gray-500 text-lg">Gallery not available</p>
          </div>
        )}
      </div>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
          <div className="relative bg-white rounded-lg max-w-3xl w-full md:max-w-xl mx-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
            >
              <X size={24} className='text-white bg-red-500 hover:bg-white hover:text-red-500 transition-all'/>
            </button>
            {gallery.length > 0 && (
              <>
                <img
                  src={gallery[selectedImageIndex]}
                  alt={`Selected gallery image ${selectedImageIndex + 1}`}
                  className="w-full h-[300px] lg:h-[500px] rounded-lg"
                />
                <button
                  onClick={() => navigateImage(-1)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateImage(1)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

  
const GameDetails = () => {
  const [game, setGame] = useState(null);
  const [additionalGames, setAdditionalGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState('$0.00');
  const [marketCap, setMarketCap] = useState('$0');
  const router = useRouter();

  useEffect(() => {
    const fetchGame = async (_slug) => {
      try {
        const response = await fetch(`http://localhost:1225/games/${_slug}`);
        const gameData = await response.json();
        setGame(gameData);
        setLoading(false);

        // Fetch coin data
        if (gameData.token_api_id) {
          try {
            const coinResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${gameData.token_api_id}`);
            const coinData = coinResponse.data;
            setPrice(`$${coinData.market_data.current_price.usd.toFixed(2)}`);
            setMarketCap(`$${coinData.market_data.market_cap.usd.toLocaleString()}`);
          } catch (error) {
            console.error('Error fetching coin data:', error);
          }
        }
      } catch (error) {
        console.error('Failed to load Game info:', error);
        setError('Failed to load game info');
      }
    };
      const fetchAdditionalGames = async () => {
        try {
          const response = await axios.get('http://localhost:1225/games', {
            params: {
              limit: 4,
            },
          });
         // console.log(response);
          const games = await response.data;
         // console.log(games);
          setAdditionalGames(games);
        } catch (error) {
          console.error('Failed to load additional games:', error);
        }
      };
  
      if (router.isReady) {
        console.log(router.query);
        const { slug } = router.query;
        console.log(slug);
        if (slug) {
          fetchGame(slug);
          fetchAdditionalGames();
        }
      }
    }, [router.isReady, router.query.slug]);
  
    if (error) {
      return <div className="text-red-500">{error}</div>;
    }
  
    if (loading) {
      return <div className='flex justify-center my-32'> Loading game info </div>
    }

    if (!game) {
        return <div>Game not found</div>;
      }

  const { title, description, logo, guide, gallery } = game
  
const GameCard = ({ game }) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="mt-12 overflow-hidden m-auto mb-4 transition-shadow duration-300"
    style={{ width: "100%" }}
  >
    
    <div className="bg-white rounded-xl shadow-lg overflow-hidden m-auto lg:p-6 mb-6 border border-gray-200 hover:border-blue-500 transition-all duration-300" style={{ width: "95%" }}>
      <div className="flex flex-col lg:flex-row">
        <img className="w-full h-48 lg:w-48 lg:h-48 object-cover rounded-t-xl lg:rounded-xl mb-4 lg:mb-0 lg:mr-6" src={game.image} alt={game.title} />
        <div className="flex-1 px-4 lg:px-0">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 flex mx-auto lg:mx-0">{game.title}</h2>
            {/* <Link href={`/games/${game.slug}`}>
              <span className="text-sm font-semibold py-1 px-4 bg-blue-100 text-blue-800 rounded-full cursor-pointer hover:bg-blue-200 transition-colors duration-300">
                View
              </span>
            </Link> */}
          </div>
          <div className="flex items-center mb-3 justify-center mx-auto lg:mx-0 lg:justify-start">
            <a href={game.website} className="mr-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"><FaGlobe title={game.website} /></a>
            {game.socialLinks.map((link, index) => {
              let icon;
              if (link.includes("twitter.com") || link.includes("x.com")) icon = <FaTwitter title={link} />;
              else if (link.includes("facebook.com")) icon = <FaFacebook title={link} />;
              else if (link.includes("discord.com") || link.includes("discord.gg")) icon = <FaDiscord title={link} />;
              else if (link.includes("telegram.com") || link.includes("t.me")) icon = <FaTelegram title={link} />;
              else if (link.includes("reddit.com")) icon = <FaReddit title={link} />;
              return (
                <a key={index} href={link} className="mx-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  {icon}
                </a>
              );
            })}
          </div>
          <p className="text-sm text-blue-800 font-semibold mb-2">Developer: {game?.developer}</p>
          <p className="text-sm text-gray-600 mb-4">{game.description}</p>
        </div>
      </div>
      <div className="bg-gray-100 p-4 mt-4 rounded-xl">
        <div className="flex flex-wrap justify-start lg:justify-between gap-3">
          <InfoTag label="Genre" value={game?.genre} color="blue" />
          <InfoTag label="Platform" value={game?.platform.length > 1 ? game?.platform.join(', ') : game?.platform} color="green" />
          <InfoTag label="Token" value={game?.token} color="red" />
          <InfoTag label="Free-to-Play" value={game?.free2play ? "Yes" : "No"} color="blue" />
          <InfoTag label="Chain" value={game?.chain || 'N/A'} color="green" />
        </div>
      </div>
    </div>
    </motion.div>
  );
};

const InfoTag = ({ label, value, color }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
  };

  return (
    <div className={`px-3 py-1 rounded-full ${colorClasses[color]}`}>
      <p className="text-xs font-semibold">{label}: <span className="font-normal">{value}</span></p>
    </div>
  );
};
    
  return (
    <main className='max-w-[1928px] m-auto px-4 sm:px-6 lg:px-8'>
      <Navigation title={title} />
      <GameCard game={game} className='mt-12' />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="game-stats grid grid-cols-2 gap-4 md:grid-cols-4 mt-8"
      >
        {[
          { Icon: FaDollarSign, label: `${game?.token} Price`, value: price },
          { Icon: FaChartLine, label: "Marketcap", value: marketCap },
          { Icon: FaCoins, label: "Required Investment", value: `${game?.initialInvestment || 'N/A'}` },
          { Icon: FaFacebook, label: "Avg Income / Week", value: `${game?.avgEarnPerWeek || 'N/A'}` },
        ].map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-md">
            <div className='flex flex-wrap'>
              <stat.Icon className="text-lg mb-2 mr-2" />
              <p className="text-sm font-medium">{stat.label}</p>
            </div>
            <p className="text-lg font-bold">{stat.value}</p>
          </div>
        ))}

      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="gameplay-trailer-and-gallery my-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
          {game.title} Gameplay
        </h2>
        
         <GalleryAndTrailer trailer={game.trailer} gallery={game.gallery} />

      </motion.div>

      {guide ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="game-guide mt-16 mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
            {title} Guide
          </h2>
          <div className="guide-content max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 lg:p-10 border-t-4 border-blue-600">
              {documentToReactComponents(guide, {
               
                renderNode: {
                  [BLOCKS.PARAGRAPH]: (node, children) => (
                    <p className="text-lg  mb-6 ">{children}</p>
                  ),
                  [BLOCKS.HEADING_1]: (node, children) => (
                    <h1 className="text-3xl font-bold mb-6 ">{children}</h1>
                  ),
                  [BLOCKS.HEADING_2]: (node, children) => (
                    <h2 className="text-2xl font-bold mb-4 mt-8">{children}</h2>
                  ),
                  [BLOCKS.HEADING_3]: (node, children) => (
                    <h3 className="text-xl font-bold mb-3 mt-6 ">{children}</h3>
                  ),
                  [BLOCKS.UL_LIST]: (node, children) => (
                    <ul className="list-disc list-inside mb-6 pl-4">{children}</ul>
                  ),
                  [BLOCKS.OL_LIST]: (node, children) => (
                    <ol className="list-decimal list-inside mb-6 pl-4">{children}</ol>
                  ),
                  [BLOCKS.LIST_ITEM]: (node, children) => (
                    <li className="mb-2 text-gray-700">{children}</li>
                  ),
                  [BLOCKS.QUOTE]: (node, children) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-6 italic text-gray-600">
                      {children}
                    </blockquote>
                  ),
                  [BLOCKS.EMBEDDED_ASSET]: (node) => {
                    const { file, title } = node.data.target.fields;
                    return (
                      <div className="my-4 rounded-md">
                        <img src={file.url} alt={title} className="mx-auto rounded-lg" />
                        {title && <p className="text-center text-sm text-gray-600">{title}</p>}
                      </div>
                    );
                  },
                  [INLINES.HYPERLINK]: (node, children) => (
                    <a href={node.data.uri} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                },
              })}
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="text-center text-gray-500 my-16">
          <p className="text-xl">No guide available for this game.</p>
          <p className="mt-2">Check back later for updates!</p>
        </div>
      )}
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="more-games py-12 px-6 mt-12 mb-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-inner"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-orange-800">
          More Games You Might Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalGames.map((game) => (
            <motion.div
              key={game._id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img className="w-full h-48 object-cover" src={game.image} alt={game.title} />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{game.title}</h3>
                <p className='text-gray-600 mb-2'>{game.genre}</p>
                <p className='text-sm font-medium text-orange-800'>{game?.platform.length > 1 ? game?.platform.join(', ') : game?.platform}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default GameDetails;
