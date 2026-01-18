import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          {/* Left Side */}
          <div>
            <img
              src={assets.logo}
              alt='logo'
              className='mb-5 w-32'
            />
            <p className='w-full md:2/3 text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              laboriosam quibusdam facere voluptatum velit optio repudiandae
              dolor eveniet, magni voluptas doloribus quidem nostrum accusantium
              maiores laudantium cum non debitis dicta!
            </p>
          </div>

          {/* Middle Side */}
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <Link
                className='link-footer hover:text-black'
                to={'/'}
              >
                Home
              </Link>
              <Link
                className='link-footer hover:text-black'
                to={'/collection'}
              >
                Collection
              </Link>
              <Link
                className='link-footer hover:text-black'
                to={'/about'}
              >
                About
              </Link>
              <Link
                className='link-footer hover:text-black'
                to={'/contact'}
              >
                Contact
              </Link>
            </ul>
          </div>

          {/* Right Side */}
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+91-1233-456789</li>
              <li>foreverbusiness@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>
            Copyright 2026@ forever.com - All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
