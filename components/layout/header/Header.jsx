"use client";
import Container from "@/components/custom/Container";
import Link from "next/link";
import React, { useState } from "react";
import MenuList from "./MenuList";
import SocialLinks from "./SocialLinks";
import { FiMenu, FiX } from "react-icons/fi";
import MobileMenuList from "./MobileMenuList";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-custom-light relative">
      <Container>
        <nav className="flex justify-between py-2 lg:py-0 items-center">
          <div className="flex  items-center">
            <Link href="/">
              <img
                src="/logo/logo.png"
                width={38}
                height={38}
                className="object-contain"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <MenuList />
          </div>

          <div>
            <SocialLinks />
          </div>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#F7F2EE] z-50 transition-transform duration-1000 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center text-center p-4 border-b-[1px] border-secondary">
          <div className="flex  items-center">
            <Link href="/">
              <img
                src="/logo/logo.png"
                width={38}
                height={38}
                className="object-contain"
                alt="Logo"
              />
            </Link>
          </div>
          <div>
            <SocialLinks />
          </div>
          <button
            className="text-black"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FiX size={24} className="text-secondary" />
          </button>
        </div>
        <div className="py-5">
          <MobileMenuList />
        </div>
      </div>
    </header>
  );
};

export default Header;
