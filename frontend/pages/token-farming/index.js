import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaCoins, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BottomSubscribe, Disclaimer } from '../../Components';
import Link from 'next/link';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const TokenFarming = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredTokens, setFilteredTokens] = useState([]);
  const [blockchains, setBlockchains] = useState([]);
  const [selectedBlockchain, setSelectedBlockchain] = useState('');
  const [stakeFilter, setStakeFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tokensPerPage] = useState(5);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch(`${apiUrl}//farm-tokens`);
        const data = await response.json();
        setTokens(data);
        const uniqueBlockchains = [...new Set(data.map(token => token.blockchain))];
        setBlockchains(uniqueBlockchains);
        setFilteredTokens(data);
      } catch (error) {
        console.error('Error fetching tokens:', error);
        setError('An error occurred while fetching data. Please check your internet connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 my-32">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const applyFilters = () => {
    let result = tokens;
    if (selectedBlockchain) {
      result = result.filter(token => token.blockchain === selectedBlockchain);
    }
    if (stakeFilter !== 'all') {
      result = result.filter(token => token.stakeToFarm === stakeFilter && token.stakeToFarm === 'stake');
    }
    
    setFilteredTokens(result);
    setCurrentPage(1);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedBlockchain, stakeFilter, tokens]);

  // Get current tokens
  const indexOfLastToken = currentPage * tokensPerPage;
  const indexOfFirstToken = indexOfLastToken - tokensPerPage;
  const currentTokens = filteredTokens.slice(indexOfFirstToken, indexOfLastToken);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };



  return (
    <section>
    <div className="pt-12 md:pt-24 lg:pt-24 max-w-[1580px] m-auto mx-2">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
      >
        Token Farming / Potential Airdrops
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          <FaFilter className="mr-2" /> Filter Options
        </button>

        {isFilterOpen && (
          <div className="mt-4 p-4 mx-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Blockchain</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                className={`px-4 py-2 rounded-full ${selectedBlockchain === '' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setSelectedBlockchain('')}
              >
                All
              </button>
              {blockchains.map((blockchain) => (
                <button
                  key={blockchain}
                  className={`px-4 py-2 rounded-full ${selectedBlockchain === blockchain ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                  onClick={() => setSelectedBlockchain(blockchain)}
                >
                  {blockchain}
                </button>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-3">Farming Type</h3>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-full ${stakeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setStakeFilter('all')}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-full ${stakeFilter === 'free' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setStakeFilter('free')}
              >
                Free Farming
              </button>
              <button
                className={`px-4 py-2 rounded-full ${stakeFilter === 'stake' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setStakeFilter('stake')}
              >
                Stake to Farm
              </button>
            </div>
          </div>
        )}
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {currentTokens.map((token, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg mx-4 overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="h-32 bg-gradient-to-bl from-blue-800 to-burgundy flex items-center justify-center">
              <h3 className="text-2xl text-white font-bold">{token.tokenName}</h3>
            </div>
            <div className="relative">
              <img src={token.logo} className="w-24 h-24 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-md" alt={token.tokenName} />
            </div>
            <div className="pt-16 pb-6 px-6">
              <div className="flex justify-between items-center mb-3 text-sm">
                <span className="text-gray-600">Platform:</span>
                <a href={token.linkToFarmingPlatform}>
                  <span className="bg-orange-100 hover:bg-orange-900 hover:text-white flex flex-wrap cursor-pointer text-orange-800 px-3 py-1 rounded-full">
                    {token.platform || 'N/A'}
                    <FaExternalLinkAlt className='mt-1 ml-2' />
                  </span>
                </a>
              </div>
              <div className="mb-3">
                <p className="text-gray-600">Requirements:</p>
                <p className="font-semibold">{token.requirements || 'Telegram, Ton wallet'}</p>
              </div>
              <div className="mb-3">
                <p className="text-gray-600">Blockchain:</p>
                <p className="font-semibold">{token.blockchain}</p>
              </div>
              <div className="mb-3">
                <p className="text-gray-600">Farming Type:</p>
                <p className="font-semibold">{token.stakeToFarm ? 'Stake to Farm' : 'Free Farming'}</p>
              </div>
              <div className="flex justify-end items-center">
                <Link
                  href={`/token-farming/${token.slug}`} 
                  className="flex items-center w-fit float-right bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Guide <FaExternalLinkAlt className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))} 
      </motion.div>

      {filteredTokens.length === 0 && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 mt-8"
        >
          No tokens match the current filters. Try adjusting your selection.
        </motion.p>
      )}

      {filteredTokens.length > tokensPerPage && (
        <div className="flex justify-center mt-8 mb-32">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 bg-blue-600 text-white rounded-full disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: Math.ceil(filteredTokens.length / tokensPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-full ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredTokens.length / tokensPerPage)}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-full disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
    <Disclaimer />
      <BottomSubscribe />
    </section> 
  );
};

export default TokenFarming;