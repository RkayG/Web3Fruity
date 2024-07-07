import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe} from 'react-icons/fa';
import axios from 'axios';
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
      <div className="bg-white rounded-lg mt-12 shadow-md overflow-hidden m-auto  mb-4 border-2 border-gray-200" style={{ width: "95%" }}>
        <div className="flex lg:pt-6">
          <img className="w-24 h-24 lg:w-40 lg:h-auto rounded-2xl m-4 lg:m-0 lg:rounded-md lg:mx-6" src={game.image} />
          <div className="ml-4 flex-1">
            <div className="">
              <h2 className="text-sm w-48 mt-4 lg:mt-0 lg:text-lg font-semibold cursor-pointer lg:w-60">{game.title}</h2>
            </div>

            <div className="flex items-center mt-2">
              <a href={game.website} className="mb-2 mr-3"><FaGlobe title={game.website} /></a>
              {game.socialLinks.map((link, index) => {
                let icon;
                if (link.includes("twitter.com")) {
                  icon = <FaTwitter title={link} />;
                } else if (link.includes("facebook.com")) {
                  icon = <FaFacebook title={link} />;
                } else if (link.includes("discord.com")) {
                  icon = <FaDiscord title={link} />;
                } else if (link.includes("telegram.com") || link.includes("t.me")) {
                  icon = <FaTelegram title={link} />;
                } else if (link.includes("reddit.com")) {
                  icon = <FaReddit title={link} />;
                }
                return (
                  <a key={index} href={link} className="mr-3 mb-2">
                    {icon}
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-blue-900 font-semibold">Developer: {game?.developer}</p>
            <p className="mt-2 w-auto pr-3 text-sm  h-20">{game?.description}</p>
          </div>
        </div>
  
        <div className="overflow-x-auto w-auto pt-6 pl-6 lg:ml-0  lg:w-full lg:mt-6 lg:inline-flex rounded-t-none rounded-b-md shadow-md bg-gray-200">
          <div className=" scrollbar-track-gray-200 lg:w-full lg:justify-center lg:m-auto scrollbar-thin inline-flex scrollbar-thumb-red-900" style={{ maxHeight: "150px", overflowY: "auto" }}>
            <div className="bg-white text-blue-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
              <p className="text-sm font-semibold text-center">Genre</p>
              <p className="text-center font-semibold text-xs">{game?.genre}</p>
            </div>
            <div className="bg-white text-green-800 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
              <p className="text-sm font-semibold text-center">Platform</p>
              <p className="text-center font-semibold text-xs">{game?.platform.length > 1 ? game?.platform.join(', ') : game?.platform}</p>
            </div>
            <div className="bg-white text-red-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md relative">
              <p className="text-sm font-semibold text-center">Token</p>
              <p className="text-center flex flex-wrap justify-center font-semibold text-xs cursor-pointer">
                {game?.token}
              </p>
            </div>
            <div className="bg-white text-blue-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
              <p className="text-sm font-semibold text-center">Free-to-Play</p>
              <p className="text-center font-semibold text-xs">{game?.free2play ? "Yes" : "No"}</p>
            </div>
            <div className="bg-white text-green-800 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
              <p className="text-sm font-semibold text-center">Chain</p>
              <p className="text-center font-semibold text-xs">{game?.chain || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
    
  return (
    <main className='max-w-[1928px] m-auto'>
      <Navigation title={title}  />
      <GameCard game={game} className='mt-12' />
      <div class="additonal-game-info grid-cols-2 grid gap-8 md:grid-cols-3 lg:grid-cols-4 mt-8 pad mx-[2.5%]">
          <div class="h-28 bg-gray-200 shadow-md border-blue-900 border-2 rounded-md flex flex-col items-center
          ">
              <i class="fas fa-cube text-xl text-white mt-6 mb-2"></i>
              <p class="text-center text-xs text-blue-900">${game.token} Price</p>
              <p id="totalBlock" class="text-white text-center"></p>
          </div>
  
          <div class="h-28 bg-gray-200 shadow-md border-blue-900 border-2 rounded-md flex flex-col items-center
        ">
              <i class="fas fa-clock text-xl text-white mt-6 mb-2"></i>
              <p class="text-center text-xs text-blue-900">Marketcap</p>
              <p id="averageBlockTime" class="text-white text-center"></p>
          </div>

          <div class="h-28 bg-gray-200 shadow-md border-blue-900 border-2 rounded-md flex flex-col items-center
          ">
              <i class="fas fas fas fa-globe text-xl text-white mt-6 mb-2"></i>
              <p class="text-center text-xs text-blue-900">Initial/Required Investment</p>
              <p id="ethMarketcap" class="text-orange-900 text-center"> $1,999,9999</p>
          </div>

          <div class="h-28  bg-gray-200 shadow-md border-blue-900 border-2 rounded-md flex flex-col items-center
          ">
              <i class="fas fas fa-compress-arrows-alt text-xl text-white mt-6 mb-2"></i>
              <p class="text-center text-xs text-blue-900">Avg Earning / Day</p>
              <p id="totalTransactions" class="text-white text-center"></p>       
          </div>
    </div> {/*---------------------  additional-game-info-end ----------------- */}

    <div className="gameplay-trailer-and-gallery mx-auto my-12 ">
        <h1 className="border-t border-t-gray-200 pt-10 text-2xl text-center font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">{game.title} Gameplay</h1>
        
        
        <div className='gameplay-container rounded-md border-b px-6 bg-[#b8b8c4]/10 border-b-gray-200 py-12 w-full'>
          <span className="">
            <YouTubePlayer url={game.trailer} />
          </span>
          
          <div className="swiper-container mt-96">
             <GlideCarousel gallery={game.gallery} />

            </div>
         </div>
      </div> {/* ---------------- gameplay-trailer-and-gallery-end ------------------*/}

      {guide ? (
          <div>
            
            <div className='border-t-2 border-t-orange-800 p-6 lg:px-12 rounded-lg bg-gray-100'>{documentToReactComponents(guide, renderOptions)}</div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No guide available for this game.</p>
        )} {/*--------------- guide end ------------- */}
      
      <div className="py-8 px-3 mt-12 mb-20 border rounded-md bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 px-6 ">More Games </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalGames.map((game) => (
              <div
              key={game._id}
              className="bg-white mx-4 lg:mx-0 rounded-md pb-8 shadow-md p-1 border-2 border-solid border-gray-200 relative "
            >
              <img className="rounded-lg h-[204px] w-full " src={game.image} /> 
              <h2 className="text-lg mt-4 font-semibold text-blue-900 cursor-pointer text-center">{game.title}</h2>
              <p className='text-center text-gray-500'>{game.genre}</p>
              <p className='text-center text-sm font-semibold text-orange-800'>{game?.platform.length > 1 ? game?.platform.join(', ') : game?.platform}</p>
            </div>
        ))};
            
         </div>
      </div> 
    </main>
  );
};

export default GameDetails;
