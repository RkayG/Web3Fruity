import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaCoins, FaChevronRight, FaTelegramPlane, FaWallet, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TokenFarming = () => {
  const router = useRouter();
  const [tokens, setTokens] = useState([]);
  const [filteredTokens, setFilteredTokens] = useState([]);
  const [blockchains, setBlockchains] = useState([]);
  const [selectedBlockchain, setSelectedBlockchain] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch('http://localhost:1225/farm-tokens');
        const data = await response.json();
        setTokens(data);
        const uniqueBlockchains = [...new Set(data.map(token => token.blockchain))];
        setBlockchains(uniqueBlockchains);
        setFilteredTokens(data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    };

    fetchTokens();
  }, []);

  const handleFilterChange = (blockchain) => {
    setSelectedBlockchain(blockchain);
    if (blockchain) {
      setFilteredTokens(tokens.filter(token => token.blockchain === blockchain).slice(0, 6));
    } else {
      setFilteredTokens(tokens.slice(0, 6));
    }
  };

  if (loading) {
    return (
      <section className="py-12 md:py-24 lg:py-32 max-w-[1580px] m-auto">
        <div className="mb-6 pl-8 w-56 animate-pulse h-8 bg-gray-200 ml-10 rounded-md"></div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mx-3 lg:px-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-lg bg-white animate-pulse pb-6 flex flex-col items-center justify-between border border-gray-200 shadow-sm">
              <div className="bg-gray-200 w-full h-24 rounded-t-lg"></div>
              <div className="bg-gray-300 w-16 h-16 rounded-full relative -top-8"></div>
              <div className="w-[90%] h-6 bg-gray-200 mt-4 mb-2"></div>
              <div className="w-[90%] h-6 bg-gray-200 mb-2"></div>
              <div className="w-[90%] h-6 bg-gray-200 mb-2"></div>
              <div className="w-[90%] h-6 bg-gray-200 mb-2"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-24 lg:py-32 max-w-[1580px] m-auto bg-gray-200">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl  font-extrabold flex items-center mb-10 px-4 md:px-8"
      >
        <FaCoins className="text-orange-800 mr-4 text-4xl md:text-5xl" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-orange-800">
          Token Farming
        </span>
      </motion.h2>

      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-4 mb-8 px-8"
      >
        <button
          className={`px-6 py-2 rounded-md transition-all duration-300 ${selectedBlockchain === '' ? 'bg-blue-800 text-white shadow-md' : 'bg-white text-blue-800 hover:bg-gray-100 border border-blue-800'}`}
          onClick={() => handleFilterChange('')}
        >
          All
        </button>
        {blockchains.map((blockchain) => (
          <button
            key={blockchain}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${selectedBlockchain === blockchain ? 'bg-blue-800 text-white shadow-md' : 'bg-white text-blue-800 hover:bg-gray-100 border border-blue-800'}`}
            onClick={() => handleFilterChange(blockchain)}
          >
            {blockchain}
          </button>
        ))}
      </motion.div> */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-3 lg:px-6">
        {filteredTokens.map((token, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-300"
          >
            <div className="h-32 bg-gradient-to-bl from-blue-800 to-burgundy flex items-center justify-center">
              <h3 className="text-2xl text-white font-bold">{token.tokenName}</h3>
            </div>
            <div className="relative">
              <img src={token.logo} className="w-24 h-24 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-md" alt={token.tokenName} />
            </div>
            <div className="pt-16 pb-6 px-6">
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-gray-600">Platform:</span>
                <a href={token.linkToFarmingPlatform}>
                <span className="bg-orange-100 hover:bg-orange-900 hover:text-white flex flex-wrap cursor-pointer text-orange-800 px-3 py-1 rounded-full">{token.platform || 'N/A'}
                    <FaExternalLinkAlt className='mt-1 ml-2' />
                </span>
              </a>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">Requirements:</p>
                <p className="font-semibold ">{token.requirements || 'Telegram, Ton wallet'}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">Farming Type:</p>
                <p className="font-semibold ">{token.stakeToFarm ? 'Stake to Farm' : 'Free Farming'}</p>
              </div>
              <Link
                  href={`/token-farming/${token.slug}`} 
                  className="flex items-center w-fit float-right mb-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Guide <FaExternalLinkAlt className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <Link href="/token-farming">
        <motion.span 
          whileHover={{ x: 10 }}
          className="text-blue-800 hover:text-orange-800 flex justify-center w-[95%] mx-auto items-center cursor-pointer text-lg mt-16 font-semibold transition-colors duration-300"
        >
          Explore All <FaChevronRight className="ml-2" />
        </motion.span>
      </Link>
    </section> 
  );
};

export default TokenFarming;