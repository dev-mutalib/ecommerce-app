import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className='flex items-center justify-between py-5 font-medium'>
        <img
          src={assets.logo}
          alt=''
          className='w-36'
        />

        <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>
          {[
            { path: '/', label: 'HOME' },
            { path: '/collection', label: 'COLLECTION' },
            { path: '/about', label: 'ABOUT' },
            { path: '/contact', label: 'CONTACT' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className='flex flex-col items-center gap-1'
            >
              <span>{label}</span>
              <span
                data-role='nav-underline'
                className='w-3/4 h-[1.5px] border-none bg-gray-700 hidden'
              />
            </NavLink>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className='flex items-center gap-6'>
          <img
            src={assets.search_icon}
            alt=''
            className='w-5 cursor-pointer'
          />
          <div className='group relative'>
            <img
              src={assets.profile_icon}
              className='w-5 cursor-pointer'
              alt=''
            />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <span className='cursor-pointer hover:text-black'>
                  My Profile
                </span>
                <span className='cursor-pointer hover:text-black'>Orders</span>
                <span className='cursor-pointer hover:text-black'>Login</span>
              </div>
            </div>
          </div>
          <Link
            to='/cart'
            className='relative'
          >
            <img
              src={assets.cart_icon}
              className='w-5 min-w-5'
              alt=''
            />
            <p className='absolute -right-1.25 -bottom-2.5 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>
              0
            </p>
          </Link>

          {/* Mobile Menu icon */}
          <img
            src={assets.menu_icon}
            alt=''
            className='w-5 cursor-pointer sm:hidden'
            onClick={() => setVisible(true)}
          />
        </div>
        {/* Mobile Sidebar Menu */}
        {/* Mobile Sidebar — does NOT exist on large screens */}
        <div
          className={`fixed inset-0 z-50 bg-white transition-transform duration-300 sm:hidden ${
            visible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex flex-col text-gray-600'>
            <div
              className='flex items-center gap-4 p-3 cursor-pointer'
              onClick={() => setVisible(false)}
            >
              <img
                src={assets.dropdown_icon}
                alt='Back'
                className='h-4 rotate-180'
              />
              <span>Back</span>
            </div>

            {['/', '/collection', '/about', '/contact'].map((path) => (
              <NavLink
                key={path}
                to={path}
                className='py-3 pl-6 border-b'
                onClick={() => setVisible(false)}
              >
                {path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
