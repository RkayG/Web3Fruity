import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { FaChevronLeft, FaCalendarAlt, FaCoins, FaExternalLinkAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa';
import { Disclaimer } from '../../Components';

const Navigation = ({ title }) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-600 px-4 py-6 bg-gray-100">
      <Link href="/token-farming" className="flex items-center hover:text-blue-600 transition-colors duration-300">
        <FaChevronLeft className="mr-2" />
        <span>Back to Token Farming</span>
      </Link>
      <span className="mx-2">/</span>
      <p className="font-semibold text-blue-800 truncate max-w-md">{title}</p>
    </nav>
  );
};

const ShareButton = ({ icon, color, onClick, label }) => (
  <button
    onClick={onClick}
    className={`${color} text-white p-2 rounded-full hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}`}
    aria-label={label}
  >
    {icon}
  </button>
);

const TokenFarmingGuide = () => {
  const [tokenData, setTokenData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchTokenData = async (slug) => {
      try {
        const response = await fetch(`http://localhost:1225/farm-tokens/${slug}`);
        const data = await response.json();
        setTokenData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load token data:', error);
        setError('Failed to load token data');
        setLoading(false);
      }
    };

    if (router.isReady) {
        console.log(router.query);
      const { slug } = router.query;
     // alert(_id);
      if (slug) {
        fetchTokenData(slug);
      }
    }
  }, [router.isReady, router.query.slug]);

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Check out this token farming opportunity: ${tokenData.tokenName}`)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(`Token Farming Guide: ${tokenData.tokenName}`)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500 text-xl bg-red-100 p-6 rounded-lg shadow-md">
          {error}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }

 const { tokenName, platform, requirements, blockchain, guide, linkToFarmingPlatform, website, whitepaper, twitter, telegram, discord } = tokenData;
 const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, tokenName } = node.data.target.fields;
        return (
          <div className="my-4 rounded-md">
            <img src={file.url} alt={tokenName} className="mx-auto rounded-lg shadow-md" />
            {tokenName && <p className="text-center text-sm text-gray-600 mt-2">{tokenName}</p>}
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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation title={tokenName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8  text-blue-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {tokenData.tokenName} 
        </motion.h1>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="h-48 bg-gradient-to-bl from-blue-800 to-purple-800 flex items-center justify-center">
            <img src={tokenData.logo} className="w-32 h-32 rounded-full border-4 border-white shadow-md" alt={tokenData.tokenName} />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Platform:</span>
              <a href={tokenData.linkToFarmingPlatform}>
                <span className="bg-orange-100 hover:bg-orange-900 hover:text-white flex flex-wrap cursor-pointer text-orange-800 px-3 py-1 rounded-full">{tokenData.platform || 'N/A'}
                    <FaExternalLinkAlt className='mt-1 ml-2' />
                </span>
              </a>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Requirements:</p>
              <p className="font-semibold">{tokenData.requirements || 'N/A'}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Blockchain:</p>
              <p className="font-semibold">{tokenData.blockchain}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Farming Type:</p>
              <p className="font-semibold">{tokenData.stakeToFarm ? 'Stake to Farm' : 'Free Farming'}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ShareButton
            icon={<FaFacebookF />}
            color="bg-blue-600"
            onClick={shareOnFacebook}
            label="Share on Facebook"
          />
          <ShareButton
            icon={<FaTwitter />}
            color="bg-blue-400"
            onClick={shareOnTwitter}
            label="Share on Twitter"
          />
          <ShareButton
            icon={<FaLinkedinIn />}
            color="bg-blue-700"
            onClick={shareOnLinkedIn}
            label="Share on LinkedIn"
          />
          <ShareButton
            icon={<FaLink />}
            color="bg-gray-600"
            onClick={copyLink}
            label="Copy link"
          />
        </motion.div>
        {copied && (
          <motion.p
            className="text-green-600 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Link copied to clipboard!
          </motion.p>
        )}

        <motion.div
          className="bg-white rounded-lg shadow-lg px-1 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
           {guide ? (
                <div>
                    <h2 className="text-2xl font-bold text-center mb-4 mt-8 text-blue-800">{tokenName} Farming Guide</h2>
                    <div className='border-t-2 border-t-orange-800 p-6 lg:px-12 rounded-lg bg-gray-50 shadow-inner'>
                    {documentToReactComponents(guide, renderOptions)}
                    </div>
                </div>
                ) : (
                <p className="text-center text-gray-500">No guide available for this farming.</p>
            )}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href={tokenData.linkToFarmingPlatform} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
          > Participate <FaExternalLinkAlt className="ml-2" />
          </a>
        </motion.div>
      </div>

      <Disclaimer />
    </motion.section>
  );
};

export default TokenFarmingGuide;