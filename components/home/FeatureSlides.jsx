"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from "../custom/Container";
import Typography from "../custom/Typography";
import { Icons } from "@/constants/Icons";
import Image from "next/image";
import { states } from "@/constants/featureslidescontent";
import Heading from "../reUseComp/Heading";

const FeatureSlides = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <Container className=" py-5 md:py-10 lg:py-16 relative">
     
        <div className=" ">
           <Heading className=" uppercase">
           Discover India's Richness: Culture, Heritage & Beauty
           </Heading>
        </div>
      
      <button
        className="absolute top-1/2 left-1 md:-left-2 z-10 transform -translate-y-1/2 bg-white text  text-black  hover:text-primary transition-colors duration-300 ease-in-out px-3 md:px-4 py-2 "
        onClick={handlePrev}
      >
        <Icons.PREV className="    text-[15px] md:text-[22px] " />
      </button>
      <button
        className="absolute top-1/2 right-1 md:-right-2 z-10 transform -translate-y-1/2 bg-white text-black hover:text-primary transition-colors duration-300 ease-in-out px-3 md:px-4 py-2"
        onClick={handleNext}
      >
        <Icons.NEXT className="   text-[15px] md:text-[22px] " />
      </button>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Mousewheel,Autoplay, Pagination]}

        // mousewheel={true}
        className="mySwiper h-full"
      >
        {states?.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <section className=" xl:h-[550px] grid grid-cols-1 lg:grid-cols-5">
                <div className=" lg:col-span-2 w-full bg-light p-2 sm:p-5 lg:p-10 xl:p-16">
                  <div>
                    <div className="text-center">
                      <Typography
                        variant="p"
                        className=" text-[30px] md:text-[35px] lg:text-[44px] epic-ride text-maroon"
                      >
                        {v.name}
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography variant="h3" className="uppercase">
                        {v.heading}
                      </Typography>
                      <Typography
                        variant="p"
                        className=" text-primary uppercase text-[12px] md:text-[13px] lg:text-[13px] py-2 pt-0"
                      >
                        {v.subheading}
                      </Typography>
                    </div>

                    <div className="text-center">
                      <Typography
                        variant="p"
                        className=" sm:leading-[25px] text-grey text-justify sm:text-center"
                      >
                        {v.description}
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography
                        variant="p"
                        className=" uppercase font-normal tracking-widest mt-5 "
                      >
                        Keep reading . . .
                      </Typography>
                    </div>
                    <div className="text-[25px] mt-5 flex justify-center gap-3">
                      <Icons.FACEBOOK className="text-[#3B5998]" />{" "}
                      <Icons.LINKEDIN className="text-[#0073B0]" />{" "}
                      <Icons.INSTAGRAM className="text-[#FD0DBB]" />
                    </div>
                  </div>
                </div>
                <div className="   lg:col-span-3 relative">
                  <div className=" h-[230px]  sm:h-full w-full overflow-hidden ">
                    <Image
                      src={v.img || "/home/pexels-maddyfreddie-5447442.jpg"}
                      alt="delhi"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover img-zoom"
                    />
                  </div>

                  <div className="absolute top-5 sm:top-10 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <Image
                        src="/text-bg.png"
                        alt="img"
                        width={600}
                        height={600}
                        className="w-full h-full"
                      />
                      <p className="absolute inset-0 flex justify-center items-center text-grey text-xl sm:text-3xl lg:text-5xl epic-ride">
                        {v.imgTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default FeatureSlides;
