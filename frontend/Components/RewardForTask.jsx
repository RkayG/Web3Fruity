import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const RewardTooltip = ({ reward }) => {
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add state variable for error

  // Calculate the expiry time for the cache
  const cacheExpiryTime = useMemo(() => {
    return Date.now() + 5 * 60 * 1000; // 5 minutes (or 10 * 60 * 1000 for 10 minutes)
  }, []);

  useEffect(() => {
    const fetchTokenData = async () => {
      setLoading(true); // Set loading state to true before fetching
      setError(null); // Clear any previous error

      try {
        // Check if tokenData is null or the cache has expired
        if (!tokenData || Date.now() > cacheExpiryTime) {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${reward.api_id}`);
          setTokenData(response.data);
        }
      } catch (error) {
        console.error("Error fetching token data:", error);
        setError(error); // Set error state for rendering
      } finally {
        setLoading(false); // Set loading state to false after fetching (or on error)
      }
    };

    fetchTokenData();
  }, [reward.api_id, tokenData, cacheExpiryTime]);

  return (
    <div className="absolute bg-white p-4 rounded-md shadow-md border border-gray-300
             lg:right-56 ml-52 mt-8 " style={{width: "265px"}} >
      {loading ? (
        <p>Loading token data...</p>
      ) : error ? (
        <p className="text-red-600">Error fetching token data</p> // Display error message
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1225/reward-tasks", {
          params: {
            limit: 12
          }
        });
        setRewards(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rewards:", error);
      }
    };

    fetchData();
  }, []);

  // variable for token price and marketcap when
  // user hovers or clicks on token
  const [tooltipData, setTooltipData] = useState(null); 

  // variable for toggling angle up and doen if user
  // clicks reward token (only for mobile and tablet) only for mobile and tablet 
  const [isTooltipOpen, setIsTooltipOpen] = useState([]); // Initialize with false for all rewards


  return (
    <div className="py-8 my-20 w-full h-auto max-w-[1920px]">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text 
      text-transparent bg-gradient-to-r from-blue-500 to-red-500">Reward for Tasks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className=" mx-6 text-center relative mb-28 rounded-md shadow-sm">

           {/*---------- table display for large devices only -----------------*/}
          <table className="hidden lg:block w-full border-collapse border border-gray-200">
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
              {rewards.map((reward, index) => (
                <tr
                  key={index}
                  className="border-t-2 border-gray-50"
                >
                  <td className="p-3 flex flex-wrap text-blue-900 hover:text-red-700 cursor-pointer 
                  w-64 relative " aria-label={reward.website}>
                    <img src={reward.logo} className="w-8 h-8 rounded-sm mx-3" alt={reward.token} />
                    {reward.title}
                  </td>
                  <td className="p-3 text-left lg:w-2/4">{reward.activities}</td>

                  <td className="mb-2 justify-center flex flex-wrap p-3 text-blue-900 cursor-pointer"
                    onMouseEnter={() => setTooltipData(reward)}
                    onMouseLeave={() => setTooltipData(null)}
                  > <p className="-mt-2 pr-1 font-semibold">
                      {reward.token}
                    </p>
                    <p className="text-xs mt-0">
                      <FaAngleDown />
                    </p>
                    {tooltipData === reward && <RewardTooltip reward={reward} />}
                  </td>

                  <td className="p-3 text-green-700 font-semibold">{reward.free}</td>
                  <td className="p-3 text-green-700 font-semibold">{reward.active}</td>
                </tr>
              ))}
            </tbody>
          </table> {/*-------------- table display end ----------------*/}

          {/* ---------- Responsive code for mobile and tablet ---------- */}
          <div className="mr-auto lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md p-4 border border-gray-300"
            >
              <span className="flex flex-wrap">
                <img src={reward.logo} className="w-10 h-10 mx-3 rounded-lg mb-2" />
                <h3 className="text-lg font-semibold mt-1 text-blue-700">{reward.title}</h3>
              </span>
          
                <p className="text-sm w-auto text-left p-2 pl-3 h-20 ">
                  {reward.activities}
                </p>
          
              <span className="flex bg-gray-200 rounded-lg h-20 m-3 border border-gray-400 justify-center">
                <span className="block p-3 m-auto">
                  <p>Token</p>
                  <p className="font-semibold text-blue-700 flex flex-wrap justify-center"
                      onClick={(event) => {
                        const newIsTooltipOpen = [...isTooltipOpen];
                        newIsTooltipOpen[index] = !newIsTooltipOpen[index];
                        setIsTooltipOpen(newIsTooltipOpen);
                        setTooltipData(reward);
                        event.stopPropagation(); // Stop event from bubbling up
                      }}
                      onMouseLeave={() => {
                        setTooltipData(null);
                        const newIsTooltipOpen = [...isTooltipOpen];
                        newIsTooltipOpen[index] = false;
                        setIsTooltipOpen(newIsTooltipOpen);
                      }}
                    >
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

              <button className='py-2 px-10 m-auto mt-6 flex bg-blue-700
              text-white active:bg-black checked:bg-black rounded-3xl shadow-md'
                
              >
                Visit
              </button>
            </div>
          ))}
             

          </div>{/*--------- end of mobile and tablet display --------- */}
        </div>

      )}

        <button className='py-2 px-4 m-auto mt-[-88px] flex justify-self-center border-2
          text-blue-900 rounded-xl shadow-md hover:bg-blue-500 hover:text-white 
          active:bg-blue-500  hover:transition-all hover:ease-in-out' style={{border: "1px solid blue"}}>
            More
        </button>
    </div>
  );
};

export default RewardForTask;