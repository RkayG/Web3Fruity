import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FaAngleUp, FaAngleDown, FaVideo, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

//================= fetch game token price and display in a tooltip
const RewardTooltip = ({ reward }) => {
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //======= Calculate the expiry time for the cache
  const cacheExpiryTime = useMemo(() => {
    return Date.now() + 5 * 60 * 1000; // 5 minutes
  }, []);

  useEffect(() => {
    const fetchTokenData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!tokenData || Date.now() > cacheExpiryTime) {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${reward.api_id}`);
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
  }, [reward.api_id, tokenData, cacheExpiryTime]);

  return (
    <div className="absolute bg-white p-4 rounded-md shadow-md border border-gray-300
              ml-52 mt-8" style={{width: "265px"}}>
      {loading ? (
        <p>Loading token data...</p>
      ) : error ? (
        <p className="text-red-600">Error fetching token data</p>
      ) : (
        <>
          <span className="flex flex-wrap">
            <img src={reward.logo} className="w-8 h-8 rounded-sm mb-2" />
            <p className="pl-4 font-bold">${reward.token}</p>
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

              <p className="text-[green] text-left text-sm mt-2">Coingecko</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

const RewardCard = ({ reward, index, isTooltipOpen, setIsTooltipOpen, setTooltipData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-md shadow-md p-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300"
    >
      <span className="flex flex-wrap">
        <img src={reward.logo} className="w-10 h-10 mx-3 rounded-lg mb-2" alt={reward.title} />
        <h3 className="text-lg font-semibold mt-1 text-blue-700">{reward.title}</h3>
      </span>
      <p className="text-sm w-auto text-left p-2 pl-3 h-20">{reward.activities}</p>
      <span className="flex bg-gray-200 rounded-lg h-20 m-3 border border-gray-400 justify-center">
        <span className="block p-3 m-auto">
          <p>Token</p>
          <p className="font-semibold text-blue-700 flex flex-wrap justify-center cursor-pointer"
            onMouseEnter={(event) => {
              const newIsTooltipOpen = [...isTooltipOpen];
              newIsTooltipOpen[index] = !newIsTooltipOpen[index];
              setIsTooltipOpen(newIsTooltipOpen);
              setTooltipData(reward);
              event.stopPropagation();
            }}
            onClick={(event) => {
              const newIsTooltipOpen = [...isTooltipOpen];
              newIsTooltipOpen[index] = !newIsTooltipOpen[index];
              setIsTooltipOpen(newIsTooltipOpen);
              setTooltipData(reward);
              event.stopPropagation();
            }}
            onMouseLeave={() => {
              setTooltipData(null);
              const newIsTooltipOpen = [...isTooltipOpen];
              newIsTooltipOpen[index] = false;
              setIsTooltipOpen(newIsTooltipOpen);
            }}>
            {reward.token}

            {reward.token ? (
              <p className="text-xs pl-1 mt-2">
              {isTooltipOpen[index] ? <FaAngleUp /> : <FaAngleDown />}
            </p>
            ) : (
              <p className="text-xs pl-1 mt-2">-</p>
            )}
            
            {isTooltipOpen[index] && <RewardTooltip reward={reward} />}
          </p>
        </span>
        <span className="block p-3 m-auto">
          <p>Free</p>
          <p className="font-semibold text-green-700">{reward.free}</p>
        </span>
        <span className="block p-3 m-auto">
          <p>Active</p>
          <p className="font-semibold text-green-700">{reward.active}</p>
        </span>
      </span>
      <a href={reward.website}>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='py-2 px-10 m-auto mt-6 flex bg-blue-700 text-white active:bg-black checked:bg-black rounded-3xl shadow-md hover:bg-blue-600 transition-colors duration-300'
        >
          Visit
        </motion.button>
      </a>
    </motion.div>
  );
};

const RewardCardSkeleton = () => (
  <div className="bg-white rounded-md shadow-md p-4 border border-gray-300 animate-pulse">
    <div className="flex flex-wrap">
      <div className="w-10 h-10 mx-3 rounded-lg mb-2 bg-gray-300"></div>
      <div className="h-6 w-32 bg-gray-300 rounded mt-1"></div>
    </div>
    <div className="h-20 w-full bg-gray-300 rounded mt-2"></div>
    <div className="flex bg-gray-200 rounded-lg h-20 m-3 border border-gray-400 justify-center">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="block p-3 m-auto">
          <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
    <div className="h-10 w-24 bg-gray-300 rounded-3xl mx-auto mt-6"></div>
  </div>
);

const RewardForTask = () => {
  const router = useRouter();
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tooltipData, setTooltipData] = useState(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1225/reward-tasks", {
          params: { limit: 12 }
        });
        setRewards(response.data);
        setIsTooltipOpen(new Array(response.data.length).fill(false));
      } catch (error) {
        console.error("Error fetching rewards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 my-20 w-full h-auto max-w-[1580px] m-auto bg-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold flex items-center mb-12 px-4 md:px-8">
        <FaVideo className="text-orange-800 mr-4 text-4xl md:text-5xl" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-orange-800">
          Reward for Tasks
        </span>
      </h2>
      <div className="mx-3 text-center relative mb-12 rounded-md shadow-sm m-auto">
        <div className="mr-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <RewardCardSkeleton key={index} />
              ))
            : rewards.map((reward, index) => (
                <RewardCard
                  key={index}
                  reward={reward}
                  index={index}
                  isTooltipOpen={isTooltipOpen}
                  setIsTooltipOpen={setIsTooltipOpen}
                  setTooltipData={setTooltipData}
                />
              ))}
        </div>
          <Link href="/platforms">
          <motion.span 
            whileHover={{ x: 10 }}
            className="text-blue-800 hover:text-orange-800 flex w-[96%] justify-center mx-auto items-center cursor-pointer text-lg mt-16 font-semibold transition-colors duration-300"
          >
            Explore All <FaChevronRight className="ml-2" />
          </motion.span>
        </Link>
      </div>
     
    </motion.div>
  );
};

export default RewardForTask;