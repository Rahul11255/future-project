"use client";

import { Icons } from "@/constants/Icons";
import React from "react";

const MenuList = ({ menuLinks, activeMenu, onHover, onLeave }) => {
  return (
    <div className="">
      <ul className="flex justify-center items-center text-center gap-5 px-8 rounded-[150px]">
        {menuLinks.map((v, i) => (
          <li
            key={i}
            className="text-[14px] py-4 text-nowrap hover:text-primary transition-all ease-out duration-300 cursor-pointer flex gap-1 items-center"
            onMouseEnter={() => onHover(i)} // Set active on hover
            onMouseLeave={onLeave} // Reset when leaving
          >
            {v.name}
            {v?.childrens && (
              <span>
                {activeMenu === i ? (
                  <Icons.ARROW_UP /> // Change icon on hover
                ) : (
                  <Icons.ARROW_DOWN /> // Default icon
                )}
              </span>
            )}

            {/* Mega Dropdown Menu */}
            {v?.childrens && activeMenu === i && (
              <div
                className="absolute left-0 top-full w-full bg-white shadow-custom-light overflow-hidden transition-all ease-out duration-500 max-h-0 opacity-0"
                style={{
                  maxHeight: activeMenu === i ? "500px" : "0",
                  opacity: activeMenu === i ? "1" : "0",
                }}
              >
                <ul className="flex flex-col items-center p-4">
                  {v.childrens.map((child, idx) => (
                    <li key={idx} className="py-2">{child.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
