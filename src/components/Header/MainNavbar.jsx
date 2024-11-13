"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  {
    name: "Pick A Mood",
    subLinks: [
      "Feeling Cozy", "Feeling Free", "Feeling Cute", "Feeling Edgy", 
      "Feeling Sexy", "Feeling Minimalist", "Feeling Elegant", "Feeling K-Pop"
    ],
    images: [
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200"
    ]
  },
  { 
    name: "Men's New" ,
    subLinks: [
      "New Arrivals", "Clothing", "Footwear", "Plus-Curve", "New Arrivals", "Shop by Videos", "Next Day Dispatch", "Influencer Program", "Exchanges", "Track Your Order"
    ],
    images: [
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200"
    ]
  },
  { 
    name: "Clothing",
    subLinks: [
      "Feeling Cute", "Feeling Edgy", 
       "Feeling Elegant", "Feeling K-Pop"
    ]
  },
  { 
    name: "Footwear",
    subLinks: [
      "Feeling Cozy", "Feeling Free", "Feeling Cute", "Feeling Edgy", 
      "Feeling Sexy", "Feeling Minimalist", "Feeling Elegant", "Feeling K-Pop"
    ]
  },
  {
    name: "Plus-Curve",
    subLinks: ["Get the Celeb look", "Green Runway"]
  },
  { 
    name: "New Arrivals" ,
    subLinks: [
     "Shop by Videos", "Next Day Dispatch", "Influencer Program", "Exchanges", "Track Your Order"
    ]
  },
  { 
    name: "Shop by Videos",
    subLinks: [
      "Feeling Cozy", "Feeling Free", "Feeling Cute", "Feeling Edgy", 
      "Feeling Sexy", "Feeling Minimalist", "Feeling Elegant", "Feeling K-Pop"
    ]
  },
  { 
    name: "Next Day Dispatch" ,
    subLinks: [
      "Feeling Cozy", "Feeling Free", "Feeling Cute", "Feeling Edgy", 
     "Feeling Elegant", "Feeling K-Pop"
    ]
  },
  { name: "Influencer Program" },
  { name: "Exchanges" },
  { name: "Track Your Order" }
];

const MainNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const formatLinkName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="bg-[#333333] text-white relative">
      <div 
      onMouseLeave={() => setHoveredIndex(null)}
       className="justify-center gap-10 md: py-4 w-full flex-wrap hidden md:flex lg:flex">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={link.images ? "" : "relative"}
            onMouseEnter={() => setHoveredIndex(index)}
           
          >
            <div className="flex items-center text-sm">
              {link.name === "Influencer Program" ||
              link.name === "Exchanges" ||
              link.name === "Track Your Order" ? (
                <Link href={`/${formatLinkName(link.name)}`}>
                  <button className="hover:text-gray-300">
                    {link.name}
                  </button>
                </Link>
              ) : (
                <button className="hover:text-gray-300 text-sm">
                  {link.name}
                </button>
              )}
            </div>

            {link.subLinks && hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 bg-[#333333] shadow-lg z-10 flex"
              >
                <ul className="p-4 space-y-2">
                  {link.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex} className="text-sm hover:text-gray-400 cursor-pointer">
                      <a href={`/collection/${formatLinkName(subLink)}`}>
                        {subLink}
                      </a>
                    </li>
                  ))}
                </ul>

                {link.images && link.images.length > 0 ? (
                  <div className="w-[100vw] flex space-x-2 p-4">
                    {link.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="flex-1 h-full bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${image})` }}
                      >
                        <span className="sr-only">Ad {imgIndex + 1}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-[100px] flex space-x-2 p-4 -mt-3" />
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden">
      </div>
    </div>
  );
};

export default MainNavbar;
