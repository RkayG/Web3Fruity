import React, { useState, useEffect } from 'react';
import { EffectCoverflow, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

// Skeleton component for FeaturedAirdrops
const FeaturedAirdropsSkeleton = () => {
  return (
    <section className="featured-airdrops ">
      
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

const FeaturedAirdrops = () => {
  const [airdrops, setAirdrops] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch airdrops from server
    fetch('http://localhost:1225/api/featured-airdrops')
      .then(response => response.json())
      .then(data => {
        setAirdrops(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => console.error('Error fetching airdrops:', error));
  }, []);

  const breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <section className='featured-airdrops my-20 m-auto max-w-[1580px]'>
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-5 pl-8 inline-block bg-clip-text text-transparent bg-gradient-to-r 
      from-blue-500 to-red-500">
        Featured
      </h2>

      {/* Conditionally render the Swiper component or the skeleton loading component */}
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
                <div className="bg-white shadow-md rounded-md p-4 mb-3">
                  <img src={airdrop.image} alt={airdrop.title} className="w-full h-60 rounded-t-md" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{airdrop.title}</h2>
                    <p className="text-sm text-gray-600 h-16">{airdrop.description}</p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md 
                    hover:bg-blue-600">View Guide</button>
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
              {/* Custom pagination bullets */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedAirdrops;
