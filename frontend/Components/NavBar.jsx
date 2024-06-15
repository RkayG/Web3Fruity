import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo, Menu } from '../Components/index';
import { FaAngleDown } from 'react-icons/fa';
import Subscribe from './Subscribe';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const menuList = [
    { name: "Home", path: "/" },
    { 
      name: "Airdrops", 
      dropdown: [
        { name: "Confirmed Airdrops", path: "/airdrops" },
        { name: "Token Farming", path: "/token-farming" }
      ] 
    },
    { name: "Games", path: "/games" },
    { name: "Platforms", path: "/platforms" },
    { name: "Academy", path: "/academy" },
    { name: "Crypto Insights", path: "/crypto_insights" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    // Set the active page based on the current pathname
    const currentPath = router.pathname;
    const currentPage = menuList.find(menu => menu.path === currentPath || (menu.dropdown && menu.dropdown.some(subMenu => subMenu.path === currentPath)));
    if (currentPage) {
      setActivePage(currentPage.name);
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='bg-white shadow-lg'>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1580px] md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <div className='flex items-center'>
            <a title='Web3Fruity' href='/' className='inline-flex items-center mr-8'>
              <Logo color="text-black" />
              <span className='ml-2 text-xl font-bold tracking-wide text-blue-800 uppercase'>Web3Fruity</span>
            </a>
            <ul className='flex items-center hidden space-x-8 lg:flex'>
              {menuList.map((el, i) => (
                <li 
                  key={i + 1} 
                  className='relative' 
                  onMouseEnter={() => el.dropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => el.dropdown && setIsDropdownOpen(false)}
                  onClick={() => el.dropdown && setIsDropdownOpen(!isDropdownOpen)}
                  /* ref={el.dropdown ? dropdownRef : null} */
                >
                  {el.dropdown ? (
                    <div 
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button
                        className={`font-medium cursor-pointer disabled:pointer-events-none focus-visible:outline-none active:outline-none checked:outline-none focus:ring-0 transition-colors duration-200 flex items-center ${
                          activePage === el.name ? 'text-orange-800 checked:ring-0' : 'text-black hover:text-orange-800'
                        }`}
                        onClick={() => setActivePage(el.name)}
                      >
                        {el.name}
                        <FaAngleDown className='ml-1 mt-1' />
                      </button>
                      {isDropdownOpen && (
                        <ul className='absolute left-0 w-48 mt-2 bg-white border-t-2 border-t-orange-800 border rounded shadow-lg z-[500] py-2'>
                          {el.dropdown.map((subEl, j) => (
                            <li key={j + 1} className='px-4'>
                              <Link href={subEl.path} className='block px-2 py-2 rounded-md text-black hover:bg-gray-100 hover:border-l-2 hover:border-l-orange-800'>
                                {subEl.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link href={el.path}>
                      <button
                        className={`font-medium cursor-pointer transition-colors duration-200 ${
                          activePage === el.name ? 'text-orange-800' : 'text-black hover:text-orange-800'
                        }`}
                        onClick={() => setActivePage(el.name)}
                      >
                        {el.name}
                      </button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <button onClick={() => setIsSubscribeOpen(true)} className='inline-flex items-center justify-center h-9 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-600' title='Subscribe'>
                Subscribe
              </button>
            </li>
          </ul>
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
                    <a title='Web3Fruity' href='/' className='inline-flex items-center'>
                      <Logo color="text-black" />
                      <span className='ml-2 text-xl font-bold tracking-wide text-blue-800 uppercase'>Web3Fruity</span>
                    </a>
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
                  <nav>
                    <ul className='space-y-4'>
                      {menuList.map((el, i) => (
                        <li key={i + 1} className='relative'>
                          {el.dropdown ? (
                            <div>
                              <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className='font-medium cursor-pointer text-black transition-colors duration-200 hover:text-teal-accent-400 flex items-center'
                              >
                                {el.name}
                                <FaAngleDown className='ml-1 mt-1' />
                              </button>
                              {isDropdownOpen && (
                                <ul className='mt-2 bg-white border rounded shadow-lg'>
                                  {el.dropdown.map((subEl, j) => (
                                    <li key={j + 1} className='px-4 py-2'>
                                      <Link href={subEl.path} className='block text-black hover:bg-gray-200'>
                                        {subEl.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <Link href={el.path}>
                              <button
                                className={`font-medium cursor-pointer transition-colors duration-200 ${
                                  activePage === el.name ? 'text-orange-800' : 'text-black hover:text-orange-800'
                                }`}
                                onClick={() => { setActivePage(el.name); setIsMenuOpen(false)}}
                              >
                                {el.name}
                              </button>
                            </Link>
                          )}
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
      {isSubscribeOpen && <Subscribe onClose={() => setIsSubscribeOpen(false)} />}
    </div>
  );
};

export default NavBar;
