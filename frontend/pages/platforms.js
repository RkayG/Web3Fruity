import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';

const RewardTooltip = ({ reward }) => {
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cacheExpiryTime = useMemo(() => {
    return Date.now() + 10 * 60 * 1000; // 10 minutes
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
    <div className="absolute bg-white p-4 rounded-md shadow-md border border-gray-300  ml-52 mt-8" style={{ width: "265px" }}>
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
                <p className="text-left">${tokenData.market_data.current_price.usd}</p>
              </div>
              <div className="flex flex-wrap text-black">
                <p className="pr-4">Market Cap:</p>
                <p className="text-right">${tokenData.market_data.market_cap.usd.toLocaleString()}</p>
              </div>

              <p className="text-[green] text-left text-sm mt-2">Coingecko</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

const RewardForTask = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rewardsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1225/reward-tasks");
        setRewards(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rewards:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate current rewards based on current page
  const indexOfLastReward = currentPage * rewardsPerPage;
  const indexOfFirstReward = indexOfLastReward - rewardsPerPage;
  const currentRewards = rewards.slice(indexOfFirstReward, indexOfLastReward);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [tooltipData, setTooltipData] = useState(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState([]);

  return (
    <div className="pb-8 mb-20 w-full h-auto max-w-[1920px]">
      {loading ? (
        <div className="loading-dots m-auto my-28">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ) : (
        <div>
          <section className="relative w-full h-[50vh] min-h-[300px] mb-6 flex items-center justify-center bg-cover bg-center bg-[url('/images/task3.jpg')]">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(210,143,143,0.7)] to-[rgba(0,0,0,0.63)]" />
            <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-pulse">Complete Tasks, Earn Rewards</h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-[white]">
                Find and join multiple task-based rewards platforms.
              </p>
             
            </div>
          </section>

          <div className="bg-red-50 p-6 border border-black rounded-md m-6 mb-20">
            <p>Several platforms offer rewards for completing various tasks, including taking surveys, watching videos, playing games, testing apps, participating in online studies, and more.
            However, finding the legitimate and rewarding ones can be challenging. That's why we've curated a comprehensive list of the most reliable rewards-for-tasks platforms available.
            For many of these reward-for-tasks platforms, the basic requirements include having a wallet address for receiving rewards and social accounts, such as Twitter, Telegram, Discord, and the likes.
             <br /><br />Explore our curated list below to start earning rewards today
            </p> 
          </div>

        <div className="mx-6 text-center relative mb-28 ">
            {/*=====================  Table UI display intended for large devices ============================*/}
           {/* <table className="hidden w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                 <th className="p-4 pl-10 text-left">Platform</th>
                 <th className="p-4 pl-10 text-left">Activity</th>
                 <th className="p-4">Token</th>
                 <th className="p-4">Free</th>
                 <th className="p-4">Active</th>
               </tr>
            </thead>
            <tbody className="border-t-2 border-gray-50">
              {currentRewards.map((reward, index) => (
                <tr key={index} className="border-t-2 border-gray-100">
                  <td className="p-3 flex flex-wrap text-blue-900 hover:text-red-700 cursor-pointer w-64 relative">
                    <img src={reward.logo} className="w-8 h-8 rounded-sm mx-3" alt={reward.token} />
                    {reward.title}
                  </td>
                  <td className="p-3 text-left lg:w-2/4">{reward.activities}</td>
                  <td className="mb-2 justify-center flex flex-wrap p-3 text-blue-900 cursor-pointer"
                    onMouseEnter={() => setTooltipData(reward)}
                    onMouseLeave={() => setTooltipData(null)}>
                    <p className="-mt-2 pr-1 font-semibold">{reward.token}</p>
                    <p className="text-xs mt-0"><FaAngleDown /></p>
                    {tooltipData === reward && <RewardTooltip reward={reward} />}
                  </td>
                  <td className="p-3 text-green-700 font-semibold">{reward.free}</td>
                  <td className="p-3 text-green-700 font-semibold">{reward.active}</td>
                </tr>
              ))}
            </tbody>
          </table>
 */}
          <div className="mr-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {currentRewards.map((reward, index) => (
              <div key={index} className="bg-white rounded-md shadow-md p-4 border border-gray-300">
                <span className="flex flex-wrap">
                  <img src={reward.logo} className="w-10 h-10 mx-3 rounded-lg mb-2" />
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
                      <p className="text-xs pl-1 mt-2">
                        {isTooltipOpen[index] ? <FaAngleUp /> : <FaAngleDown />}
                      </p>
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
                <button className="py-2 px-10 m-auto mt-6 flex bg-blue-700 text-white active:bg-black checked:bg-black rounded-3xl shadow-md">
                  Visit
                </button>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(rewards.length / rewardsPerPage) }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-900'} hover:bg-blue-500 hover:text-white`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default RewardForTask;
