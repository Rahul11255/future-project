"use client";
import Heading from "@/components/reUseComp/Heading";
import React, { useEffect, useState } from "react";
import image from "@/public/discover/image.png";
import Container from "@/components/custom/Container";
import Typography from "@/components/custom/Typography";
import DiscoverDetailSlider from "@/components/reUseComp/Discover_Detail_Slider";

function DiscoverLayout() {
  const stateData = [
    {
      title: "Delhi",
      description: "Discover Delhi: A Timeless City",
      image: image,
      para1: (
        <div>
          <p>
            Delhi, the capital of India, is a city that pulsates with life, a
            vibrant tapestry woven from threads of ancient history, diverse
            cultures, and modern aspirations. From the majestic Mughal monuments
            that whisper tales of bygone eras to the bustling markets that
            showcase the city's contemporary spirit, Delhi offers an experience
            that is both captivating and unforgettable. It's a place where the
            past and present coexist, creating a unique and dynamic atmosphere.
          </p>
          <p className="mt-2">
            Delhi's story is etched into its very landscape, with each monument,
            each street, and each corner echoing the voices of emperors, poets,
            and revolutionaries. This sprawling metropolis is not just a city;
            it's a living museum, a testament to India's rich heritage and its
            unwavering spirit. Whether you're a history buff, a foodie, a
            shopaholic, or simply someone seeking an adventure, Delhi has
            something to offer everyone.
          </p>
        </div>
      ),

      slideData: [
        {
          heading1: "Explore Places",
          Slide: [
            {
              image: image,
              title: "Red Fort (Lal Qila)",
              description: "Location: Old Delhi",
              para: (
                <div>
                  <p>
                    A magnificent Mughal fort built by Shah Jahan, it stands as
                    a powerful symbol of India's rich history and architectural
                    prowess. The intricate designs, the sprawling courtyards,
                    and the imposing ramparts transport you back in time to the
                    era of Mughal emperors.
                  </p>
                  <div className="mt-2 text-lg">
                    <p>
                      Diwan-i-Am: The Hall of Public Audience, where the emperor
                      would meet with his subjects.
                    </p>
                    <p>
                      Diwan-i-Khas: The Hall of Private Audience, where the
                      emperor would receive important dignitaries.
                    </p>
                    <p>
                      Moti Masjid: The Pearl Mosque, a beautiful white marble
                      mosque.
                    </p>
                    <p>
                      The Red Fort was the site of India's independence
                      declaration in 1947.
                    </p>
                  </div>
                </div>
              ),
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "Qutub Minar",
              description: "sdfsdfsdfsdoilkj",
              para: "sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadfsdhjbvgfh",
              description: "sdfsdfsdfsdbv gxfbcv ",
              para: "sdfsdafasdfsdfsdgvx ewsfdzxc",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadf",
              description: "sdfsdfsdfsd",
              para: "sdfsdafasdfsdfsd",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadf",
              description: "sdfsdfsdfsd",
              para: "sdfsdafasdfsdfsd",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
          ],
        },
        {
          heading1: "Delhi History",
          Slide: [
            {
              image: image,
              title: "Delhi History",
              description: "sdfsdfsdfsdrtrr",
              para: (
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat exercitationem similique distinctio. Sunt nisi
                    voluptas ad dolores praesentium, distinctio quaerat
                    blanditiis optio. Facere natus quam incidunt doloremque,
                    perferendis sunt harum. Debitis aperiam sunt mollitia
                    voluptatibus sint unde vitae sit, est delectus iusto cumque
                    omnis nisi possimus natus sed, earum vero quae. Recusandae
                    deleniti neque perferendis beatae labore placeat, fugit
                    quibusdam.
                  </p>
                  <p className="mt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat exercitationem similique distinctio. Sunt nisi
                    voluptas ad dolores praesentium, distinctio quaerat
                    blanditiis optio. Facere natus quam incidunt doloremque,
                    perferendis sunt harum. Debitis aperiam sunt mollitia
                    voluptatibus sint unde vitae sit, est delectus iusto cumque
                    omnis nisi possimus natus sed, earum vero quae. Recusandae
                    deleniti neque perferendis beatae labore placeat, fugit
                    quibusdam.
                  </p>
                </div>
              ),
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadftrhgwwwd",
              description: "sdfsdfsdfsdoilkj",
              para: "sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadfsdhjbvgfh",
              description: "sdfsdfsdfsdbv gxfbcv ",
              para: "sdfsdafasdfsdfsdgvx ewsfdzxc",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadf",
              description: "sdfsdfsdfsd",
              para: "sdfsdafasdfsdfsd",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadf",
              description: "sdfsdfsdfsd",
              para: "sdfsdafasdfsdfsd",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
          ],
        },
        {
          heading1: "Delhi Geography",
          Slide: [
            {
              image: image,
              title: "sdfdsgsadfjghf",
              description: "sdfsdfsdfsdrtrr",
              para: "sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadftrhgwwwd",
              description: "sdfsdfsdfsdoilkj",
              para: "sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadfsdhjbvgfh",
              description: "sdfsdfsdfsdbv gxfbcv ",
              para: "sdfsdafasdfsdfsdgvx ewsfdzxc",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadf",
              description: "sdfsdfsdfsd",
              para: "sdfsdafasdfsdfsd",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadf",
              description: "sdfsdfsdfsd",
              para: "sdfsdafasdfsdfsd",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
          ],
        },
        {
          heading1: "Delhi Geography",
          Slide: [
            {
              image: image,
              title: "sdfdsgsadfjghf",
              description: "sdfsdfsdfsdrtrr",
              para: "sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadftrhgwwwd",
              description: "sdfsdfsdfsdoilkj",
              para: "sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?sdfsdafasdfsdfsdutyhghghLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi quas nulla ut ex vero voluptatem sit provident incidunt quam, consectetur quisquam possimus. Eligendi autem aliquid, minus esse exercitationem sed.Quas recusandae blanditiis expedita, hic ut maiores corporis. Excepturi, alias consequuntur in minima ipsam tempore quam dolores. Dolor, id. Aliquid labore reiciendis accusamus optio dolor doloremque voluptatem beatae quibusdam cumque?",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadfsdhjbvgfh",
              description: "sdfsdfsdfsdbv gxfbcv ",
              para: "sdfsdafasdfsdfsdgvx ewsfdzxc",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadf",
              description: "sdfsdfsdfsd",
              para: "sdfsdafasdfsdfsd",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
            {
              image: image,
              title: "sdfdsgsadf",
              description: "sdfsdfsdfsd",
              para: "sdfsdafasdfsdfsd",
              buttonText: "dsfsdsdfsd",
              buttonlink: "sdfsdfsdfsadfsfsdfsd",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Container>
      {stateData &&
        stateData.map((data, index) => (
          <div key={index} className="flex flex-col  items-center ">
            <div className="flex justify-center w-full h-[100vh]">
              <img
                src={data?.image.src}
                alt={data?.title}
                className=" w-full h-full object-cover absolute"
              />
            </div>
            <div className=" md:max-w-[85%] max-w-[90%] flex flex-col justify-center items-center overflow-hidden -translate-y-[10%] transform bg-white md:px-20 px-10">
              <h1 className=" epic-ride lg:text-[40px] text-[35px] xl:text-[45px] mt-5">
                {" "}
                {data?.title}{" "}
              </h1>

              <Typography variant="h2" className="uppercase text-center">
                {data?.description}
              </Typography>

              <Typography
                variant="p"
                className="text-justify mt-5 first-letter:text-[80px] first-letter:font-serif first-letter:float-left first-letter:leading-[0.8] first-letter:mr-3 first-letter:uppercase"
              >
                {data?.para1}
              </Typography>

              {/* Slider  */}
              <DiscoverDetailSlider slideData={data.slideData} />
            </div>
          </div>
        ))}
    </Container>
  );
}

export default DiscoverLayout;
