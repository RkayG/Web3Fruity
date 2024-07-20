import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '../Components/index';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import Subscribe from './Subscribe';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [activePage, setActivePage] = useState('About');
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const menuList = [
    { name: "Discover", path: "" },
    /* { 
      name: "Airdrops", 
      dropdown: [
        { name: "Confirmed Airdrops", path: "" },
        { name: "Token Farming", path: "" }
      ] 
    }, */
    { name: "Hot Airdrops", path: "" },
    { name: "Token Farming", path: "" },
    { name: "Games", path: "" },
    { name: "Platforms", path: "" },
    { name: "Academy", path: "" },
    { name: "Crypto News", path: "" },
    { name: "About", path: "/" },
  ];

  useEffect(() => {
    const currentPath = router.pathname;
    const currentPage = menuList.find(menu => menu.path === currentPath || (menu.dropdown && menu.dropdown.some(subMenu => subMenu.path === currentPath)));
    if (currentPage) {
      setActivePage(currentPage.name);
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const NavItem = ({ el, mobile = false }) => (
    <div className={`${mobile ? 'mb-4' : ''} relative`} ref={el.dropdown ? dropdownRef : null}>
      {el.dropdown ? (
        <div>
          <button
            className={`font-medium cursor-pointer transition-colors duration-200 flex items-center justify-between w-full
              ${activePage === el.name ? 'text-orange-500' : 'text-gray-800'} ${mobile ? 'text-lg py-2' : ''}`}
            onClick={() => setOpenDropdown(openDropdown === el.name ? null : el.name)}
            onMouseEnter={() => !mobile && setOpenDropdown(el.name)}
          >
            {el.name}
            <FaAngleDown className={`ml-1 lg:mt-1 transition-transform duration-200 ${openDropdown === el.name ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openDropdown === el.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`${mobile ? 'mt-2' : 'absolute left-0 w-48 mt-2 bg-white py-2 px-2 border-t-2 border-t-orange-800 border rounded shadow-lg z-[500]'}`}
                onMouseLeave={() => !mobile && setOpenDropdown(null)}
              >
                {el.dropdown.map((subEl, j) => (
                  <Link key={j} href={subEl.path}>
                    <span className={`block px-4 py-2 text-black rounded-md  hover:bg-gray-100 hover:border-l-2 hover:border-l-orange-800  transition-colors duration-200
                      ${mobile ? 'text-base' : 'text-sm'}`}>
                      {subEl.name}
                    </span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link href={el.path}>
          <span className={`font-medium cursor-pointer transition-colors duration-200 block
            ${activePage === el.name ? 'text-orange-700' : 'text-gray-800 hover:text-orange-700'}
            ${mobile ? 'text-lg py-2' : ''}`}
            onClick={() => setActivePage(el.name)}
          >
            {el.name}
          </span>
        </Link>
      )}
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}className="bg-white shadow-lg sticky top-0 z-50"
      >
      <div className="px-4 py-5 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo color="text-black" />
            <span className="text-2xl font-bold tracking-wide text-blue-800">
              Web<span className="font-serif">3</span><span className="text-orange-800">Fruity</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center space-x-8">
            {menuList.map((el, i) => (
              <li key={i}><NavItem el={el} /></li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <button
              onClick={() => setIsSubscribeOpen(true)}
              className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg overflow-y-auto lg:hidden z-50"
          >
            <div className="p-5">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mb-5 p-2 text-gray-600 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100"
              >
                <FaTimes size={24} />
              </button>
              <div className="space-y-1">
                {menuList.map((el, i) => (
                  <NavItem key={i} el={el} mobile={true} />
                ))}
                <button
                  onClick={() => {
                    setIsSubscribeOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isSubscribeOpen && <Subscribe onClose={() => setIsSubscribeOpen(false)} />}
    </motion.nav>
  );
};

export default NavBar;