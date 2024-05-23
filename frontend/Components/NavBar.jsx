// pages/app.js

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import Link component
import { Logo, Menu } from '../Components/index';

const NavBar = () => {
 // const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuList = ["Home", "Airdrops", "Games", "Apps", "Blog", "Crypto Insights"];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='bg-white shadow-lg'>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <div className='flex items-center'>
            <a href='/' title='Web3Fruity' className='inline-flex items-center mr-8'>
              <Logo color="text-black" />
              <span className='ml-2 text-xl font-bold tracking-wide tai uppercase'>Web3Fruity</span>
            </a>
            <ul className='flex items-center hidden space-x-8 lg:flex'>
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <Link href={el.toLowerCase() === "home" ? "/" : `/${el.toLowerCase()}`}></Link>
                  <a className='font-medium cursor-pointer
                   tracking text-black transition-colors duration-200 hover:text-teal-accent-400'>{el}</a>
                </li>
              ))}
            </ul>
          </div>

          {(
            <ul className='flex items-center hidden space-x-8 lg:flex'>
              <li>
                <button onClick={() => connectWallet()} className='inline-flex items-center justify-center h-9 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md
                bg-blue-500 hover:bg-blue-600 ' title='Sign up'>Subscribe</button>
              </li>
            </ul>
          )}

          <div className='lg:hidden z-40' ref={menuRef}>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <a href='/' title='Web3Fruity' className='inline-flex items-center'>
                        <Logo color="text-black" />
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>Web3Fruity</span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      {menuList.map((el, i) => (
                        <li key={i + 1}>
                          <a
                            href='/'
                            aria-label='Our Product'
                            title='Our product'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                          >
                            {el}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href='/'
                          className='inline-flex items-center justify-center w-full h-16 px-6 font-medium tracking-wide text-white 
                          transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-600'
                          aria-label='Sign up'
                          title='Sign up'
                        >
                          Subscribe
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
