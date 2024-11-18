"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const moods = [
  {
    title: "Feeling Edgy",
    imgSrc:
      "https://littleboxindia.com/cdn/shop/files/SAVE_20240518_204714_720x.jpg?v=1716045563",
  },
  {
    title: "Feeling Elegant",
    imgSrc:
      "https://littleboxindia.com/cdn/shop/files/Pick_5_900x.jpg?v=1709371060",
  },
  {
    title: "Feeling Cute",
    imgSrc:
      "https://littleboxindia.com/cdn/shop/files/Untitled-1_300x.jpg?v=1727263091",
  },
  {
    title: "Feeling Sexy",
    imgSrc:
      "https://littleboxindia.com/cdn/shop/files/Pick_5_900x.jpg?v=1709371060",
  },
  {
    title: "All",
    imgSrc:
      "https://littleboxindia.com/cdn/shop/files/Untitled-1_300x.jpg?v=1727263091",
  },
];

const PickAMood = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % moods.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + moods.length) % moods.length
    );
  };

  const variants = {
    enter: { opacity: 0, x: "100%" },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="w-full my-8 px-4">
      <hr />
      <h2 className="text-center text-2xl font-semibold mb-6">Pick a Mood</h2>

      {/* Mobile View: Motion Carousel */}
      <div className="block lg:hidden">
        <div className="relative w-full h-[40vh] overflow-hidden">
          <AnimatePresence initial={false}>
            <Link
              href={`/collection/${moods[currentIndex].title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              <motion.div
                key={moods[currentIndex].title}
                className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url(${moods[currentIndex].imgSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{
                  type: "tween",
                  stiffness: 20,
                  damping: 20,
                  duration: 0.4,
                }}
              >
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  {moods[currentIndex].title}
                </div>
              </motion.div>
            </Link>
          </AnimatePresence>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full z-10 text-2xl"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full z-10 text-2xl"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Desktop View: Mood Thumbnails */}
      <div className="hidden lg:flex justify-evenly gap-2">
        {moods.map((mood, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full max-w-[220px] cursor-pointer"
          >
            <Link
              href={`/collection/${mood.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              <div className="relative w-full h-[270px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={mood.imgSrc}
                  alt={mood.title}
                  width={220}
                  height={270}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium">
                {mood.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickAMood;
