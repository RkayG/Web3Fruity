import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from 'react-dom';
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import axios from "axios";

const RewardTooltip = ({ game, targetRef }) => {
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cacheExpiryTime = useMemo(() => {
    return Date.now() + 5 * 60 * 1000; // 5 minutes
  }, []);

  useEffect(() => {
    const fetchTokenData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!tokenData || Date.now() > cacheExpiryTime) {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${game.token_api_id}`);
          setTokenData(response.data);
        }
      } catch (error) {
        console.error("Error fetching token data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
  }, [game.token_api_id, tokenData, cacheExpiryTime]);

  if (!targetRef.current) return null;

  const targetRect = targetRef.current.getBoundingClientRect();
  const tooltipWidth = 265; // Tooltip width
  const padding = 0; // Additional padding
  const viewportWidth = window.innerWidth;

  // Calculate positions
  const leftPosition = targetRect.left + window.scrollX - tooltipWidth - padding;
  const rightPosition = targetRect.right + window.scrollX + padding;

  // Determine best position
  const leftSpaceAvailable = targetRect.left > tooltipWidth + padding;
  const rightSpaceAvailable = viewportWidth - targetRect.right > tooltipWidth + padding;

  const tooltipPosition = leftSpaceAvailable
    ? { left: leftPosition }
    : rightSpaceAvailable
    ? { left: rightPosition }
    : { left: viewportWidth / 2 - tooltipWidth / 2 }; // Center if no space on either side

  return ReactDOM.createPortal(
    <div className="absolute bg-white p-4 rounded-md shadow-md border border-gray-300" style={{ width: `${tooltipWidth}px`, top: targetRect.bottom + window.scrollY, ...tooltipPosition }}>
      {loading ? (
        <p>Loading token data...</p>
      ) : error ? (
        <p className="text-red-600 text-center">Error fetching token data</p>
      ) : (
        <>
          <span className="flex flex-wrap">
            <img src={game.image} className="w-8 h-8 rounded-sm mb-2" />
            <p className="pl-4 font-bold">${game.token}</p>
          </span>
          {tokenData && (
            <>
              <div className="flex flex-wrap text-black">
                <p className="pr-16">Price:</p>
                <p className="text-left">{tokenData.market_data.current_price.usd} USD</p>
              </div>
              <div className="flex flex-wrap text-black">
                <p className="pr-4">Market Cap:</p>
                <p className="text-right">{tokenData.market_data.market_cap.usd.toLocaleString()} USD</p>
              </div>
            </>
          )}
        </>
      )}
    </div>,
    document.body
  );
};


const Games = () => {
  const router = useRouter();

  const [games, setGames] = useState([]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:1225/games");
        if (!response.ok) {
          throw new Error("Failed to fetch games.");
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const handleNavigateToGames = () => {
    router.push('/games');
  };

  const GameCard = ({ game }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const targetRef = React.createRef();

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden m-auto lg:p-8 mb-4 border-2 border-gray-200" style={{ width: "95%" }}>
        <div className="flex">
          <img className="w-24 h-24 lg:w-40 lg:h-auto rounded-2xl m-4 lg:m-0 lg:rounded-md lg:mr-6" src={game.image} />
          <div className="ml-4 flex-1">
            <div className="title-and-view-button-container flex">
              <h2 className="text-sm w-48 mt-4 lg:mt-0 lg:text-lg font-semibold cursor-pointer lg:w-60">{game.title}</h2>
              <span className="hidden font-semibold lg:block lg:static lg:ml-20 text-sm text-blue-900 rounded-2xl px-4 cursor-pointer hover:bg-blue-50 active:bg-ble-100" style={{ border: "1px solid blue", left: "11%" }}>
                View
              </span>
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
            <p className="mt-2 w-auto pr-3 text-xs md:text-sm lg:text-sm lg:w-2/4 h-20">{truncateText(game?.description, 160)}</p>
          </div>
        </div>
        <a href={game.website}>
          <span className="lg:hidden font-semibold relative text-sm ml-6 py-1 -top-8 text-blue-900 rounded-2xl px-6 cursor-pointer hover:bg-blue-50 active:bg-blue-100" style={{ border: "1px solid blue" }}>
            Visit
          </span>
        </a>
        <div className="overflow-x-auto w-auto pt-6 pl-6 rounded-t-none rounded-b-md lg:rounded-md shadow-md bg-gray-200">
          <div className="lg:flex lg:flex-wrap lg:justify-center scrollbar-track-gray-200 scrollbar-thin inline-flex scrollbar-thumb-red-900" style={{ maxHeight: "150px", overflowY: "auto" }}>
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
              <p className="text-center flex flex-wrap justify-center font-semibold text-xs cursor-pointer"
                 onMouseEnter={() => setShowTooltip(true)}
                 onMouseLeave={() => setShowTooltip(false)}
                 ref={targetRef}
              >
                {game?.token}
              
                <div className="ml-1 py-[3px]">
                  <FaAngleUp
                    className={`cursor-pointer ${showTooltip ? 'block' : 'hidden'}`}
                    onClick={() => setShowTooltip(false)}
                  />
                  <FaAngleDown
                    className={`cursor-pointer ${showTooltip ? 'hidden' : 'block'}`}
                    onClick={() => setShowTooltip(true)}
                  />
                </div>
              </p>
              {showTooltip && <RewardTooltip game={game} targetRef={targetRef} />}
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
    <div className="mb-20 max-w-[1580px] pt-12 m-auto">
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">Play to Earn</h1>
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
      <button className='py-2 px-4 m-auto mt-6 flex justify-self-center text-black rounded-xl hover:bg-blue-500 hover:text-white bg-gray-200 active:bg-blue-500 hover:transition-all hover:ease-in-out' onClick={handleNavigateToGames}>
        More
      </button>
    </div>
  );
};

export default Games;
