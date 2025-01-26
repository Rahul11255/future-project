import React from "react";
import Container from "../custom/Container";
import Heading from "../reUseComp/Heading";
import Typography from "../custom/Typography";
import Image from "next/image";

const Highlights = () => {
  return (
    <Container className="mt-5 md:mt-10 lg:mt-16">
      <div>
        <Heading
          className=" uppercase"
          p="Discover the vibrant traditions, art forms, and values that make India unique."
        >
          Highlights of Indian Culture
        </Heading>
      </div>
      <div className=" flex justify-center items-center ">
        <div className=" md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <div className="  p-1 grid sm:grid-cols-2 gap-5">
            <div className=" sm:h-[280px] lg:h-[300px] overflow-hidden">
              <Image
                src="/home/highlights/handicarfts.jpg"
                alt="img"
                width={500}
                height={500}
                className="w-full h-full object-fill img-zoom"
              />
            </div>
            <div>
              <div>
                <Typography variant="h4" className="montserrat">
                  Traditional Arts and Crafts
                </Typography>

                <Typography variant="p" className=" text-grey">
                  Explore India’s rich heritage in classical dance forms like
                  Bharatnatyam and Kathak, music styles such as Hindustani and
                  Carnatic, and intricate crafts like Madhubani paintings and
                  Pashmina weaving
                </Typography>
              </div>
              <div className="my-5 flex gap-y-2 gap-2 flex-wrap">
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
              </div>
            </div>
          </div>
          <div className="  p-1 grid sm:grid-cols-2 gap-5 mt-3">
             
            <div className=" order-2 sm:order-1 ">
              <div>
                <Typography variant="h4" className="montserrat ">
                Celebrating India’s Festivals 
                </Typography>

                <Typography variant="p" className=" text-grey">
                Experience the grandeur of festivals like Diwali, Holi, Eid, Christmas, and Navratri that unite communities through joy and tradition.
                </Typography>
              </div>
              <div className="my-5 flex gap-y-2 gap-2 flex-wrap">
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
                <span className=" px-2 py-1 rounded-full text-[13px] lg:text-[15px] bg-primary text-white">
                  Music
                </span>
              </div>
            </div>
            <div className=" order-1 sm:order-2 sm:h-[300px] overflow-hidden">
              <Image
                src="/home/highlights/festivals.jpg"
                alt="img"
                width={500}
                height={500}
                className="w-full h-full object-fill img-zoom"
              />
            </div>
          </div>    
        </div>
      </div>
    </Container>
  );
};

export default Highlights;
