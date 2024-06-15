import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe} from 'react-icons/fa';
import axios from 'axios';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import ReactPlayer from 'react-player/youtube';
import { EffectCoverflow, Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';


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
          console.log(gameData);
          setGame(gameData);
          setLoading(false);
        } catch (error) {
          console.log('Failed to load Game info:', error);
          setError('Failed to load game info');
        }
      };
  
      const fetchAdditionalGames = async () => {
        try {
          const response = await axios.get('http://localhost:1225/games', {
            params: {
              limit: 3,
              page: page,
            },
          });
          const games = await response.data.games;
          setAdditionalGames(response.data.games);
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
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
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
            <p className="mt-2 w-auto pr-3 text-xs md:text-sm lg:text-sm  h-20">{game?.description}</p>
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
    <main>
      <Navigation title={title}  />
      <GameCard game={game} className='mt-12' />
      <div class="grid-cols-2 grid gap-8 md:grid-cols-3 lg:grid-cols-4 mt-8 pad mx-[2.5%]">
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
    </div>
      <div className="mx-auto my-12 px-6">
        
        <h1 className="border-t border-t-gray-200 pt-10 text-2xl text-center font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">{game.title} Gameplay</h1>
        
        <div className='gameplay-container border-b border-b-gray-200 pb-12 w-full'>
          <span className="">
            <YouTubePlayer url={game.trailer} />
          </span>
          
          <div className="swiper-container mt-96">
              <Swiper
                modules={[EffectCoverflow, Autoplay, Navigation, Pagination, A11y]}
                effect={'coverflow'}
                spaceBetween={50}
                grabCursor={true}
                breakpoints={breakpoints}
                centeredSlides={true}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                loop={true}
                autoplay={{ delay: 2500 }}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 50, slideShadows: false }}
                className="swiper"
              >
                {gallery.map((image, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="bg-white shadow-md rounded-xl p-4 mb-3 relative">
                      <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-44 rounded-xl" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
        {guide ? (
          <div>
            {/* <h2 className="text-2xl font-bold mb-4">Steps To Join Airdrop</h2> */}
            <div className='border-t-2 border-t-orange-800 p-6 lg:px-12 rounded-lg bg-gray-100'>{documentToReactComponents(guide, renderOptions)}</div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No guide available for this game.</p>
        )}
      
      {/*   <img src={game.image} alt={game.title} className="w-full h-auto rounded-lg mb-8" /> */}
        {/* <p className="text-lg leading-relaxed">{game.description}</p>*/}
        <div className="mt-6 ">
          <h2 className="text-2xl font-semibold mb-4">Game Details</h2>
          <ul className="list-disc pl-6">
            <li><strong>Developer:</strong> {game.developer}</li>
            <li><strong>Genre:</strong> {game.genre}</li>
            <li><strong>Platform:</strong> {game.platform.length > 1 ? game.platform.join(', ') : game.platform}</li>
            <li><strong>Token:</strong> {game.token}</li>
            <li><strong>Free-to-Play:</strong> {game.free2play ? 'Yes' : 'No'}</li>
            <li><strong>Chain:</strong> {game.chain}</li>
          </ul>
        </div> 
      </div>
    </main>
  );
};

export default GameDetails;
