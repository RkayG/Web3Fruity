import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe} from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import ReactPlayer from 'react-player/youtube';
import Glide from '@glidejs/glide';
import Modal from 'react-modal';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
/* import { EffectCoverflow, Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
 */

const YouTubePlayer = ({ url }) => {
  return (
    <div className="player-wrappern shadow-md rounded-md flex justify-center pb-16/9 sm:pb-16/9 md:pb-16/9 lg:pb-16/9 xl:pb-16/9 h-0">
      <ReactPlayer
        className="react-player rounded-md w-full h-full"
        url={url}
        
        controls
      />
    </div>
  );
};

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

const breakpoints = { 
  640: { slidesPerView: 1.3 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};
  
const GameDetails = () => {
    const [game, setGame] = useState(null);
    const [additionalGames, setAdditionalGames] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    //const [showFullDescription, setShowFullDescription] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      const fetchGame = async (_slug) => {
        try {
          const response = await fetch(`http://localhost:1225/games/${_slug}`);
          const gameData = await response.json();
          // console.log(gameData);
          setGame(gameData);
          setLoading(false);
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

    const { title, description, logo, guide, gallery } = game;

    const GlideCarousel = ({ gallery }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedImage, setSelectedImage] = useState(null);
    
      useEffect(() => {
        if (gallery && gallery.length > 0) {
          const glide = new Glide('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 3,
            gap: 20,
            keyboard: true,
            rewind: false,
            bound: true,
           
            breakpoints: {
              1024: { perView: 2 },
              768: { perView: 2 },
              640: { perView: 1 }
            }
          });
    
          glide.mount();
    
          return () => glide.destroy();
        }
      }, [gallery]);
    
      const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
      };
    
      if (!gallery || gallery.length === 0) {
        return <p className="text-center text-gray-500">No gallery available.</p>;
      }
    
      return (
        <>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {gallery.map((image, index) => (
                  <li key={index} className="glide__slide">
                    <div className="bg-white shadow-md rounded-md p-1 mb-3 relative">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-56 rounded-md cursor-pointer"
                        onClick={() => openModal(image)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&lt;</button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&gt;</button>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              {gallery.map((_, index) => (
                <button key={index} className="glide__bullet" data-glide-dir={`=${index}`}></button>
              ))}
            </div>
          </div>
    
          {selectedImage && (
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Selected Image"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  width: '70%',
                  maxWidth: '800px',
                  height: '70%',
                  maxHeight: '80%',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  padding: '0',
                }
              }}
            >
              <div className="relative w-full h-full">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 text-black shadow-lg"
                >
                  &times;
                </button>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </Modal>
          )}
        </>
      );
    };
    

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
        [BLOCKS.PARAGRAPH]: (node, children) => <p className=" text-xl font-sans max-w-[690px] mb-4">{children}</p>,
        [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
        [INLINES.HYPERLINK]: (node, children) => (
          <a href={node.data.uri} className="text-blue-500 hover:underline">
            {children}
          </a>
        ),
      },
    };
   

  
const GameCard = ({ game }) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
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
        transition={{ duration: 0.5, delay: 0.2 }}
        className="game-stats grid grid-cols-2 gap-4 md:grid-cols-4 mt-8"
      >
        {[
          { icon: "fa-cube", label: `${game.token} Price`, value: "$0.00" },
          { icon: "fa-chart-line", label: "Marketcap", value: "$0" },
          { icon: "fa-coins", label: "Required Investment", value: "$1,999,999" },
          { icon: "fa-sack-dollar", label: "Avg Game Earning / Day", value: "$0" },
        ].map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-md">
            <i className={`fas ${stat.icon} text-2xl mb-2`}></i>
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="text-lg font-bold">{stat.value}</p>
          </div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="gameplay-trailer-and-gallery my-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
          {game.title} Gameplay
        </h2>
        <div className='gameplay-container rounded-lg overflow-hidden shadow-2xl'>
          <YouTubePlayer url={game.trailer} />
          <div className="mt-96">
            <GlideCarousel gallery={game.gallery} />
          </div>
        </div>
      </motion.div>

      {guide ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="game-guide mt-16 mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
            Game Guide
          </h2>
          <div className="guide-content max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 lg:p-10 border-t-4 border-blue-600">
              {documentToReactComponents(guide, {
                ...renderOptions,
                renderNode: {
                  ...renderOptions.renderNode,
                  [BLOCKS.PARAGRAPH]: (node, children) => (
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">{children}</p>
                  ),
                  [BLOCKS.HEADING_1]: (node, children) => (
                    <h1 className="text-3xl font-bold mb-6 text-blue-800">{children}</h1>
                  ),
                  [BLOCKS.HEADING_2]: (node, children) => (
                    <h2 className="text-2xl font-semibold mb-4 mt-8 text-blue-700">{children}</h2>
                  ),
                  [BLOCKS.HEADING_3]: (node, children) => (
                    <h3 className="text-xl font-semibold mb-3 mt-6 text-blue-600">{children}</h3>
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
                  [INLINES.HYPERLINK]: (node, children) => (
                    <a href={node.data.uri} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
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
        transition={{ duration: 0.5, delay: 0.8 }}
        className="more-games py-12 px-6 mt-12 mb-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-inner"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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
