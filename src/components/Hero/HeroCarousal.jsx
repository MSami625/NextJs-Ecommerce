"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HeroCarousel = () => {
  const heroImages = [
    {
      src: "https://cdn.shopify.com/s/files/1/0604/6957/5837/files/NEW_10_BANNER_windows_1_62acc1af-ee93-4e15-8ad2-d9f71da7c0f0.jpg?v=1729151791",
      link: "/collection/new-arrivals",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0604/6957/5837/files/curvy3.jpg?v=1724658578",
      link: "/collection/curvy",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0604/6957/5837/files/emily_website_banner3.jpg?v=1727244587",
      link: "/collection/emily",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages]);

  const variants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 },
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    // Prevent page jump on link click
    // Optionally add custom behavior for link navigation here
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "75vh" }}>
      <AnimatePresence>
        {heroImages.map((image, i) =>
          i === index ? (
            <Link href={image.link} key={i} onClick={handleLinkClick}>
              <motion.div
                className="absolute inset-0 bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url(${image.src})` }}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 1.2,
                }}
              />
            </Link>
          ) : null
        )}
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75 z-10"
      >
        &larr;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75 z-10"
      >
        &rarr;
      </button>
    </div>
  );
};

export default HeroCarousel;
