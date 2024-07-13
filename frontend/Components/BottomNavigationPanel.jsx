import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { FaHome, FaParachuteBox, FaGamepad, FaVideo, FaBookReader } from 'react-icons/fa';
import { TooltipLink } from '../pages';

const BottomNavigationPanel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed lg:hidden bottom-0 left-0 right-0 bg-white shadow-lg z-50 rounded-t-3xl border border-gray-400 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-between items-center p-4">
        <span className='block'>
          <FaHome className='text-center flex m-auto text-red-800' />
          <TooltipLink href="/" className="text-blue-700 font-semibold text-sm" tooltipText="Coming soon">Discover</TooltipLink>
        </span>
        
        <span>
          <FaParachuteBox className='text-center flex m-auto text-red-800' />
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="text-blue-700 font-semibold text-sm ">Airdrops</Menu.Button>
            <Menu.Items className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-40 bg-white shadow-lg rounded-md">
              <Menu.Item as={Fragment}>
                {({ active }) => (
                  <TooltipLink href="/airdrops" tooltipText="Coming soon" className={`block px-4 py-2 text-blue-700 ${active ? 'bg-gray-100' : ''}`}>Airdrop</TooltipLink>
                )}
              </Menu.Item>
              <Menu.Item as={Fragment}>
                {({ active }) => (
                  <TooltipLink href="/token-farming" tooltipText="Coming soon" className={`block px-4 py-2 text-blue-700 ${active ? 'bg-gray-100' : ''}`}>Farming</TooltipLink>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </span>
        
        <span className='block'>
          <FaGamepad className='text-center flex m-auto text-red-800' />
          <TooltipLink href="/games" tooltipText="Coming soon" className="text-blue-700 font-semibold text-sm">Games</TooltipLink>
        </span>
        
        <span className='block'>
          <FaVideo className='text-center flex m-auto text-red-800' />
          <TooltipLink href="/platforms" tooltipText="Coming soon" className="text-blue-700 font-semibold text-sm">Platforms</TooltipLink>
        </span>

        <span className='block'>
          <FaBookReader className='text-center flex m-auto text-red-800' /> 
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="text-blue-700 font-bold text-sm">Learn</Menu.Button>
            <Menu.Items className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-40 bg-white shadow-lg rounded-md">
              <Menu.Item as={Fragment}>
                {({ active }) => (
                  <TooltipLink href="/academy" tooltipText="Coming soon" className={`block px-4 py-2 text-blue-700 ${active ? 'bg-gray-100' : ''}`}>Academy</TooltipLink>
                )}
              </Menu.Item>
              <Menu.Item as={Fragment}>
                {({ active }) => (
                  <TooltipLink href="/crypto-news" tooltipText="Coming soon" className={`block px-4 py-2 text-blue-700 ${active ? 'bg-gray-100' : ''}`}>News</TooltipLink>
                )}
              </Menu.Item>
              <Menu.Item as={Fragment}>
                {({ active }) => (
                  <Link href="/" className={`block px-4 py-2 text-blue-700 ${active ? 'bg-gray-100' : ''}`}>About</Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </span>
      </div>
    </nav>
  );
};

export default BottomNavigationPanel;
