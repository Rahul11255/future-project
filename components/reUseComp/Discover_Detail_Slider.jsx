"use client";
import React, { useState } from "react";
import Typography from "../custom/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Icons } from "@/constants/Icons";
import { Navigation } from "swiper/modules";
import { Button } from "../ui/button";
import Container from "../custom/Container";
import Image from "next/image";

function DiscoverDetailSlider({ slideData }) {
  // Use an object to store activeIndex for each slider
  const [activeIndices, setActiveIndices] = useState({});

  // Function to update the active index for a specific slider
  const handleSlideChange = (index, swiper) => {
    setActiveIndices((prev) => ({
      ...prev,
      [index]: swiper.activeIndex,
    }));
  };

  return (
    <>
      {slideData.map((data, index) => {
        // Get the activeIndex for the current slider
        const activeIndex = activeIndices[index] || 0;

        return (
            <div className=" my-3 md:my-5 lg:my-8 w-full" key={index}>
              <Typography variant="h3" className="uppercase mb-5">
                {data.heading1}
              </Typography>

              <div className="w-full relative">
                <Swiper
                  slidesPerView={1.2}
                  spaceBetween={10}
                  modules={[Navigation]}
                  navigation={{
                    prevEl: `.swiper-button-prev-${index}`,
                    nextEl: `.swiper-button-next-${index}`,
                  }}
                  onSlideChange={(swiper) => handleSlideChange(index, swiper)}
                  className=" mb-4 md:mb-5 lg:mb-10"
                >
                  <button
                    className={`swiper-button-prev-${index} absolute top-1/2  md:left-4 z-10 transform -translate-y-1/2 bg-white text-black hover:text-primary transition-colors duration-300 ease-in-out px-3 md:px-4 py-2`}
                  >
                    <Icons.PREV className="text-[15px] md:text-[22px]" />
                  </button>
                  <button
                    className={`swiper-button-next-${index} absolute top-1/2 right-0 md:right-4 z-10 transform -translate-y-1/2 bg-white text-black hover:text-primary transition-colors duration-300 ease-in-out px-3 md:px-4 py-2`}
                  >
                    <Icons.NEXT className="text-[15px] md:text-[22px]" />
                  </button>

                  {data.Slide.map((v, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className="cursor-pointer"
                        onMouseEnter={() =>
                          setActiveIndices((prev) => ({
                            ...prev,
                            [index]: i,
                          }))
                        }
                      >
                        {v?.image ? (
                          <div className=" w-full h-[180px] sm:h-[500px]">
                          <Image src={v.image} width={1000} height={1000} className=" w-full h-full" alt={v.title} />
                          </div>
                        ) : (
                          <p>No Image Available</p>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Show data for the active slide */}
              <div className="w-full flex flex-col items-center">
                <Typography variant="h3" className="uppercase mb-2 epic-ride text-maroon font-medium ">
                  {data.Slide[activeIndex]?.title || "No Title"}
                </Typography>
                <Typography variant="h4" className="uppercase mb-5 text-center items-center">
                  {data.Slide[activeIndex]?.description || "No Description"}
                </Typography>
                <div
                  className="mb-5"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.Slide[activeIndex]?.para || "No Content Available",
                  }}
                />
              </div>

              <div className="w-full justify-center items-center md:justify-end flex px-10">
                <Button className="bg-primary text-white hover:bg-gray-500 mt-5 animate-pulse">
                  {data.Slide[activeIndex]?.buttonText || "Explore More..."}
                  <Icons.NEXT className="text-[15px] md:text-[22px]" />
                </Button>
              </div>
            </div>
        );
      })}
    </>
  );
}

export default DiscoverDetailSlider;
