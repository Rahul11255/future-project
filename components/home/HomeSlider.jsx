"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Mousewheel} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icons } from "@/constants/Icons";
import Image from "next/image";

const HomeSlider = () => {
  const swiperRef = useRef(null); 

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev(); 
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext(); 
  };

  const bannerImage = [
    "/banner/b-1 (5).jpg",
    "/banner/b-1 (2).jpg",
    "/banner/b-1 (6).jpg",
    "/banner/b-1 (4).jpg",
    "/banner/b-1 (5).jpg",
    "/banner/b-1 (6).jpg",
  ]


  return (
    <div className=" relative px-3 md:px-5">
    <div className=" bg-white h-[250px] sm:h-full xl:h-[630px] ">
      <button
        className="absolute top-1/2 left-1 md:left-4 z-10 transform -translate-y-1/2 bg-white text  text-black  hover:text-primary transition-colors duration-300 ease-in-out px-3 md:px-4 py-2 "
        onClick={handlePrev}
        
      >
        <Icons.PREV className="    text-[15px] md:text-[22px] "/>
      </button>
      <button
        className="absolute top-1/2 right-1 md:right-4 z-10 transform -translate-y-1/2 bg-white text-black hover:text-primary transition-colors duration-300 ease-in-out px-3 md:px-4 py-2"
        onClick={handleNext}
      >
        <Icons.NEXT className="   text-[15px] md:text-[22px] "/>

      </button>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        modules={[Mousewheel,Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        // mousewheel={true}
        className="mySwiper h-full"
      >
       {bannerImage?.map((v,i)=>{
        console.log("imgae")
        return (
            <SwiperSlide className="w-full h-full bg-success" key={i}>
                <Image src={v} width={2000} alt={i} height={2000} className="  w-full h-full" style={{objectPosition:" top center"}}/>
            </SwiperSlide>

        )
       })}
       
      </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
 