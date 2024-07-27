import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaParachuteBox, FaChevronRight, FaCalendarAlt, FaLink, FaCoins, FaPercentage } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AirdropsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-gradient-to-br from-blue-800 to-orange-800 p-1 rounded-2xl shadow-lg animate-pulse">
          <div className="bg-gray-200 h-full rounded-2xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </div>
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
          params: { limit: 6, page: 1 },
        });
        setAirdrops(response.data.airdrops);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching airdrops:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-20 max-w-[1580px] mx-auto">
      <div className="flex items-center justify-between mb-12 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl  font-extrabold flex items-center">
          <FaParachuteBox className="text-orange-800 mr-4 text-4xl md:text-5xl" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-orange-800">
            Hot Airdrops
          </span>
        </h2>
       
      </div>
      
      {loading ? (
        <AirdropsSkeleton />
      ) : (
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
          {airdrops?.map((airdrop) => (
            <div key={airdrop._id} className="group bg-gradient-to-br from-blue-800 to-orange-800 p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white h-full rounded-2xl p-6 transition-all duration-300 group-hover:bg-gray-100">
                <div className="relative mb-6">
                  <img src={airdrop.logo} className="w-20 h-20 rounded-full mx-auto shadow-md" alt={airdrop.title} />
                  <div className="absolute top-0 right-0 bg-orange-800 text-gray-200 text-xs font-semibold py-1 px-3 rounded-full">
                    {airdrop.platformType}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-blue-800">{airdrop.title}</h3>
                <p>{airdrop.slug}</p>
                <p className="text-sm text-center text-gray-600 mb-4">{airdrop.chain}</p>
                <div className="space-y-3 text-sm">
                  <p className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600"><FaCoins className="mr-2 text-orange-800" /> Total Pool:</span>
                    <span className="font-semibold text-blue-800">{airdrop.rewardPool || 'N/A'}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600"><FaPercentage className="mr-2 text-orange-800" /> % of Supply:</span>
                    <span className="font-semibold text-blue-800">{airdrop.rewardPercentFromSupply || 'N/A'}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600"><FaCalendarAlt className="mr-2 text-orange-800" /> End Date:</span>
                    <span className="font-semibold text-blue-800">{new Date(airdrop.endDate).toLocaleDateString() || 'N/A'}</span>
                  </p>
                </div>
              </div>
              <Link href={`/airdrops/${airdrop.slug}`}>
                <div className="bg-gradient-to-r from-gray-900 to-orange-800 text-gray-200 p-4 rounded-b-2xl flex justify-between items-center cursor-pointer hover:from-orange-800 hover:to-blue-800 transition-all duration-300">
                  <span className="font-semibold">View Details</span>
                  <FaLink />
                </div>
              </Link>
            </div>
          ))}
           
        </div>
        <Link href="/airdrops" className='flex justify-center mx-auto mt-12'>
           <motion.span 
              whileHover={{ x: 10 }}
              className="text-blue-600 hover:text-orange-600 flex  mx-auto items-center cursor-pointer text-lg mt-16 font-semibold transition-colors duration-300"
            >
              Explore All <FaChevronRight className="ml-2" />
            </motion.span>
         </Link>
        </section>
        
      )}
    </div>
  );
};

export default Airdrops;