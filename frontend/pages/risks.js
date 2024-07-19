import React from 'react';
import { FaExclamationTriangle, FaChartLine, FaLock, FaGlobe, FaBalanceScale, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const RiskSection = ({ icon, title, content }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md p-6 mb-6"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-700">{content}</p>
  </motion.div>
);

const RiskPage = () => {
  const risks = [
    {
      icon: <FaChartLine className="text-red-500 text-2xl" />,
      title: "Market Volatility",
      content: "Cryptocurrency markets are known for their high volatility. Prices can fluctuate wildly in short periods, leading to potential significant gains or losses. This volatility can be attributed to factors such as regulatory news, technological advancements, and market sentiment."
    },
    {
      icon: <FaLock className="text-blue-500 text-2xl" />,
      title: "Security Risks",
      content: "Digital assets are vulnerable to hacking and theft. If proper security measures aren't taken, your investments could be at risk. This includes risks associated with exchange hacks, phishing attempts, and personal wallet security."
    },
    {
      icon: <FaGlobe className="text-green-500 text-2xl" />,
      title: "Regulatory Uncertainty",
      content: "The regulatory landscape for cryptocurrencies and blockchain technology is still evolving. Changes in government policies or regulations can significantly impact the value and legality of crypto assets in different jurisdictions."
    },
    {
      icon: <FaBalanceScale className="text-purple-500 text-2xl" />,
      title: "Lack of Investor Protection",
      content: "Unlike traditional financial markets, many cryptocurrency investments lack regulatory oversight and investor protection mechanisms. This means that in case of fraud or bankruptcy, you may have limited recourse."
    },
    {
      icon: <FaBook className="text-yellow-500 text-2xl" />,
      title: "Technical Complexity",
      content: "Blockchain and cryptocurrency technologies can be complex and difficult to understand fully. This complexity can lead to misunderstandings about how investments work and their associated risks."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center text-gray-800"
      >
        Understanding Cryptocurrency and Blockchain Investment Risks
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg"
      >
        <div className="flex items-center">
          <FaExclamationTriangle className="text-orange-500 text-2xl mr-3" />
          <p className="text-orange-700 font-semibold">
            Investing in cryptocurrencies and blockchain technologies involves significant risks. Make sure you understand these risks before making any investment decisions.
          </p>
        </div>
      </motion.div>

      {risks.map((risk, index) => (
        <RiskSection key={index} {...risk} />
      ))}

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Remember</h3>
        <p className="text-gray-700 mb-6">
          Always do your own research, never invest more than you can afford to lose, and consider seeking advice from financial professionals before making investment decisions.
        </p>
        <Link href="/">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Return to Home
          </motion.a>
        </Link>
      </motion.div>
    </div>
  );
};

export default RiskPage;