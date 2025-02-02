"use client"

import React from "react";
import image from "@/public/discover/detail-delhi.jpg";
import Container from "@/components/custom/Container";
import Typography from "@/components/custom/Typography";
import DiscoverDetailSlider from "@/components/reUseComp/Discover_Detail_Slider";

function DiscoverLayout({data}) {
  // const stateData = [
  //   {
  //     title: "Delhi",
  //     key:"delhi",
  //     description: "Discover Delhi: A Timeless City",
  //     image: image,
  //     message:
  //       "Experience the vibrant soul of India in Delhi, a city that resonates with history and pulsates with life.",
  //     para1:
  //       "Delhi, the capital of India, is a city that pulsates with life, a vibrant tapestry woven from threads of ancient history, diverse cultures, and modern aspirations. From the majestic Mughal monuments that whisper tales of bygone eras to the bustling markets that showcase the city's contemporary spirit, Delhi offers an experience that is both captivating and unforgettable. It's a place where the past and present coexist, creating a unique and dynamic atmosphere.",

  //     para2:
  //       "Delhi's story is etched into its very landscape, with each monument, each street, and each corner echoing the voices of emperors, poets, and revolutionaries. This sprawling metropolis is not just a city; it's a living museum, a testament to India's rich heritage and its unwavering spirit. Whether you're a history buff, a foodie, a shopaholic, or simply someone seeking an adventure, Delhi has something to offer everyone.",
  //     slideData: [
  //       {
  //         heading1: "Explore Places",
  //         Slide: [
  //           {
  //             image: image,
  //             title: "Red Fort (Lal Qila)",
  //             description: "Location: Old Delhi",
  //             para: `<p>A magnificent Mughal fort built by Shah Jahan, it stands as a powerful symbol of India's rich history and architectural prowess. The intricate designs, the sprawling courtyards, and the imposing ramparts transport you back in time to the era of Mughal emperors.</p>
  //             <div class="flex flex-col gap-1 mt-2">
  //             <p><strong>Diwan-i-Am:</strong> The Hall of Public Audience, where the emperor would meet with his subjects.</p>
  //             <p><strong>Diwan-i-Khas:</strong> The Hall of Private Audience, where the emperor would receive important dignitaries.</p>
  //             <p><strong>Moti Masjid:</strong> The Pearl Mosque, a beautiful white marble mosque.</p>
  //             <p class="text-center mt-4 text-xl font-medium">The Red Fort was the site of India's independence declaration in 1947.</p>
  //             </div>`,
  //             buttonText: "Explore Red Fort",
  //             buttonlink: "/red-fort",
  //           },
  //           {
  //             image: image,
  //             title: "Qutub Minar",
  //             description: "Location: Mehrauli",
  //             para: `<p>A soaring minaret, a UNESCO World Heritage Site, that stands as a testament to the architectural brilliance of the Delhi Sultanate. Its towering height and intricate carvings make it a truly awe-inspiring sight.</p>
  //              <div class="flex flex-col gap-1 mt-2">
  //                      <p><strong>Qutub Minar:</strong> The tallest minaret in India, with five distinct stories.</p>
  //                      <p><strong>Quwwat-ul-Islam Mosque:</strong> One of the earliest mosques in India, built in the 12th century.</p>
  //                      <p><strong>Iron Pillar:</strong> A rust-resistant iron pillar that has stood for over 1,600 years.</p>
  //                      <p class="text-center mt-4 text-xl font-medium"> The Qutub Minar complex is home to the tomb of Qutub-ud-din Aibak, the founder of the Delhi Sultanate.</p></div>`,
  //             buttonText: "Explore Qutub Minar",
  //             buttonlink: "/qutub-minar",
  //           },
  //           {
  //             image: image,
  //             title: "Humayun's Tomb",
  //             description: "Location: Nizamuddin East",
  //             para: `<p>A precursor to the Taj Mahal, this magnificent tomb is a stunning example of Mughal architecture. Its serene gardens and majestic structure offer a glimpse into the grandeur of the Mughal era.</p>
  //              <div class="flex flex-col gap-1 mt-2">
  //                      <p><strong>Charbagh Garden:</strong> A beautiful Mughal garden with four quadrants.</p>
  //                      <p><strong>Humayun's Tomb:</strong> The main mausoleum, with its impressive dome and intricate carvings.</p>
  //                      <p><strong>Other tombs:</strong> The tomb complex also houses the tombs of other Mughal royals.</p>
  //                      <p class="text-center mt-4 text-xl font-medium">Humayun's Tomb was the first garden tomb built in India, and it inspired the design of the Taj Mahal.</p></div>`,
  //             buttonText: "Explore Humayun's Tomb",
  //             buttonlink: "/humayuns-tomb",
  //           },
  //           {
  //             image: image,
  //             title: "Akshardham Temple",
  //             description: "Location: Noida Mor",
  //             para: `<p>A modern marvel, this sprawling temple complex showcases traditional Indian architecture and culture. Its intricate carvings, stunning gardens, and captivating exhibitions make it a must-visit.</p>
  //              <div class="flex flex-col gap-1 mt-2">
  //                      <p><strong>Mandir:</strong> The main temple, dedicated to Swaminarayan.</p>
  //                      <p><strong>Harshad Chaitanya Hall:</strong> A multimedia show that depicts the life and teachings of Swaminarayan.</p>
  //                      <p><strong>Nilkanth Sarovar:</strong> A beautiful lake surrounded by gardens.</p>
  //                      <p class="text-center mt-4 text-xl font-medium">The Akshardham Temple is the largest Hindu temple in the world.</p></div>`,
  //             buttonText: "Explore Akshardham Temple",
  //             buttonlink: "/akshardham-temple",
  //           },
  //           {
  //             image: image,
  //             title: "Jama Masjid",
  //             description: "Location: Old Delhi",
  //             para: `<p>One of India's largest mosques, Jama Masjid is a magnificent example of Mughal architecture. Its vast courtyard and imposing structure can accommodate thousands of worshippers.</p>
  //                       <div class="flex flex-col gap-1 mt-2">
  //             <p><strong>Main prayer hall:</strong> A vast hall with three domes and two minarets.</p>
  //                      <p><strong>Courtyard:</strong> A large courtyard that can accommodate thousands of people.</p>
  //                      <p><strong>Gates:</strong> The mosque has three gates, each with its own unique design.</p>
  //                      <p class="text-center mt-4 text-xl font-medium">Jama Masjid is the largest mosque in India.</p>
  //                      </div>`,
  //             buttonText: "Explore Jama Masjid",
  //             buttonlink: "/jama-masjid",
  //           },
  //         ],
  //       },
  //       {
  //         heading1: "Delhi History",
  //         Slide: [
  //           {
  //             image: image,
  //             title: "Ancient Delhi",
  //             description: "Location: Ruins of Indraprastha or Purana Qila",
  //             para: `<p>Delhi's story begins in antiquity, with legends of Indraprastha, the capital of the Pandavas in the Mahabharata. Archaeological evidence suggests settlements dating back to the Indus Valley Civilization. The city has been a witness to the rise and fall of empires, each leaving its imprint on Delhi's soul.</p>`,
  //             buttonText: "Explore Ancient Delhi",
  //             buttonlink: "/ancient-delhi",
  //           },
  //           {
  //             image: image,
  //             title: "Delhi Sultanate",
  //             description: "Location: Qutub Minar and surrounding structures",
  //             para: `<p>The Delhi Sultanate, a series of Muslim dynasties, ruled from the 13th to the 16th centuries. This era saw the construction of iconic structures like the Qutub Minar and the beginning of a unique Indo-Islamic architectural style. The Sultanate period laid the foundation for Delhi's future as a major power center.</p>`,
  //             buttonText: "Explore Delhi Sultanate",
  //             buttonlink: "/delhi-sultanate",
  //           },
  //           {
  //             image: image,
  //             title: "Mughal Empire",
  //             description: "Location: Red Fort or Humayun's Tomb",
  //             para: `<p>The Mughals, who succeeded the Delhi Sultanate, transformed Delhi into a magnificent capital. From Shah Jahan's majestic Red Fort to the serene beauty of Humayun's Tomb, their architectural contributions are a testament to their grandeur. The Mughal era is considered a golden age in Delhi's history.</p>`,
  //             buttonText: "Explore Mughal Empire",
  //             buttonlink: "/mughal-empire",
  //           },
  //           {
  //             image: image,
  //             title: "British Raj & Modern India",
  //             description: "Location: India Gate or Parliament House",
  //             para: `<p>The British Raj made Delhi the capital of British India in 1911. This period saw the construction of New Delhi, a planned city with grand avenues and impressive colonial architecture. After India's independence in 1947, Delhi became the capital of independent India, continuing its legacy as a center of power and culture.</p>`,
  //             buttonText: "Explore British Raj & Modern India",
  //             buttonlink: "/british-raj-modern-india",
  //           },
  //         ],
  //       },
  //       {
  //         heading1: "Delhi Geography",
  //         Slide: [
  //           {
  //             image: image,
  //             title: "Location and Topography",
  //             description:
  //               "Location: Map of Delhi highlighting its location and surrounding areas",
  //             para: `<p>Delhi is situated in northern India, on the banks of the Yamuna River. Its geography is characterized by the fertile Indo-Gangetic plains, which have supported agriculture and settlement for millennia. The Aravalli Range's presence adds a slight variation to the topography.</p>`,
  //             buttonText: "Explore Location and Topography",
  //             buttonlink: "/location-topography",
  //           },
  //           {
  //             image: image,
  //             title: "Climate",
  //             description:
  //               "Location: A collage depicting Delhi's weather in different seasons – summer, monsoon, winter",
  //             para: `<p>Delhi experiences an extreme continental climate, with hot, dry summers and cold winters. The monsoon season brings relief from the heat, but also contributes to humidity. Understanding Delhi's climate is essential to appreciating its environment and its people's adaptations.</p>`,
  //             buttonText: "Explore Climate",
  //             buttonlink: "/climate",
  //           },
  //           {
  //             image: image,
  //             title: "Yamuna River",
  //             description:
  //               "Location: A scenic view of the Yamuna River flowing through Delhi",
  //             para: `<p>The Yamuna River, a major tributary of the Ganges, plays a vital role in Delhi's ecosystem. While facing challenges of pollution, the river remains an important source of water and a significant part of Delhi's landscape.</p>`,
  //             buttonText: "Explore Yamuna River",
  //             buttonlink: "/yamuna-river",
  //           },
  //           {
  //             image: image,
  //             title: "Flora and Fauna",
  //             description:
  //               "Location: Pictures of some common birds, trees, and animals found in Delhi",
  //             para: `<p>Despite being a bustling metropolis, Delhi has pockets of greenery that support a variety of flora and fauna. From the diverse birdlife in its parks and gardens to the presence of the occasional nilgai, Delhi's natural side offers a contrast to its urban environment.</p>`,
  //             buttonText: "Explore Flora and Fauna",
  //             buttonlink: "/flora-fauna",
  //           },
  //         ],
  //       },
  //       {
  //         heading1: "Delhi Tradition & Culture",
  //         Slide: [
  //           {
  //             image: image,
  //             title: "Cultural Fusion",
  //             description:
  //               "Location: A collage showcasing diverse religious places, festivals, and people of Delhi",
  //             para: `<p>Delhi's culture is a vibrant tapestry woven from the threads of various religions, languages, and communities. This multiculturalism is reflected in the city's festivals, cuisine, and artistic expressions. Delhi is a true melting pot of traditions.</p>`,
  //             buttonText: "Explore Cultural Fusion",
  //             buttonlink: "/cultural-fusion",
  //           },
  //           {
  //             image: image,
  //             title: "Festivals and Celebrations",
  //             description:
  //               "Location: Pictures of Diwali celebrations, Holi celebrations, Eid celebrations, and other important festivals of Delhi",
  //             para: `<p>Delhi's calendar is punctuated by a kaleidoscope of festivals. From Diwali, the festival of lights, to Eid, Holi, and numerous other religious and cultural celebrations, the city comes alive with color, music, and dance.</p>`,
  //             buttonText: "Explore Festivals and Celebrations",
  //             buttonlink: "/festivals-celebrations",
  //           },
  //           {
  //             image: image,
  //             title: "Arts and Crafts",
  //             description:
  //               "Location: Pictures of Delhi's handicrafts like pottery, textiles, jewelry, etc.",
  //             para: `<p>Delhi has a rich tradition of arts and crafts. From intricate pottery and handwoven textiles to exquisite jewelry and traditional paintings, the city's artisans continue to preserve and promote these art forms.</p>`,
  //             buttonText: "Explore Arts and Crafts",
  //             buttonlink: "/arts-crafts",
  //           },
  //           {
  //             image: image,
  //             title: "Cuisine",
  //             description:
  //               "Location: A collage of popular Delhi dishes like Chole Bhature, Butter Chicken, Biryani, etc.",
  //             para: `<p>Delhi's culinary scene is as diverse as its culture. From street food delights like chole bhature and gol gappe to Mughlai delicacies like biryani and butter chicken, the city offers a gastronomic journey that tantalizes the taste buds.</p>`,
  //             buttonText: "Explore Cuisine",
  //             buttonlink: "/cuisine",
  //           },
  //         ],
  //       },
  //       {
  //         heading1: "Delhi Politics",
  //         Slide: [
  //           {
  //             image: image,
  //             title: "Government Structure",
  //             description: "Location: Image of the Delhi Legislative Assembly",
  //             para: `<p>Delhi is a Union Territory with a unique political structure. It has a Legislative Assembly and a Chief Minister, but also falls under the purview of the Central Government. This dual governance system often shapes the political landscape.</p>`,
  //             buttonText: "Explore Government Structure",
  //             buttonlink: "/government-structure",
  //           },
  //           {
  //             image: image,
  //             title: "Political Parties",
  //             description:
  //               "Location: Logos of major political parties active in Delhi",
  //             para: `<p>Delhi's political arena is contested by various national and regional parties. Understanding the dynamics between these parties is crucial to understanding the city's political climate.</p>`,
  //             buttonText: "Explore Political Parties",
  //             buttonlink: "/political-parties",
  //           },
  //           {
  //             image: image,
  //             title: "Role as National Capital",
  //             description:
  //               "Location: Image of the Parliament House or other important government buildings",
  //             para: `<p>As India's capital, Delhi plays a crucial role in national politics. It is home to the Parliament, the Supreme Court, and other important government institutions. Delhi's political decisions often have national implications.</p>`,
  //             buttonText: "Explore Role as National Capital",
  //             buttonlink: "/national-capital",
  //           },
  //           {
  //             image: image,
  //             title: "Current Political Issues",
  //             description:
  //               "Location: Images related to current issues being discussed in Delhi politics, if any",
  //             para: `<p>Delhi's political discourse is often lively and passionate, reflecting its status as the nation's capital and its diverse population. Current political issues in Delhi often range from local concerns to broader national debates.</p>`,
  //             buttonText: "Explore Current Political Issues",
  //             buttonlink: "/current-political-issues",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
console.log(data,"Data")
  return (
    <Container>
      {/* {stateData &&
        stateData.map((data, index) => ( */}
          <div className="flex flex-col  items-center w-full">
            <div className="flex justify-center w-full h-[100vh]">
              <img
                src={data?.image}
                alt={data?.title}
                className=" w-full h-[250px] md:h-full object-cover absolute"
              />
            </div>
            <div className=" md:max-w-[85%] max-w-[95%] sm:max-w-[90%] flex flex-col justify-center items-center overflow-hidden lg:-translate-y-[6.5%] 
            md:-translate-y-[8%] -translate-y-[12%]
             transform bg-white md:px-10 lg:px-16 px-2 xl:px-20 h-full">
              <h1 className=" text-maroon epic-ride lg:text-[40px] text-[35px] xl:text-[45px] mt-2 md:mt-5">
                {" "}
                {data?.title}{" "}
              </h1>

              <Typography variant="h2" className="uppercase text-center">
                {data?.description}
              </Typography>

              <Typography
                variant="p"
                className="text-justify mt-2 md:mt-5 first-letter:text-[65px] sm:first-letter:text-[80px] first-letter:text-primary first-letter:font-serif first-letter:float-left first-letter:leading-[0.8] first-letter:mr-3 first-letter:uppercase"
              >
                {data?.para1}
              </Typography>
              <Typography variant="p" className="text-justify mt-2 ">
                {data?.para2}
              </Typography>

              {/* Slider  */}
              <DiscoverDetailSlider slideData={data?.slideData} />
            </div>
          </div>
        {/* ))} */}
    </Container>
  );
}

export default DiscoverLayout;
