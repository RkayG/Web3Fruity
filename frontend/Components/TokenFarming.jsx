import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaPlaystation, FaTractor, FaTree} from 'react-icons/fa';

const TokenFarming = () => {
  const router = useRouter();
  const [tokens, setTokens] = useState([]);
  const [filteredTokens, setFilteredTokens] = useState([]);
  const [blockchains, setBlockchains] = useState([]);
  const [selectedBlockchain, setSelectedBlockchain] = useState('');
  const [loading, setLoading] = useState(true);

  const handleNavigateToTokenFarming = () => {
    router.push('/token-farming');
  };

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch('http://localhost:1225/farm-tokens'); 
        const data = await response.json();
        setTokens(data);
        const uniqueBlockchains = [...new Set(data.map(token => token.blockchain))];
        setBlockchains(uniqueBlockchains);
        setFilteredTokens(data.slice(0, 6)); // Limit to 6 tokens initially
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
      setFilteredTokens(tokens.filter(token => token.blockchain === blockchain).slice(0, 6)); // Limit to 6 tokens per blockchain
    } else {
      setFilteredTokens(tokens.slice(0, 6)); // Limit to 6 tokens for 'All'
    }
  };

  if (loading) {
    return (
      <section className="py-12 md:py-24 lg:py-32 max-w-[1580px] m-auto">
        <div className="mb-6 pl-8 w-56 animate-pulse h-8 bg-gray-400 ml-10 rounded-md"></div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mx-3 lg:px-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-lg bg-gray-300 animate-pulse pb-6 flex flex-col items-center justify-between border">
              <div className="bg-gray-400 w-full h-24 rounded-t-lg"></div>
              <div className="bg-gray-400 w-16 h-16 rounded-full relative -top-8"></div>
              <div className="w-[90%] h-6 bg-gray-400 mt-4 mb-2"></div>
              <div className="w-[90%] h-6 bg-gray-400 mb-2"></div>
              <div className="w-[90%] h-6 bg-gray-400 mb-2"></div>
              <div className="w-[90%] h-6 bg-gray-400 mb-2"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-24 lg:py-32 max-w-[1580px] m-auto">
      <span className="flex flex-wrap md:px-4 lg:px-8 px-4">
        <FaTractor className="text-2xl md:text-3xl lg:text-3xl text-blue-500 lg:ml-5 mr-3 mt-2 "/>
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 inline-block bg-clip-text 
        text-transparent bg-gradient-to-r from-blue-500 to-red-500">Token Farming / Potential Airdrops</h2>
      </span>
      <div className="flex flex-wrap gap-4 mb-6 pl-8">
        <button
          className={`px-4 py-2 rounded-lg ${selectedBlockchain === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleFilterChange('')}
        >
          All
        </button>
        {blockchains.map((blockchain) => (
          <button
            key={blockchain}
            className={`px-4 py-2 rounded-lg ${selectedBlockchain === blockchain ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => handleFilterChange(blockchain)}
          >
            {blockchain}
          </button>
        ))}
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mx-3 lg:px-6">
        {filteredTokens.map((token, index) => (
          <div key={index} className="rounded-lg bg-gray-200 pb-6 flex flex-col items-center justify-between border">
             <h3 className="text-lg text-white font-medium bg-black text-center w-full h-24 rounded-t-lg pt-6">{token.tokenName}</h3>
             <div className="w-16 h-16 relative -top-8 ">
                <img src={token.logo} className="w-16 h-16 rounded-full" />
             </div>

            <span className='flex flex-wrap pt-0 p-2 border-b border-b-gray-400 w-[90%] justify-between'>
                <p className='text-red-900 text-sm '>Platform:</p>
                <button className='p-1 bg-blue-900 text-sm text-white px-3 rounded-3xl '>Binance App</button>
            </span>

            <span className='flex flex-wrap p-2 border-b border-b-gray-400 w-[90%] justify-between'>
                <p className='mr-18 text-red-900 text-sm'>Requirements:</p>
                <p className='text-sm'>Telegram, Ton wallet</p>
            </span>
           
            <div className="flex-wrap flex w-[90%] justify-between mt-4 p-2">
              <span className={`text-lg font-bold ${token.status === 'Ongoing' ? 'text-[green]' : 'text-red-500'}`}>
                {token.status}
              </span>
              <a href={token.guideUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-3 py-1 
                 rounded-md hover:bg-blue-600 font-semibold">
              Guide
             </a>
            </div>
            
          </div>
        ))}
      </div>

      <button className='py-2 px-4 m-auto mt-6 flex justify-self-center hover:bg-blue-500 hover:text-white
         text-black active:bg-blue-100 rounded-xl bg-gray-200 hover:transition-all hover:ease-in-out' onClick={handleNavigateToTokenFarming}>
          More
      </button>
    </section> 
  );
};

export default TokenFarming;
