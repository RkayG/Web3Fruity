import React, { useState, useEffect } from 'react';
import { EffectCoverflow, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight, FaFire, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

const FeaturedAirdropsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
      {[1, 2, 3].map((index) => (
        <div key={index} className="bg-gradient-to-br from-blue-800 to-orange-800 p-1 rounded-2xl shadow-lg animate-pulse">
          <div className="bg-gray-200 h-full rounded-2xl">
            <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const isNewAirdrop = (dateString) => {
  const postDate = new Date(dateString);
  const currentDate = new Date();
  const differenceInTime = currentDate - postDate;
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays <= 3;
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
      });
  }, []);

  const breakpoints = {
    640: { slidesPerView: 1.3 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };

  return (
    <section className='featured-airdrops my-20 m-auto max-w-[1580px]'>
      <div className="flex items-center justify-between mb-12 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold flex items-center">
          <FaFire className="text-orange-800 mr-4 text-4xl md:text-5xl" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-orange-800">
            Featured
          </span>
        </h2>
      </div>

      {loading ? (
        <FeaturedAirdropsSkeleton />
      ) : (
        <div className="swiper-container px-4 md:px-8">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination, A11y]}
            effect={'coverflow'}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={breakpoints}
            centeredSlides={true}
            loop={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 5, stretch: 0, depth: 100, modifier: 2, slideShadows: false }}
            className="swiper"
          >
            {airdrops.map((airdrop, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="bg-gradient-to-br from-blue-800 to-orange-800 p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="bg-gray-200 h-full rounded-2xl overflow-hidden">
                    <div className="relative">
                      <img src={airdrop.bannerImageUrl} alt={airdrop.bannerHeading} className="w-full h-48 object-cover" />
                      {isNewAirdrop(airdrop.postDate) && (
                        <span className="absolute top-2 left-2 bg-orange-800 text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-blue-800 mb-2">{airdrop.bannerHeading}</h2>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{airdrop.headingDescription}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-2 text-orange-800" />
                          {new Date(airdrop.postDate).toLocaleDateString()}
                        </span>
                        <button className="flex items-center text-blue-800 hover:text-orange-800 transition-colors duration-300">
                          Learn More <FaChevronRight className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-controler mt-16 hidden lg:block">
            <div className="swiper-button-prev slider-arrow">
              <FaArrowLeft className="text-blue-800 text-lg p-1 hidden lg:block hover:text-white transition-colors duration-300" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FaArrowRight className="text-blue-800 text-lg p-1 hidden lg:block hover:text-white transition-colors duration-300" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedAirdrops;