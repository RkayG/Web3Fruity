import React, { useState, useEffect } from 'react';

const Banner = ({ bannerTexts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length);
    }, 4000); // Change 3000 to desired transition interval in milliseconds

    return () => clearInterval(intervalId);
  }, [bannerTexts]);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="banner bg-gradient-to-r from-black to-pink-500 pl-2 h-24 flex justify-center ">
      <div className="banner-content absolute top-24">
        <h1 className="banner-text text-white text-lg md:text-2xl lg:text-3xl font-bold">{bannerTexts[currentIndex]}</h1>
      </div>
      {bannerTexts.length > 1 && (
        <div className="banner-navigation absolute top-48 left-1/2 transform -translate-x-1/2 flex justify-center">
          {bannerTexts.map((text, index) => (
            <button
              key={index}
              className={`navigation-circle w-4 h-4 rounded-full bg-black mx-1 opacity-50 ${
                currentIndex === index ? 'bg-red-900 opacity-100' : ''
              }`}
              onClick={() => handleCircleClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
