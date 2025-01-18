"use client";
import Container from '@/components/custom/Container';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MenuList from './MenuList';
import { HeaderLinks } from "@/constants/Links"; // Assuming this is the source of menu data

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Manage the active menu state

  const handleHover = (index) => {
    setActiveMenu(index); // Update active menu on hover
  };

  const handleLeave = () => {
    setActiveMenu(null); // Reset when the mouse leaves
  };

  return (
    <header className='shadow-custom-light relative'>
      <Container className="">
        <nav className='flex justify-between'>
          <div className='flex justify-center items-center text-center'>
            <div>
              <Link href="/">
                <img src={'/logo/logo.png'} width={38} height={38} className='object-contain' />
              </Link>
            </div>
          </div>
          <div className='flex justify-center items-center h-full'>
            {/* Pass the menu data and hover handling to MenuList */}
            <MenuList 
              menuLinks={HeaderLinks.MENU_LINKS} 
              activeMenu={activeMenu} 
              onHover={handleHover} 
              onLeave={handleLeave} 
            />
          </div>
          <div className='flex justify-center items-center text-center'>
            {/* Add any other content for the right side of the header */}
            three
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
