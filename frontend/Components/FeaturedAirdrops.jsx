import React, { useState, useEffect } from 'react';
import { EffectCoverflow, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

const FeaturedAirdropsSkeleton = () => {
  return (
    <section className="featured-airdrops">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4 animate-pulse">
            <div className="h-60 bg-gray-200 rounded-t-md mb-4"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 bg-gray-200 mb-2 rounded"></div>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const isNewAirdrop = (dateString) => {
  const postDate = new Date(dateString);
  const currentDate = new Date();
  const differenceInTime = currentDate - postDate;
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays <= 3; // 3 days period
};

const FeaturedAirdrops = () => {
  const [airdrops, setAirdrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:1225/api/featured')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAirdrops(data);
        } else {
          console.error('Error: Data is not an array', data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching airdrops:', error);
        setLoading(false);
      });
  }, []);

  const breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };

  return (
    <section className='featured-airdrops my-20 m-auto max-w-[1580px]'>
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-5 pl-8 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
        Featured
      </h2>
      {loading ? (
        <FeaturedAirdropsSkeleton />
      ) : (
        <div className="swiper-container">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination, A11y]}
            effect={'coverflow'}
            spaceBetween={70}
            grabCursor={true}
            breakpoints={breakpoints}
            centeredSlides={true}
            loop={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
            autoplay={{ delay: 2500 }}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 50, modifier: 1, slideShadows: false }}
            className="swiper"
          >
            {airdrops.map((airdrop, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="bg-white shadow-md rounded-md p-4 mb-3 relative">
                 
                  <img src={airdrop.bannerImageUrl} alt={airdrop.bannerHeading} className="w-full h-56 rounded-t-md" />
                  <div className="p-4">
                    {isNewAirdrop(airdrop.postDate) && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    <h2 className="text-lg font-sans font-semibold text-black text-center">{airdrop.bannerHeading}</h2>
                    <p className="text-sm font-sans mt-2 text-gray-600 h-16 text-center">{airdrop.headingDescription} It's time to join the most awaited airdrop of the year by the BInance Exchange in NewYourk</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-controler mt-16">
            <div className="swiper-button-prev slider-arrow active:shadow-xl">
              <span className='text-20'><FaArrowLeft /></span>
            </div>
            <div className="swiper-button-next slider-arrow">
              <span className='text-20'><FaArrowRight /></span>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedAirdrops;
