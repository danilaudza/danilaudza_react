import React, { useEffect, useState } from 'react';

import Logo from '../assets/img/LogoSimple.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? 'lg:bg-primary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white transition-all duration-300 z-20`}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='/'>
          <img src={Logo} alt='' className='hidden lg:block w-12' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
