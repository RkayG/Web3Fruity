import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Banner = ({ bannerTexts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bannerTexts]);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getButtonLink = (text) => {
    switch (text.toLowerCase()) {
      case 'claim free crypto':
        return '/airdrops';
      case 'play earn repeat':
        return '/games';
      case 'from apps to assets':
        return '/platforms';
      default:
        return '#';
    }
  };

  return (
    <div className="banner bg-burgundy py-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="banner-content max-w-3xl mx-auto text-center px-4">
        <h1 className="banner-text text-gray-200 text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-6">
          {bannerTexts[currentIndex]}
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          key={currentIndex}
        >
          <Link href={getButtonLink(bannerTexts[currentIndex])} className="inline-block bg-blue-800 hover:bg-orange-800 text-gray-200 font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore
          </Link>
        </motion.div>
      </div>
      {bannerTexts.length > 1 && (
        <div className="banner-navigation mt-8 flex justify-center">
          {bannerTexts.map((text, index) => (
            <button
              key={index}
              className={`navigation-circle w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                currentIndex === index ? 'bg-gray-200 scale-125' : 'bg-blue-500 hover:bg-orange-800'
              }`}
              onClick={() => handleCircleClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;