import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from 'react-dom';
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import axios from "axios";
import Link from "next/link";
import GameCard from "./GameCard";

/* const RewardTooltip = ({ game, targetRef }) => {
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
 */

const Games = () => {
  const router = useRouter();

  const [games, setGames] = useState([]);

  
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
