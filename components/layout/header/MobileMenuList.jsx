import React, { useState } from "react";
import { HeaderLinks } from "@/constants/Links";
import { Icons } from "@/constants/Icons"; 

const MobileMenuList = () => {
  const [activeMenus, setActiveMenus] = useState({}); 

  const toggleMenu = (key) => {
    setActiveMenus((prev) => ({
      ...prev,
      [key]: !prev[key], 
    }));
  };

  return (
    <div
      className="w-full h-full overflow-y-auto text-black"
      style={{ maxHeight: "calc(100vh - 130px)" }} 
    >
      <ul className="flex flex-col py-1 px-3">
        {HeaderLinks.MENU_LINKS.map((menu, index) => (
          <li key={index} className="flex flex-col">
            <div
              className="flex justify-between items-center py-2 cursor-pointer"
              onClick={() => toggleMenu(index)}
            >
              <span className="font-medium text-[16px]">{menu.name}</span>
              {menu?.childrens && (
                <span>
                  {activeMenus[index] ? (
                    <Icons.ARROW_UP className="text-primary" />
                  ) : (
                    <Icons.ARROW_DOWN className="text-gray-500" />
                  )}
                </span>
              )}
            </div>

            {/* Submenu */}
            {menu?.childrens && activeMenus[index] && (
              <ul className="pl-4 mt-2 border-l border-gray-200">
                {menu.childrens.map((child, childIndex) => {
                  const childKey = `${index}-${childIndex}`; 
                  return (
                    <li key={childIndex} className="flex flex-col">
                      {/* Child menu item */}
                      <div
                        className="flex justify-between items-center py-2 cursor-pointer text-[14px] hover:text-primary transition-all"
                        onClick={() => toggleMenu(childKey)}
                      >
                        <span>{child.name}</span>
                        {child?.childrens && (
                          <span>
                            {activeMenus[childKey] ? (
                              <Icons.ARROW_UP className="text-primary" />
                            ) : (
                              <Icons.ARROW_DOWN className="text-gray-500" />
                            )}
                          </span>
                        )}
                      </div>

                      {/* Nested Submenu */}
                      {child?.childrens && activeMenus[childKey] && (
                        <ul className="pl-4 mt-1 border-l border-gray-200">
                          {child.childrens.map((subChild, subChildIndex) => (
                            <li
                              key={subChildIndex}
                              className="py-2 text-[13px] cursor-pointer hover:text-primary transition-all"
                            >
                              {subChild.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenuList;
