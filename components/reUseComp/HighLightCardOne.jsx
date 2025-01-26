"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Typography from '../custom/Typography'

const tagColors = [
  '#F8B195', 
  '#F67280', 
  '#C06C84', 
  '#6C5B7B', 
  '#355C7D', 
  '#99B898', 
];

const HighLightCardOne = ({data={}}) => {
  const {title, description, image, tags=[]} = data;
  const [appendImage, setAppendImage] = useState(image);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const handleImageChange = (newImage) => {
    setIsImageChanging(true);
    setAppendImage(newImage);
    setTimeout(() => {
      setIsImageChanging(false);
    }, 300); // Timeout to match the fade duration
  };

  return (
    <div className="p-1 grid sm:grid-cols-2 gap-1 sm:gap-5 mt-4">
      <div className="sm:h-[280px] lg:h-[300px] overflow-hidden">
        <div className={`w-full h-[200px] sm:h-full transition-all duration-1000 transform ${isImageChanging ? ' scale-0' : ' scale-100'}`}>
          <Image
            src={appendImage}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-fill img-zoom"
          />
        </div>
      </div>
      <div>
        <div>
          <Typography variant="h4" className="montserrat">
            {title}
          </Typography>

          <Typography variant="p" className="text-grey">
            {description}
          </Typography>
        </div>
        <div className=" my-3 sm:my-5 flex gap-y-2 gap-2 flex-wrap">
          {tags?.map(({ label, image }, index) => (
            <span
              className="px-2 py-1 rounded-full text-[13px] lg:text-[16px] text-white cursor-pointer"
              key={index}
              style={{ backgroundColor: tagColors[index % tagColors.length] }} // Cycle through colors
              onMouseEnter={() => handleImageChange(image)}
              onClick={() => handleImageChange(image)} // Handle image change with fade effect
            >
              {label}
            </span>
          ))}  
        </div>
      </div>
    </div>
  );
}

export default HighLightCardOne;
