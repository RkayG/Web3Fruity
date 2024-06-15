import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const productList = ["Airdrops", "Token Farming", "Games", "Reward For Tasks"];
  const contactList = ["support@web3fruity.com", "info@example.com", "Contact Us"];
  const usefulLink = ["Home", "About Us", "Academy"];
  return (
    <footer className='text-center  w-full flex justify-center text-white bg-black lg:text-left '>
      <div className='container mx-6 py-10 text-center md:text-left'>
        <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className=''>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start'>Web3Fruity</h6>
            <p>We curate  the latest and most rewarding crypto airdrops, exclusive token giveaways, and lucrative blockchain projects
            </p>
          </div>

          <div className=''>
          <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start'>Earn</h6>
            { productList.map((el, i) => (
              <p className='mb-4' key={i + 1}>
                <a href='/'>{el}</a>
              </p>
            ))}
          </div>
          
          <div className=''>
          <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start'>Useful Links</h6>
            { usefulLink.map((el, i) => (
              <p className='mb-4' key={i + 1}>
                <a href='#!'>{el}</a>
              </p>
            ))}
          </div>

          <div className=''>
          <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start cursor-pointer'>Contact</h6>
            { contactList.map((el, i) => (
              <p className='mb-4' key={i + 1}>
                <Link href='/contact'>{el}</Link>
              </p>
            ))}
          </div>

          
        </div>
        <div className='bg-black p-6 text-center'>
          <span>2024 Copyright: </span>
          <a href='https://tailwind-elements.com' className='font-semibold'>Web3Fruity</a>
        </div>
      </div>

     
    </footer>
  )
}

export default Footer