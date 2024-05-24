// pages/index.js

import { useEffect, useState } from 'react';
import axios from 'axios';

// Airdrops skeleton component
const AirdropsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="bg-white rounded-md shadow-md p-4 border-2 border-solid border-gray-200 animate-pulse">
          <div className="h-24 bg-gray-200 mb-4 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
        </div>
      ))}
    </div>
  );
};

const Airdrops = () => {
  const [airdrops, setAirdrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1225/airdrops', {
          params: {
            limit: 12 // query parameter to limit the number of results to 12
          }
        });
        setAirdrops(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching airdrops:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='my-20 m-auto'>
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text 
        text-transparent bg-gradient-to-r from-blue-500 to-red-500">
            Confirmed Airdrops
        </h2>
      {loading ? ( // Render loading skeleton if loading is true
        <AirdropsSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-8 lg:m-auto" >
          {airdrops.map((airdrop) => (
            <div
              key={airdrop._id}
              className="bg-white mx-4 lg:mx-0 hover:bg-gray-50 cursor-pointer rounded-md pb-8 
              shadow-md p-4 border-2 border-solid border-gray-200 relative min-w-[340px]">
              <span className="absolute top-2 right-2 text-xs font-semibold green 
              py-1 px-2 rounded-xl text-white ">
                {airdrop.platformType}
              </span>
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 relative">
                    <img src={airdrop.logo} className=" w-16 h-16 rounded-full" />
                </div>
                <h2 className="text-lg font-bold absolute left-24 top-5">{airdrop.title}</h2>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                <span className='text-xs absolute top-20 left-24'>Total Airdrop Pool</span>
                <span className="font-semibold absolute top-14 left-24">{airdrop.rewardPool || 'N/A'}</span>
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className='text-xs absolute top-20 left-56'>% of Total Supply</span>
                <span className="font-semibold absolute top-14 left-56">{airdrop.rewardPercentFromSupply || 'N/A'}</span>
              </p>
              <p className="text-xs text-gray-500">
                <span className=''>End Date</span>
                <span className="font-semibold absolute bottom-4 left-3 ">{new Date(airdrop.endDate).toLocaleDateString() || 'N/A'}</span>
              </p>
              <p className="text-xs text-gray-500">
                <span className='absolute top-28 right-6'>Chain</span>
                <span className="font-semibold absolute bottom-4 right-3">{airdrop.chain || 'N/A'}</span>
              </p>
              <span aria-label='view' title='view' className="absolute top-28 text-center m-auto"
              style={{left: "46%"}}>
                 <img className='w-8 h-8 hover:w-7 hover:h-7 active:w-8 active:h-8' src='go-icon-13.jpg'></img>
              </span>
            </div>
          ))}

        </div>
      )}
        <button className='py-2 px-4 m-auto mt-6 flex justify-self-center hover:bg-blue-500 hover:text-white hover:transition-[0.2s]
         text-black active:bg-blue-100 rounded-xl bg-gray-200 hover:ease-in-out'>
          More
        </button>
    </div>
  );
};

export default Airdrops;