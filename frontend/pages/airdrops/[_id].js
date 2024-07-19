import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import axios from 'axios';
import { FaTwitter, FaTelegram, FaDiscord, FaGlobe, FaFile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navigation = ({ title }) => (
  <nav className="flex items-center space-x-2 text-pink-900 ml-6 mt-6">
    <Link href="/airdrops" className="hover:text-blue-600">Airdrops</Link>
    <span> &gt; </span>
    <span className="font-bold text-gray-800">{title}</span>
  </nav>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
    <Icon size={24} title={label} />
  </a>
);

const AirdropGuide = () => {
  const [airdropData, setAirdropData] = useState(null);
  const [additionalAirdrops, setAdditionalAirdrops] = useState([]);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAirdrop = async (_id) => {
      try {
        const response = await fetch(`http://localhost:1225/airdrops/${_id}`);
        const airdrop = await response.json();
        setAirdropData(airdrop);
      } catch (error) {
        console.error('Failed to load airdrop guide:', error);
        setError('Failed to load airdrop guide');
      }
    };

    const fetchAdditionalAirdrops = async () => {
      try {
        const response = await axios.get('http://localhost:1225/airdrops', {
          params: { limit: 6, page: 1 },
        });
        setAdditionalAirdrops(response.data.airdrops);
      } catch (error) {
        console.error('Failed to load additional airdrops:', error);
      }
    };

    if (router.isReady) {
      const { _id } = router.query;
      if (_id) {
        fetchAirdrop(_id);
        fetchAdditionalAirdrops();
      }
    }
  }, [router.isReady, router.query._id]);

  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!airdropData) return <div className="loading-dots m-auto my-44"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>;

  const { title, description, logo, guide, website, whitepaper, twitter, telegram, discord } = airdropData;

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <div className="my-4 rounded-md">
            <img src={file.url} alt={title} className="mx-auto rounded-lg shadow-md" />
            {title && <p className="text-center text-sm text-gray-600 mt-2">{title}</p>}
          </div>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4 text-gray-700">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4 text-blue-900">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-4 text-blue-800">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  const truncatedDescription = description?.length > 200 ? description?.substring(0, 200) + '...' : description;

  return (
    <div className='max-w-[1580px] m-auto'>
      <Navigation title={title} />
    
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto p-8 mt-12 bg-white rounded-lg shadow-lg"
      >
        {logo && <img src={logo} alt={title} className="w-32 h-32 mx-auto rounded-full shadow-md" />}
        <h1 className="text-4xl font-bold text-center my-6 text-blue-900">{title}</h1>
        <div className="flex justify-center space-x-4 mb-6">
          {website && <SocialLink href={website} icon={FaGlobe} label="Website" />}
          {whitepaper && <SocialLink href={whitepaper} icon={FaFile} label="Whitepaper" />}
          {twitter && <SocialLink href={twitter} icon={FaTwitter} label="Twitter" />}
          {telegram && <SocialLink href={telegram} icon={FaTelegram} label="Telegram" />}
          {discord && <SocialLink href={discord} icon={FaDiscord} label="Discord" />}
        </div>
        <p className="text-lg mb-6 text-gray-700">
          {showFullDescription ? description : truncatedDescription}
          {description?.length > 200 && (
            <button
              className="ml-2 text-blue-500 hover:underline focus:outline-none"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
        {guide ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Steps To Join Airdrop</h2>
            <div className='border-t-2 border-t-orange-800 p-6 lg:px-12 rounded-lg bg-gray-50 shadow-inner'>
              {documentToReactComponents(guide, renderOptions)}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No guide available for this airdrop.</p>
        )}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-8 px-3 mt-12 mb-20 border rounded-lg bg-gray-50 shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 px-6 text-blue-900">You might also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalAirdrops.map((airdrop) => (
            <motion.div
              key={airdrop._id}
              whileHover={{ scale: 1.03 }}
              className="bg-white mx-4 lg:mx-0 rounded-lg shadow-lg p-4 border border-gray-200 relative overflow-hidden"
            >
              <span className="absolute top-2 right-2 text-xs font-semibold bg-green-500 py-1 px-2 rounded-full text-white">
                {airdrop.platformType}
              </span>
              <div className="flex items-center mb-4">
                <img src={airdrop.logo} className="w-16 h-16 rounded-full mr-4" alt={airdrop.title} />
                <Link href={`/airdrops/${airdrop._id}`}>
                  <h3 className="text-lg font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300">
                    {airdrop.title}
                  </h3>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                <div>
                  <p className="text-gray-600">Total Airdrop Pool</p>
                  <p className="font-semibold">{airdrop.rewardPool || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600">% of Total Supply</p>
                  <p className="font-semibold">{airdrop.rewardPercentFromSupply || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600">End Date</p>
                  <p className="font-semibold">{new Date(airdrop.endDate).toLocaleDateString() || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Chain</p>
                  <p className="font-semibold">{airdrop.chain || 'N/A'}</p>
                </div>
              </div>
              <Link href={`/airdrops/${airdrop._id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  View Details
                </motion.button>
              </Link>
            </motion.div>
          ))} 
        </div>
        <div className="text-center mt-8">
          <Link href="/airdrops">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md"
            >
              See More Airdrops
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AirdropGuide;