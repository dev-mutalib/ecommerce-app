import React from 'react';
import { assets } from '../assets/frontend_assets/assets.js';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
              <span className='w-8 md:w-11 h-0.5 bg-[#414141]' />
              <span className='font-medium text-sm md:text-base'>
                BEST SELLERS
              </span>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl'>
              Latest Arrivals
            </h1>
            <div className='flex items-center gap-2'>
              <span className='font-semibold text-sm md:text-base'>
                SHOP NOW
              </span>
              <span className='w-8 md:w-11 h-px bg-[#414141]'></span>
            </div>
          </div>
        </div>

        {/* Hero Right Side */}

        <img
          src={assets.hero_img}
          alt='hero-img'
          className='w-full sm:w-1/2'
        />
      </div>
    </>
  );
};

export default Hero;
