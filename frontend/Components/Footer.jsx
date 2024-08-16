import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const productList = [
    {name: "Airdrops", path: "/airdrops"},
    {name: "Token Farming", path: "/token-farming"},
    {name: "Games", path: "/games"},
    {name: "Reward For Tasks", path: "/platforms"}
  ];
  const contactList = ["Contact Us", "Advertise"];
  const usefulLink = [
    {name:"Discover", path:"/discover"},
    {name: "About Us", path: "/about"},
    {name: "Academy", path: "/academy"},
    {name: "News", path: "/crypto-news"}
  ];

  return (
    <div className='relative text-white bg-gradient-to-l from-orange-900 to-blue-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <h6 className='text-2xl font-bold'>Web3Fruity</h6>
            <p className='text-gray-300'> 
              Dive confidently into Crypto: Web3Fruity curates legitimate, lucrative opportunities and empowers you with knowledge.
            </p>
            <div className='flex space-x-4'>
              <a href="#" className='text-gray-300 hover:text-white transition-colors'><FaTwitter size={24} /></a>
              <a href="#" className='text-gray-300 hover:text-white transition-colors'><FaTelegram size={24} /></a>
              <a href="#" className='text-gray-300 hover:text-white transition-colors'><FaDiscord size={24} /></a>
              <a href="#" className='text-gray-300 hover:text-white transition-colors'><FaGithub size={24} /></a>
            </div>
          </div>

          <div>
            <h6 className='text-xl font-semibold mb-4'>Earn</h6>
            <ul className='space-y-2'>
              {productList.map((el, i) => (
                <li key={i} className='hover:translate-x-2 transition-transform'>
                  <Link href={el.path} className='text-gray-300 hover:text-white transition-colors'>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h6 className='text-xl font-semibold mb-4'>Useful Links</h6>
            <ul className='space-y-2'>
              {usefulLink.map((el, i) => (
                <li key={i} className='hover:translate-x-2 transition-transform'>
                  <Link href={el.path} className='text-gray-300 hover:text-white transition-colors'>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className='text-xl font-semibold mb-4'>Contact</h6>
            <ul className='space-y-2'>
              {contactList.map((el, i) => (
                <li key={i} className='hover:translate-x-2 transition-transform'>
                  <Link href='/contact' className='text-gray-300 hover:text-white transition-colors'>{el}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-700 text-center text-gray-300'>
          <p>&copy; 2024 Web3Fruity. All rights reserved.</p>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500'></div>
    </div>
  )
}

export default Footer;