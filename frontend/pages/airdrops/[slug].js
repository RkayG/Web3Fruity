import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import axios from 'axios';
import { FaTwitter, FaTelegram, FaDiscord, FaGlobe, FaFile, FaLink, FaCoins, FaPercentage, FaCalendarAlt, } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Disclaimer } from '../../Components';

const Navigation = ({ title }) => {
  
  return (
    <nav className="flex items-center space-x-2 text-pink-900 ml-6 mt-6">
      <Link href="/airdrops" className="hover:text-blue-600"> 
         Airdrops
      </Link>
      <span> &gt; </span>
      <span className="font-semibold text-blue-800">{title}</span>
    </nav>
  );
};

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
    const fetchAirdrop = async (slug) => {
      try {
        const response = await fetch(`http://localhost:1225/airdrops/${slug}`);
        const airdrop = await response.json();
        setAirdropData(airdrop);
      } catch (error) {
        console.error('Failed to load airdrop guide:', error);
        setError('Failed to load airdrop guide');
      }
    };

    const fetchAdditionalAirdrops = async (slug) => {
      try {
        const response = await axios.get('http://localhost:1225/airdrops', {
          params: { limit: 7, page: 1 },
        });
        const moreAirdrops = response.data.airdrops.filter((airdrop) => airdrop.slug !== slug);
        setAdditionalAirdrops(moreAirdrops);
      } catch (error) {
        console.error('Failed to load additional airdrops:', error);
      }
    };

    if (router.isReady) {
      const { slug } = router.query;
      if (slug) {
        fetchAirdrop(slug);
        fetchAdditionalAirdrops(slug);
      }
    }
  }, [router.isReady, router.query.slug]);

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
        <a href={node.data.uri} className="text-blue-700 font-bold hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  const truncatedDescription = description?.length > 200 ? description?.substring(0, 200) + '...' : description;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='max-w-[1580px] m-auto'
    >
      <Navigation title={title} />
    
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto p-8 mt-12 bg-white "
      >
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title} Guide
      </motion.h1>
      <motion.div
  
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="  transition-all duration-300 hover:-translate-y-2"
          >
          <div className="group bg-gradient-to-br from-blue-800 to-orange-800 p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-white h-full rounded-2xl p-6 transition-all duration-300 group-hover:bg-gray-100">
              <div className="relative mb-6">
                <img src={logo} className="w-20 h-20 rounded-full mx-auto shadow-md" alt={title} />
                <div className="absolute top-0 right-0 bg-orange-800 text-gray-200 text-xs font-semibold py-1 px-3 rounded-full">
                  {airdropData.platformType}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-blue-800">{airdropData.title}</h3>
              <p className="text-sm text-center text-gray-600 mb-4">{airdropData.chain}</p>
              <div className="space-y-3 text-sm">
                <p className="flex items-center justify-between">
                  <span className="flex items-center text-gray-600"><FaCoins className="mr-2 text-orange-800" /> Total Pool:</span>
                  <span className="font-semibold text-blue-800">{airdropData.rewardPool || 'N/A'}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="flex items-center text-gray-600"><FaPercentage className="mr-2 text-orange-800" /> % of Supply:</span>
                  <span className="font-semibold text-blue-800">{airdropData.rewardPercentFromSupply || 'N/A'}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="flex items-center text-gray-600"><FaCalendarAlt className="mr-2 text-orange-800" /> End Date:</span>
                  <span className="font-semibold text-blue-800">{new Date(airdropData.endDate).toLocaleDateString() || 'N/A'}</span>
                </p>
              </div>
            </div>
              <div className="bg-gradient-to-r from-gray-900 to-orange-800 p-4 rounded-b-2xl">
                {/* <span className="font-semibold">View Details</span> */}
                
              </div>  
          </div>
        </motion.div>

        {/* {logo && <img src={logo} alt={title} className="w-32 h-32 mx-auto rounded-full shadow-md" />}
        <h1 className="text-4xl font-bold text-center my-6 text-blue-900">{title}</h1> */}
        <div className="social-links flex justify-center space-x-4 mb-6 mt-6">
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
        <h2 className="text-2xl font-bold mb-6 px-6 text-blue-900">More Airdrops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalAirdrops.map((airdrop) => (
            <motion.div
            key={airdrop._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{  delay: 0.2 }}
            className="  transition-all duration-300 hover:-translate-y-2"
          >
            <div key={airdrop._id} className="group bg-gradient-to-br from-blue-800 to-orange-800 p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white h-full rounded-2xl p-6 transition-all duration-300 group-hover:bg-gray-100">
                <div className="relative mb-6">
                  <img src={airdrop.logo} className="w-20 h-20 rounded-full mx-auto shadow-md" alt={airdrop.title} />
                  <div className="absolute top-0 right-0 bg-orange-800 text-gray-200 text-xs font-semibold py-1 px-3 rounded-full">
                    {airdrop.platformType}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-blue-800">{airdrop.title}</h3>
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
              <Link href={`/airdrops/${airdrop._id}`}>
                <div className="bg-gradient-to-r from-gray-900 to-orange-800 text-gray-200 p-4 rounded-b-2xl flex justify-between items-center cursor-pointer hover:from-orange-800 hover:to-blue-800 transition-all duration-300">
                  <span className="font-semibold">View Details</span>
                  <FaLink />
                </div>
              </Link>
            </div>
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
              See More
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <Disclaimer />
    </motion.section>
  );
};

export default AirdropGuide;