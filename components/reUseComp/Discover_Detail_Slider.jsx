"use client";
import React, { useEffect, useRef, useState } from "react";
import Typography from "../custom/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Icons } from "@/constants/Icons";
// import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

function DiscoverDetailSlider({ slideData }) {
  const [currentSlide, setCurrentSlide] = useState({});
  const [filterFirstSlide, setFilterFirstSlide] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (Array.isArray(slideData)) {
      setFilterFirstSlide(
        slideData.map((v) => v.Slide?.[0]).filter((item) => item !== undefined)
      );
    }
  }, [slideData]);

  const handleMouseEnter = (sectionIndex, slide) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [sectionIndex]: slide,
    }));
  };

  return (
    <>
      {slideData.map((data, index) => (
        <div className="mt-8 w-full" key={index}>
          <Typography variant="h3" className="uppercase mb-5">
            {data.heading1}
          </Typography>

          <div className="w-full relative">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              modules={[Navigation]} // Use Navigation module
              navigation={{
                prevEl: `.swiper-button-prev-${index}`, // Unique class for each prev button
                nextEl: `.swiper-button-next-${index}`, // Unique class for each next button
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="mb-10"
            >
              <button
                className={`swiper-button-prev-${index} absolute top-1/2 left-1 md:left-4 z-10 transform -translate-y-1/2 bg-white text-black hover:text-primary transition-colors duration-300 ease-in-out px-3 md:px-4 py-2`}
              >
                <Icons.PREV className="text-[15px] md:text-[22px]" />
              </button>
              <button
                className={`swiper-button-next-${index} absolute top-1/2 right-1 md:right-4 z-10 transform -translate-y-1/2 bg-white text-black hover:text-primary transition-colors duration-300 ease-in-out px-3 md:px-4 py-2`}
              >
                <Icons.NEXT className="text-[15px] md:text-[22px]" />
              </button>
              {data.Slide.map((v, i) => (
                <SwiperSlide key={i}>
                  <div
                    className=""
                    onMouseEnter={() => handleMouseEnter(index, v)}
                  >
                    {v?.image?.src ? (
                      <img src={v.image.src} alt={v.title} />
                    ) : (
                      <p>No Image Available</p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Show details of the hovered slide OR the first slide if no hover */}
          <div>
            {currentSlide[index] ? (
              <div className="w-full flex flex-col items-center">
                <Typography variant="h3" className="uppercase mb-2">
                  {currentSlide[index].title}
                </Typography>
                <Typography variant="h4" className="uppercase mb-5">
                  {currentSlide[index].description}
                </Typography>
                <Typography variant="p" className=" mb-5">
                  {currentSlide[index].para}
                </Typography>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <Typography variant="h3" className="uppercase mb-2">
                  {filterFirstSlide[index]?.title}
                </Typography>
                <Typography variant="h4" className="uppercase mb-5">
                  {filterFirstSlide[index]?.description}
                </Typography>
                <Typography variant="p" className=" mb-5">
                  {filterFirstSlide[index]?.para}
                </Typography>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default DiscoverDetailSlider;
