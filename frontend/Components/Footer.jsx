import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const productList = [
    {name: "Airdrops", path: ""},
    {name: "Token Farming", path: ""},
    {name: "Games", path: ""},
    {name: "Reward For Tasks", path: ""}
  ];
  /* const contactList = ["support@web3fruity.com", "Contact Us", "Advertise"]; */
  const contactList = ["Contact Us", "Advertise"];
  const usefulLink = [
    {name:"Discover", path:""},
    {name: "About Us", path: "/"},
    {name: "Academy", path: ""},
    {name: "News", path: ""}
  ];

  return (
    <footer className='text-center   w-full flex justify-center text-white bg-gradient-to-l from-orange-900 to-blue-900 lg:text-left '>
      <div className='container mx-6 py-10 text-center md:text-left'>
        <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className=''>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start'>Web3Fruity</h6>
            <p> Dive confidently into Crypto: Web3Fruity curates legitimate, lucrative opportunities and empowers you with knowledge.
            </p>
          </div>

          <div className=''>
          <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start'>Earn</h6>
            { productList.map((el, i) => (
              <p className='mb-4 hover:text-gray-300' key={i + 1}>
                <Link href={el.path}>{el.name}</Link>
              </p>
            ))}
          </div>
          
          <div className=''>
          <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start'>Useful Links</h6>
            { usefulLink.map((el, i) => (
              <p className='mb-4 hover:text-gray-300' key={i + 1}>
                <Link href={el.path}>{el.name}</Link>
              </p>
            ))}
          </div>

          <div className=''>
          <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start cursor-pointer '>Contact</h6>
            { contactList.map((el, i) => (
              <p className='mb-4 hover:text-gray-300' key={i + 1}>
                <Link href='/contact'>{el}</Link>
              </p>
            ))}
          </div>

          
        </div>
        <div className=' p-6 text-center'>
          <span>2024 Copyright: </span>
          <a href='#' className='font-semibold'>Web3Fruity</a>
        </div>
      </div>

     
    </footer>
  )
}

export default Footer