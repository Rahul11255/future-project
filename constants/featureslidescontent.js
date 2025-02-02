export const states = [
  {
    name: "Delhi",
    heading: "Explore the Vibrance of Delhi",
    subheading: "A City of History, Culture, and Modern Life",
    description:
      "Delhi, the capital city of India, is known for its rich culture, history, and vibrant atmosphere. From ancient monuments like the Red Fort to the bustling streets of Connaught Place, Delhi offers an unforgettable experience for travelers and residents alike.",
    img: "/home/pexels-maddyfreddie-5447442.jpg",
    imgTitle: " Humayun’s Tomb",
    url: "/delhi",
  },
  {
    name: "Maharashtra",
    heading: "The Heart of Western India",
    subheading: "Diverse Landscapes and Thriving Cities",
    description:
      "Maharashtra, home to the bustling city of Mumbai, is a state of contrasts. From the beaches of Goa to the hills of Lonavala, Maharashtra combines modernity with tradition. The state is famous for its thriving film industry, architecture, and rich cultural heritage.",
    img: "/home/pexels-xharsh-6071476.jpg",
    imgTitle: "The Taj Mahal Palace, Mumbai",
    url: "/maharastra",
  },

  {
    name: "Tamil Nadu",
    heading: "The Land of Temples and Beaches",
    subheading: "Spirituality Meets Serenity by the Sea",
    description:
      "Tamil Nadu is famous for its iconic temples, stunning beaches, and vibrant festivals. Chennai, the capital, is known for its cultural heritage, while the hill stations of Ooty and Kodaikanal provide a peaceful retreat.",
    img: "/home/pexels-prakashq2-774282.jpg",
    imgTitle: "Meenakshi Temple",
    url: "/tamil-nadu",
  },
  {
    name: "Uttar Pradesh",
    heading: "The Heart of Indian History",
    subheading: "Timeless Monuments and Ancient Cities",
    description:
      "Uttar Pradesh is home to the Taj Mahal, one of the Seven Wonders of the World. The state also boasts ancient cities like Varanasi, the oldest living city in the world, and Agra, a major cultural and historical hub.",
    img: "/home/pexels-artosuraj-28749616.jpg",
    imgTitle: "Taj Mahal",
    url: "/uttar-pradesh",
  },
  {
    name: "West Bengal",
    heading: "The Cultural Capital of India",
    subheading: "Rich Heritage, Art, and Literature",
    description:
      "West Bengal is known for its rich cultural heritage, with Kolkata being a hub for art, literature, and festivals. The state is famous for its beautiful landscapes, including the Sundarbans, and historical sites like Howrah Bridge.",
    img: "/home/pexels-harsh-14916663.jpg",
    imgTitle: "Darjeeling ",
    url: "/west-bengal",
  },
  {
    name: "Kerala",
    heading: "God's Own Country",
    subheading: "Beaches, Backwaters, and Hill Stations",
    description:
      "Kerala is renowned for its pristine beaches, serene backwaters, and lush hill stations. It offers a blend of nature, culture, and tranquility, making it a top tourist destination. Kochi and Trivandrum are key cultural and historical cities in Kerala.",
    img: "/home/pexels-mohit-khare-3592184-28700142.jpg",
    imgTitle: "Vembanad Lake",
    url: "/kerala",
  },
  {
    name: "Rajasthan",
    heading: "Land of Royalty and Heritage",
    subheading: "Palaces, Deserts, and Forts",
    description:
      "Rajasthan is famous for its regal heritage, including majestic forts, palaces, and the Thar Desert. Cities like Jaipur, Udaipur, and Jodhpur offer a glimpse into India's royal past with stunning architecture and rich traditions.",
    img: "/home/pexels-sbsoneji-3581369.jpg",
    imgTitle: "Hawa Mahal",
    url: "/rajasthan",
  },
  {
    name: "Goa",
    heading: "Sun, Sand, and Sea",
    subheading: "The Party Capital of India",
    description:
      "Goa is known for its stunning beaches, vibrant nightlife, and laid-back atmosphere. It’s a hotspot for both relaxation and adventure, with its Portuguese-influenced culture, picturesque landscapes, and lively festivals.",
    img: "/home/pexels-vladimirsrajber-27651175.jpg",
    imgTitle: "Beautiful beach",
    url: "/goa",
  },
  {
    name: "Himachal Pradesh",
    heading: "The Himalayan Retreat",
    subheading: "Snow-capped Peaks and Serene Valleys",
    description:
      "Himachal Pradesh is famous for its scenic beauty, including snow-capped mountains, hill stations like Shimla and Manali, and spiritual retreats. It offers a perfect mix of adventure, spirituality, and natural beauty.",
    img: "/home/pexels-uwc12-5217739.jpg",
    imgTitle: "Mountains",
    url: "/himachal-pradesh",
  },
];


export const stateData = [
      {
        title: "Delhi",
        key:"delhi",
        description: "Discover Delhi: A Timeless City",
        image: "/discover/detail-delhi.jpg",
        message:
          "Experience the vibrant soul of India in Delhi, a city that resonates with history and pulsates with life.",
        para1:
          "Delhi, the capital of India, is a city that pulsates with life, a vibrant tapestry woven from threads of ancient history, diverse cultures, and modern aspirations. From the majestic Mughal monuments that whisper tales of bygone eras to the bustling markets that showcase the city's contemporary spirit, Delhi offers an experience that is both captivating and unforgettable. It's a place where the past and present coexist, creating a unique and dynamic atmosphere.",
  
        para2:
          "Delhi's story is etched into its very landscape, with each monument, each street, and each corner echoing the voices of emperors, poets, and revolutionaries. This sprawling metropolis is not just a city; it's a living museum, a testament to India's rich heritage and its unwavering spirit. Whether you're a history buff, a foodie, a shopaholic, or simply someone seeking an adventure, Delhi has something to offer everyone.",
        slideData: [
          {
            heading1: "Explore Places",
            Slide: [
              {
                image: "/discover/detail-delhi.jpg",
                title: "Red Fort (Lal Qila)",
                description: "Location: Old Delhi",
                para: `<p>A magnificent Mughal fort built by Shah Jahan, it stands as a powerful symbol of India's rich history and architectural prowess. The intricate designs, the sprawling courtyards, and the imposing ramparts transport you back in time to the era of Mughal emperors.</p>
                <div class="flex flex-col gap-1 mt-2">
                <p><strong>Diwan-i-Am:</strong> The Hall of Public Audience, where the emperor would meet with his subjects.</p>
                <p><strong>Diwan-i-Khas:</strong> The Hall of Private Audience, where the emperor would receive important dignitaries.</p>
                <p><strong>Moti Masjid:</strong> The Pearl Mosque, a beautiful white marble mosque.</p>
                <p class="text-center mt-4 text-xl font-medium">The Red Fort was the site of India's independence declaration in 1947.</p>
                </div>`,
                buttonText: "Explore Red Fort",
                buttonlink: "/red-fort",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Qutub Minar",
                description: "Location: Mehrauli",
                para: `<p>A soaring minaret, a UNESCO World Heritage Site, that stands as a testament to the architectural brilliance of the Delhi Sultanate. Its towering height and intricate carvings make it a truly awe-inspiring sight.</p>
                 <div class="flex flex-col gap-1 mt-2">
                         <p><strong>Qutub Minar:</strong> The tallest minaret in India, with five distinct stories.</p>
                         <p><strong>Quwwat-ul-Islam Mosque:</strong> One of the earliest mosques in India, built in the 12th century.</p>
                         <p><strong>Iron Pillar:</strong> A rust-resistant iron pillar that has stood for over 1,600 years.</p>
                         <p class="text-center mt-4 text-xl font-medium"> The Qutub Minar complex is home to the tomb of Qutub-ud-din Aibak, the founder of the Delhi Sultanate.</p></div>`,
                buttonText: "Explore Qutub Minar",
                buttonlink: "/qutub-minar",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Humayun's Tomb",
                description: "Location: Nizamuddin East",
                para: `<p>A precursor to the Taj Mahal, this magnificent tomb is a stunning example of Mughal architecture. Its serene gardens and majestic structure offer a glimpse into the grandeur of the Mughal era.</p>
                 <div class="flex flex-col gap-1 mt-2">
                         <p><strong>Charbagh Garden:</strong> A beautiful Mughal garden with four quadrants.</p>
                         <p><strong>Humayun's Tomb:</strong> The main mausoleum, with its impressive dome and intricate carvings.</p>
                         <p><strong>Other tombs:</strong> The tomb complex also houses the tombs of other Mughal royals.</p>
                         <p class="text-center mt-4 text-xl font-medium">Humayun's Tomb was the first garden tomb built in India, and it inspired the design of the Taj Mahal.</p></div>`,
                buttonText: "Explore Humayun's Tomb",
                buttonlink: "/humayuns-tomb",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Akshardham Temple",
                description: "Location: Noida Mor",
                para: `<p>A modern marvel, this sprawling temple complex showcases traditional Indian architecture and culture. Its intricate carvings, stunning gardens, and captivating exhibitions make it a must-visit.</p>
                 <div class="flex flex-col gap-1 mt-2">
                         <p><strong>Mandir:</strong> The main temple, dedicated to Swaminarayan.</p>
                         <p><strong>Harshad Chaitanya Hall:</strong> A multimedia show that depicts the life and teachings of Swaminarayan.</p>
                         <p><strong>Nilkanth Sarovar:</strong> A beautiful lake surrounded by gardens.</p>
                         <p class="text-center mt-4 text-xl font-medium">The Akshardham Temple is the largest Hindu temple in the world.</p></div>`,
                buttonText: "Explore Akshardham Temple",
                buttonlink: "/akshardham-temple",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Jama Masjid",
                description: "Location: Old Delhi",
                para: `<p>One of India's largest mosques, Jama Masjid is a magnificent example of Mughal architecture. Its vast courtyard and imposing structure can accommodate thousands of worshippers.</p>
                          <div class="flex flex-col gap-1 mt-2">
                <p><strong>Main prayer hall:</strong> A vast hall with three domes and two minarets.</p>
                         <p><strong>Courtyard:</strong> A large courtyard that can accommodate thousands of people.</p>
                         <p><strong>Gates:</strong> The mosque has three gates, each with its own unique design.</p>
                         <p class="text-center mt-4 text-xl font-medium">Jama Masjid is the largest mosque in India.</p>
                         </div>`,
                buttonText: "Explore Jama Masjid",
                buttonlink: "/jama-masjid",
              },
            ],
          },
          {
            heading1: "Delhi History",
            Slide: [
              {
                image: "/discover/detail-delhi.jpg",
                title: "Ancient Delhi",
                description: "Location: Ruins of Indraprastha or Purana Qila",
                para: `<p>Delhi's story begins in antiquity, with legends of Indraprastha, the capital of the Pandavas in the Mahabharata. Archaeological evidence suggests settlements dating back to the Indus Valley Civilization. The city has been a witness to the rise and fall of empires, each leaving its imprint on Delhi's soul.</p>`,
                buttonText: "Explore Ancient Delhi",
                buttonlink: "/ancient-delhi",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Delhi Sultanate",
                description: "Location: Qutub Minar and surrounding structures",
                para: `<p>The Delhi Sultanate, a series of Muslim dynasties, ruled from the 13th to the 16th centuries. This era saw the construction of iconic structures like the Qutub Minar and the beginning of a unique Indo-Islamic architectural style. The Sultanate period laid the foundation for Delhi's future as a major power center.</p>`,
                buttonText: "Explore Delhi Sultanate",
                buttonlink: "/delhi-sultanate",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Mughal Empire",
                description: "Location: Red Fort or Humayun's Tomb",
                para: `<p>The Mughals, who succeeded the Delhi Sultanate, transformed Delhi into a magnificent capital. From Shah Jahan's majestic Red Fort to the serene beauty of Humayun's Tomb, their architectural contributions are a testament to their grandeur. The Mughal era is considered a golden age in Delhi's history.</p>`,
                buttonText: "Explore Mughal Empire",
                buttonlink: "/mughal-empire",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "British Raj & Modern India",
                description: "Location: India Gate or Parliament House",
                para: `<p>The British Raj made Delhi the capital of British India in 1911. This period saw the construction of New Delhi, a planned city with grand avenues and impressive colonial architecture. After India's independence in 1947, Delhi became the capital of independent India, continuing its legacy as a center of power and culture.</p>`,
                buttonText: "Explore British Raj & Modern India",
                buttonlink: "/british-raj-modern-india",
              },
            ],
          },
          {
            heading1: "Delhi Geography",
            Slide: [
              {
                image: "/discover/detail-delhi.jpg",
                title: "Location and Topography",
                description:
                  "Location: Map of Delhi highlighting its location and surrounding areas",
                para: `<p>Delhi is situated in northern India, on the banks of the Yamuna River. Its geography is characterized by the fertile Indo-Gangetic plains, which have supported agriculture and settlement for millennia. The Aravalli Range's presence adds a slight variation to the topography.</p>`,
                buttonText: "Explore Location and Topography",
                buttonlink: "/location-topography",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Climate",
                description:
                  "Location: A collage depicting Delhi's weather in different seasons – summer, monsoon, winter",
                para: `<p>Delhi experiences an extreme continental climate, with hot, dry summers and cold winters. The monsoon season brings relief from the heat, but also contributes to humidity. Understanding Delhi's climate is essential to appreciating its environment and its people's adaptations.</p>`,
                buttonText: "Explore Climate",
                buttonlink: "/climate",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Yamuna River",
                description:
                  "Location: A scenic view of the Yamuna River flowing through Delhi",
                para: `<p>The Yamuna River, a major tributary of the Ganges, plays a vital role in Delhi's ecosystem. While facing challenges of pollution, the river remains an important source of water and a significant part of Delhi's landscape.</p>`,
                buttonText: "Explore Yamuna River",
                buttonlink: "/yamuna-river",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Flora and Fauna",
                description:
                  "Location: Pictures of some common birds, trees, and animals found in Delhi",
                para: `<p>Despite being a bustling metropolis, Delhi has pockets of greenery that support a variety of flora and fauna. From the diverse birdlife in its parks and gardens to the presence of the occasional nilgai, Delhi's natural side offers a contrast to its urban environment.</p>`,
                buttonText: "Explore Flora and Fauna",
                buttonlink: "/flora-fauna",
              },
            ],
          },
          {
            heading1: "Delhi Tradition & Culture",
            Slide: [
              {
                image: "/discover/detail-delhi.jpg",
                title: "Cultural Fusion",
                description:
                  "Location: A collage showcasing diverse religious places, festivals, and people of Delhi",
                para: `<p>Delhi's culture is a vibrant tapestry woven from the threads of various religions, languages, and communities. This multiculturalism is reflected in the city's festivals, cuisine, and artistic expressions. Delhi is a true melting pot of traditions.</p>`,
                buttonText: "Explore Cultural Fusion",
                buttonlink: "/cultural-fusion",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Festivals and Celebrations",
                description:
                  "Location: Pictures of Diwali celebrations, Holi celebrations, Eid celebrations, and other important festivals of Delhi",
                para: `<p>Delhi's calendar is punctuated by a kaleidoscope of festivals. From Diwali, the festival of lights, to Eid, Holi, and numerous other religious and cultural celebrations, the city comes alive with color, music, and dance.</p>`,
                buttonText: "Explore Festivals and Celebrations",
                buttonlink: "/festivals-celebrations",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Arts and Crafts",
                description:
                  "Location: Pictures of Delhi's handicrafts like pottery, textiles, jewelry, etc.",
                para: `<p>Delhi has a rich tradition of arts and crafts. From intricate pottery and handwoven textiles to exquisite jewelry and traditional paintings, the city's artisans continue to preserve and promote these art forms.</p>`,
                buttonText: "Explore Arts and Crafts",
                buttonlink: "/arts-crafts",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Cuisine",
                description:
                  "Location: A collage of popular Delhi dishes like Chole Bhature, Butter Chicken, Biryani, etc.",
                para: `<p>Delhi's culinary scene is as diverse as its culture. From street food delights like chole bhature and gol gappe to Mughlai delicacies like biryani and butter chicken, the city offers a gastronomic journey that tantalizes the taste buds.</p>`,
                buttonText: "Explore Cuisine",
                buttonlink: "/cuisine",
              },
            ],
          },
          {
            heading1: "Delhi Politics",
            Slide: [
              {
                image: "/discover/detail-delhi.jpg",
                title: "Government Structure",
                description: "Location: Image of the Delhi Legislative Assembly",
                para: `<p>Delhi is a Union Territory with a unique political structure. It has a Legislative Assembly and a Chief Minister, but also falls under the purview of the Central Government. This dual governance system often shapes the political landscape.</p>`,
                buttonText: "Explore Government Structure",
                buttonlink: "/government-structure",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Political Parties",
                description:
                  "Location: Logos of major political parties active in Delhi",
                para: `<p>Delhi's political arena is contested by various national and regional parties. Understanding the dynamics between these parties is crucial to understanding the city's political climate.</p>`,
                buttonText: "Explore Political Parties",
                buttonlink: "/political-parties",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Role as National Capital",
                description:
                  "Location: Image of the Parliament House or other important government buildings",
                para: `<p>As India's capital, Delhi plays a crucial role in national politics. It is home to the Parliament, the Supreme Court, and other important government institutions. Delhi's political decisions often have national implications.</p>`,
                buttonText: "Explore Role as National Capital",
                buttonlink: "/national-capital",
              },
              {
                image: "/discover/detail-delhi.jpg",
                title: "Current Political Issues",
                description:
                  "Location: Images related to current issues being discussed in Delhi politics, if any",
                para: `<p>Delhi's political discourse is often lively and passionate, reflecting its status as the nation's capital and its diverse population. Current political issues in Delhi often range from local concerns to broader national debates.</p>`,
                buttonText: "Explore Current Political Issues",
                buttonlink: "/current-political-issues",
              },
            ],
          },
        ],
      },
      {
        "title": "Maharashtra",
        "key": "maharastra",
        "description": "Discover Maharashtra: The Land of Diversity and Dynamism",
        "image": "/discover/detail-delhi.jpg",
        "message": "Experience the grandeur of Maharashtra, a state that blends rich history, vibrant culture, and modern aspirations.",
        "para1": "Maharashtra, the land of Marathas, is a state that embodies the spirit of India. From the bustling metropolis of Mumbai, the financial capital of India, to the serene landscapes of the Western Ghats, Maharashtra offers a unique blend of tradition and modernity. It is a state that has witnessed the rise and fall of empires, the birth of revolutionary ideas, and the growth of a dynamic economy.",
        "para2": "Maharashtra's story is etched in its ancient caves, majestic forts, and vibrant festivals. It is a state that celebrates diversity, with its people speaking multiple languages, practicing various religions, and contributing to a rich cultural tapestry. Whether you're exploring the historical landmarks, indulging in the local cuisine, or experiencing the vibrant festivals, Maharashtra promises an unforgettable journey.",
        "slideData": [
          {
            "heading1": "Explore Places",
            "Slide": [
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Gateway of India",
                "description": "Location: Mumbai",
                "para": `<p>The Gateway of India is one of Mumbai's most iconic landmarks. Built during the British era, it stands as a symbol of the city's historical significance and architectural grandeur. The monument overlooks the Arabian Sea and is a popular spot for tourists and locals alike.</p>
                <div class="flex flex-col gap-1 mt-2">
                <p><strong>Architecture:</strong> A blend of Hindu and Muslim architectural styles.</p>
                <p><strong>History:</strong> Built to commemorate the visit of King George V and Queen Mary in 1911.</p>
                <p><strong>Nearby Attractions:</strong> Taj Mahal Palace Hotel, Elephanta Caves.</p>
                <p class="text-center mt-4 text-xl font-medium">The Gateway of India was the departure point for the last British troops in 1948.</p>
                </div>`,
                "buttonText": "Explore Gateway of India",
                "buttonlink": "/gateway-of-india"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Ajanta and Ellora Caves",
                "description": "Location: Aurangabad",
                "para": `<p>The Ajanta and Ellora Caves are UNESCO World Heritage Sites, renowned for their ancient rock-cut architecture and stunning Buddhist, Hindu, and Jain sculptures. These caves are a testament to India's rich cultural and religious heritage.</p>
                <div class="flex flex-col gap-1 mt-2">
                <p><strong>Ajanta Caves:</strong> Known for their exquisite Buddhist paintings and sculptures.</p>
                <p><strong>Ellora Caves:</strong> Famous for the Kailasa Temple, a monolithic structure carved out of a single rock.</p>
                <p><strong>History:</strong> Dating back to the 2nd century BCE, these caves showcase the evolution of Indian art and architecture.</p>
                <p class="text-center mt-4 text-xl font-medium">The Kailasa Temple at Ellora is one of the largest monolithic structures in the world.</p>
                </div>`,
                "buttonText": "Explore Ajanta and Ellora Caves",
                "buttonlink": "/ajanta-ellora-caves"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Shaniwar Wada",
                "description": "Location: Pune",
                "para": `<p>Shaniwar Wada is a historic fortification in Pune, built by the Peshwas of the Maratha Empire. It served as the seat of the Peshwa rulers and is a symbol of Maratha power and grandeur.</p>
                <div class="flex flex-col gap-1 mt-2">
                <p><strong>Architecture:</strong> A blend of Mughal and Maratha architectural styles.</p>
                <p><strong>History:</strong> Built in 1732, it was the center of Indian politics in the 18th century.</p>
                <p><strong>Attractions:</strong> The fort's massive gates, intricate fountains, and the legendary stories of its haunted past.</p>
                <p class="text-center mt-4 text-xl font-medium">Shaniwar Wada was the scene of the infamous Narayanrao Peshwa murder in 1773.</p>
                </div>`,
                "buttonText": "Explore Shaniwar Wada",
                "buttonlink": "/shaniwar-wada"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Siddhivinayak Temple",
                "description": "Location: Mumbai",
                "para": `<p>The Siddhivinayak Temple is one of the most revered Hindu temples in Maharashtra, dedicated to Lord Ganesha. It attracts millions of devotees every year and is a symbol of faith and devotion.</p>
                <div class="flex flex-col gap-1 mt-2">
                <p><strong>Architecture:</strong> A blend of traditional and modern architectural styles.</p>
                <p><strong>History:</strong> Built in 1801, it has been a center of worship for over two centuries.</p>
                <p><strong>Significance:</strong> Known for fulfilling the wishes of its devotees.</p>
                <p class="text-center mt-4 text-xl font-medium">The temple is one of the richest in India, with donations from devotees worldwide.</p>
                </div>`,
                "buttonText": "Explore Siddhivinayak Temple",
                "buttonlink": "/siddhivinayak-temple"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Lonavala and Khandala",
                "description": "Location: Pune District",
                "para": `<p>Lonavala and Khandala are twin hill stations nestled in the Sahyadri ranges, known for their scenic beauty, lush greenery, and pleasant climate. They are popular weekend getaways for Mumbaikars and Puneites alike.</p>
                <div class="flex flex-col gap-1 mt-2">
                <p><strong>Attractions:</strong> Bhushi Dam, Tiger's Leap, Rajmachi Point, and Karla Caves.</p>
                <p><strong>Activities:</strong> Trekking, camping, and enjoying the monsoon scenery.</p>
                <p><strong>Cuisine:</strong> Famous for chikki (a sweet snack) and vada pav.</p>
                <p class="text-center mt-4 text-xl font-medium">Lonavala is often referred to as the 'Chocolate Capital of India' due to its numerous chocolate factories.</p>
                </div>`,
                "buttonText": "Explore Lonavala and Khandala",
                "buttonlink": "/lonavala-khandala"
              }
            ]
          },
          {
            "heading1": "Maharashtra History",
            "Slide": [
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Ancient Maharashtra",
                "description": "Location: Ajanta and Ellora Caves",
                "para": `<p>Maharashtra's history dates back to ancient times, with evidence of human settlements from the Stone Age. The region was part of the Maurya and Satavahana empires, and its caves and temples reflect its rich cultural heritage.</p>`,
                "buttonText": "Explore Ancient Maharashtra",
                "buttonlink": "/ancient-maharashtra"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Maratha Empire",
                "description": "Location: Raigad Fort",
                "para": `<p>The Maratha Empire, founded by Chhatrapati Shivaji Maharaj, was one of the most powerful empires in Indian history. It played a crucial role in shaping the political landscape of India and resisting foreign invasions.</p>`,
                "buttonText": "Explore Maratha Empire",
                "buttonlink": "/maratha-empire"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "British Rule",
                "description": "Location: Mumbai",
                "para": `<p>During British rule, Maharashtra became a center of the Indian independence movement. Leaders like Bal Gangadhar Tilak and Dr. B.R. Ambedkar emerged from this region, contributing significantly to the fight for freedom and social reform.</p>`,
                "buttonText": "Explore British Rule",
                "buttonlink": "/british-rule"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Post-Independence Era",
                "description": "Location: Mumbai",
                "para": `<p>After India's independence in 1947, Maharashtra became a separate state in 1960. It has since grown into one of India's most economically developed states, with Mumbai as its financial and cultural hub.</p>`,
                "buttonText": "Explore Post-Independence Era",
                "buttonlink": "/post-independence-era"
              }
            ]
          },
          {
            "heading1": "Maharashtra Geography",
            "Slide": [
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Western Ghats",
                "description": "Location: Sahyadri Range",
                "para": `<p>The Western Ghats, a UNESCO World Heritage Site, run parallel to Maharashtra's western coast. They are known for their biodiversity, lush forests, and numerous hill stations like Mahabaleshwar and Matheran.</p>`,
                "buttonText": "Explore Western Ghats",
                "buttonlink": "/western-ghats"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Deccan Plateau",
                "description": "Location: Central Maharashtra",
                "para": `<p>The Deccan Plateau covers a large part of Maharashtra and is characterized by its volcanic soil, which is ideal for agriculture. It is home to cities like Pune and Nagpur.</p>`,
                "buttonText": "Explore Deccan Plateau",
                "buttonlink": "/deccan-plateau"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Konkan Coast",
                "description": "Location: Western Maharashtra",
                "para": `<p>The Konkan Coast stretches along Maharashtra's western shoreline, offering stunning beaches, lush greenery, and a unique coastal culture. It is a popular tourist destination.</p>`,
                "buttonText": "Explore Konkan Coast",
                "buttonlink": "/konkan-coast"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Rivers",
                "description": "Location: Godavari, Krishna, and Tapi Rivers",
                "para": `<p>Maharashtra is home to several major rivers, including the Godavari, Krishna, and Tapi. These rivers play a vital role in the state's agriculture and economy.</p>`,
                "buttonText": "Explore Rivers",
                "buttonlink": "/rivers"
              }
            ]
          },
          {
            "heading1": "Maharashtra Tradition & Culture",
            "Slide": [
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Festivals",
                "description": "Location: Ganesh Chaturthi Celebrations",
                "para": `<p>Maharashtra is known for its vibrant festivals, with Ganesh Chaturthi being the most prominent. The state also celebrates festivals like Diwali, Holi, and Navratri with great enthusiasm.</p>`,
                "buttonText": "Explore Festivals",
                "buttonlink": "/festivals"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Cuisine",
                "description": "Location: Popular Dishes like Vada Pav, Pav Bhaji, and Puran Poli",
                "para": `<p>Maharashtrian cuisine is a delightful blend of flavors, with dishes like vada pav, pav bhaji, and puran poli being iconic. The cuisine varies from region to region, offering a diverse culinary experience.</p>`,
                "buttonText": "Explore Cuisine",
                "buttonlink": "/cuisine"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Arts and Crafts",
                "description": "Location: Warli Paintings and Paithani Sarees",
                "para": `<p>Maharashtra is known for its traditional arts and crafts, including Warli paintings and Paithani sarees. These art forms reflect the state's rich cultural heritage.</p>`,
                "buttonText": "Explore Arts and Crafts",
                "buttonlink": "/arts-and-crafts"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Music and Dance",
                "description": "Location: Lavani and Powada Performances",
                "para": `<p>Maharashtra has a rich tradition of music and dance, with Lavani and Powada being popular folk forms. These performances are an integral part of the state's cultural identity.</p>`,
                "buttonText": "Explore Music and Dance",
                "buttonlink": "/music-and-dance"
              }
            ]
          },
          {
            "heading1": "Maharashtra Politics",
            "Slide": [
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Government Structure",
                "description": "Location: Maharashtra Legislative Assembly",
                "para": `<p>Maharashtra has a bicameral legislature, with the Vidhan Sabha (Legislative Assembly) and the Vidhan Parishad (Legislative Council). The state is governed by a Chief Minister and a Council of Ministers.</p>`,
                "buttonText": "Explore Government Structure",
                "buttonlink": "/government-structure"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Political Parties",
                "description": "Location: Major Political Parties in Maharashtra",
                "para": `<p>Maharashtra's political landscape is dominated by parties like the Shiv Sena, BJP, NCP, and Congress. The state has a history of coalition governments and dynamic political alliances.</p>`,
                "buttonText": "Explore Political Parties",
                "buttonlink": "/political-parties"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Economic Hub",
                "description": "Location: Mumbai",
                "para": `<p>As India's financial capital, Mumbai plays a crucial role in Maharashtra's economy. The state is a leader in industries like finance, entertainment, and information technology.</p>`,
                "buttonText": "Explore Economic Hub",
                "buttonlink": "/economic-hub"
              },
              {
                "image": "/discover/detail-delhi.jpg",
                "title": "Current Political Issues",
                "description": "Location: Maharashtra Politics",
                "para": `<p>Maharashtra's politics is often marked by debates over issues like farmer welfare, infrastructure development, and regional identity. The state's political climate is dynamic and influential.</p>`,
                "buttonText": "Explore Current Political Issues",
                "buttonlink": "/current-political-issues"
              }
            ]
          }
        ]
      }
]