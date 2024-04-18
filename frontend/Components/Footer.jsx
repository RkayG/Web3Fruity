import React from 'react'

const Footer = () => {
  const productList = ["Airdrops", "Giveaways", "Play-to-earn games", ];
  const contactList = ["support@web3fruity.com", "info@example.com", "Contact Us"];
  const usefulLink = ["Home", "About Us", "Blog"];
  return (
    <footer className='text-center text-white backgroundMain lg:text-left'>
      <div className='mx-6 py-10 text-center md:text-left'>
        <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className=''>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase
            md:justify-start'>Web3Fruity</h6>
            <p>Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
            md:justify-start'>Contact</h6>
            { contactList.map((el, i) => (
              <p className='mb-4' key={i + 1}>
                <a href='/'>{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='backgroundMain p-6 text-center'>
        <span>2024 Copyright: </span>
        <a href='https://tailwind-elements.com' className='font-semibold'>Web3Fruity</a>
      </div>
    </footer>
  )
}

export default Footer