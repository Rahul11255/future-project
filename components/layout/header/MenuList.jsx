"use client";

import { Icons } from "@/constants/Icons";
import React, { useState } from "react";
import { HeaderLinks } from "@/constants/Links";

const MenuList = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // For submenus

  const handleHover = (index) => {
    setActiveMenu(index);
  };

  const handleLeave = () => {
    setActiveMenu(null);
    setActiveSubMenu(null); // Close submenu on leave
  };

  const handleSubHover = (index) => {
    setActiveSubMenu(index);
  };

  const handleSubLeave = () => {
    setActiveSubMenu(null);
  };

  return (
    <div onMouseLeave={handleLeave} className="">
      <ul className="flex justify-center items-center text-center gap-2 xl:gap-5 ">
        {HeaderLinks.MENU_LINKS.map((v, i) => (
          <li
            key={i}
            className=" text-[13px]  xl:text-[14px]   text-nowrap hover:text-primary transition-all ease-out duration-300  flex gap-1 items-center"
            onMouseEnter={() => handleHover(i)}
          >
           <span className=" cursor-pointer py-5"> {v.name} </span>
            {v?.childrens && (
              <span>
                {activeMenu === i ? (
                  <Icons.ARROW_UP />
                ) : (
                  <Icons.ARROW_DOWN />
                )}
              </span>
            )}

            {/* Mega Dropdown Menu */}
            {v?.childrens && activeMenu === i && (
                <>
               
              <div
                className="absolute  left-0 top-full w-full lg:px-[15%] 2xl:px-[21.3%] flex justify-between z-50     bg-white shadow-custom-light overflow-hidden transition-all ease-out duration-1000"
                style={{
                  maxHeight: activeMenu === i ? "400px" : "0",
                  opacity: activeMenu === i ? "1" : "0",
                }}
              >
               <div className=" absolute flex  left-0 justify-center items-center text-center    w-full top-0">
                 <span className="text-maroon font-meow lg:text-[25px] xl:text-[28px]"> {v?.name} </span> 
                </div>
             <ul className="flex flex-col flex-wrap items-left py-10  ">
                {v.childrens.map((child, idx) => (
                <li
                    key={idx}
                    className="py-1 flex flex-wrap w-full gap-1 pr-10 items-center text-black  relative" 
                    onMouseEnter={() => handleSubHover(idx)}
                    onMouseLeave={handleSubLeave}
                >
                   <p className=" flex gap-1 items-center text-center cursor-pointer hover:text-orange">   {child.name}
                    {child?.childrens && <Icons.ARROW_RIGHT />}
                    </p>
                    {child?.childrens && activeSubMenu === idx && (
                    <ul className="absolute max-h-[200px] w-full flex flex-col flex-wrap  left-full top-0">
                        {child.childrens.map((innerChild, innerIdx) => (
                        <li
                            key={innerIdx}
                            className="py-1 hover:text-success cursor-pointer text-gray-700 px-4 text-left text-[13px]"
                        >
                            {innerChild.name}
                        </li>
                        ))}
                    </ul>
                    )}
                </li>
                ))}
                </ul> 
              
              </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;




