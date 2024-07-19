import React from 'react';
import { FaExclamationTriangle, FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Link from 'next/link';
const Disclaimer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-orange-100 to-yellow-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-12"
    >
        <div className="flex items-center mb-6">
          <FaExclamationTriangle className="text-3xl text-orange-500 mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Disclaimer</h2>
        </div>
        <div className="bg-white bg-opacity-70 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
          <div className="flex items-start mb-4">
            <FaInfoCircle className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700 font-medium leading-relaxed">
              The content provided on this website is for informational purposes only and should not be taken as financial advice. Always do your own research before making any investment decisions.
            </p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700 font-medium leading-relaxed">
              The authors and the website are not responsible for any financial decisions made based on the information provided.
            </p>
          </div>
        </div>
        <Link href="/risks">
          <motion.div 
            whileHover={{ x: 5 }}
            className="mt-6 flex items-center justify-end text-orange-600 font-semibold cursor-pointer"
          >
            Learn More About Risks
            <FaChevronRight className="ml-2" />
          </motion.div>
          </Link>
    </motion.div>
    
  );
};

export default Disclaimer;