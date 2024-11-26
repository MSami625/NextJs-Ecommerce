"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
import { BsSearch, BsFillPersonFill, BsCart2 } from "react-icons/bs";
import { HiOutlineMenuAlt3, HiOutlineX, HiChevronDown } from "react-icons/hi";
import { motion } from "framer-motion";
import RoundedCategories from "./RoundedCategories";

const navLinks = [
  { name: "Pick A Mood", subLinks: ["Feeling Cozy", "Feeling Cute", "Feeling Edgy"] },
  { name: "Men's New", subLinks: ["New Arrivals", "Clothing", "Footwear"] },
  { name: "Clothing", subLinks: ["Feeling Cute", "Feeling Edgy"] },
  { name: "Footwear", subLinks: ["Feeling Cozy", "Feeling Minimalist"] },
  { name: "Plus-Curve", subLinks: ["Get the Celeb Look"] },
  { name: "New Arrivals", subLinks: ["Shop by Videos"] },
];

const TopNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);


  const openSearchModal = () => setIsSearchOpen(true);
  const closeSearchModal = () => setIsSearchOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <>
    <div className="bg-[#333333] text-white relative">
      {/* Top Section */}
      <div className="flex  items-center  lg:justify-between justify-center  md:justify-between py-3 px-6 border-b border-gray-700">
        <div className="hidden md:flex space-x-4">
          <FaFacebookF size={20} />
          <FaInstagram size={20} />
          <FaYoutube size={20} />
          <FaPinterestP size={20} />
          <FaWhatsapp size={20} />
          <FaSnapchatGhost size={20} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold"
        >
          USE PREPAID10 FOR 10% OFF ON ALL PREPAID ORDERS!
        </motion.div>
        <div className="w-[20%]"></div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center justify-between py-4 px-6 text-black bg-white">
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={toggleMenu}>
            <HiOutlineMenuAlt3 size={28} />
          </button>
          <div className="lg:text-3xl text-xl font-bold">Littlebox</div>
        </div>
        <div className="flex space-x-10">
          <Link href="/account" passHref>
            <BsFillPersonFill className="cursor-pointer" size={28} />
          </Link>
          <BsSearch className="cursor-pointer" onClick={openSearchModal} size={28} />
          <Link href="/cart" passHref>
            <BsCart2 className="cursor-pointer" size={28} />
          </Link>
        </div>
      </div>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#333333] z-50 text-white w-[80%] h-full overflow-y-auto"
        >
          <div className="flex items-center justify-between p-6">
            <div className="text-3xl font-bold">Littlebox</div>
            <button onClick={toggleMenu} className="text-white">
              <HiOutlineX size={28} />
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-4">
  {navLinks.map((link, index) => (
    <div key={index}>
      <div className="flex items-center justify-between">
        {/* Main Link */}
        <Link href={`/collection/${link.name.toLowerCase().replace(/\s+/g, "-")}`}>
          <button className="block text-left w-full hover:text-gray-300 text-lg">
            {link.name}
          </button>
        </Link>
        {/* Dropdown Toggle */}
        {link.subLinks && (
          <button
            onClick={() => toggleDropdown(index)}
            className="ml-2 hover:text-gray-300"
          >
            <HiChevronDown size={20} />
          </button>
        )}
      </div>
      {/* Submenu Links */}
      {link.subLinks && openDropdownIndex === index && (
        <ul className="ml-4 space-y-2 mt-2">
          {link.subLinks.map((subLink, subIndex) => (
            <li key={subIndex} className="text-sm hover:text-gray-400">
              <Link href={`/collection/${subLink.toLowerCase().replace(/\s+/g, "-")}`}>
                {subLink}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  ))}
</div>

        </motion.div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white p-6 w-full fixed top-[10px] left-0 z-50"
            style={{
              height: "30vh",
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Search</h2>
              <button
                onClick={closeSearchModal}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full mt-4 p-2 border text-black border-gray-300 rounded"
            />
          </motion.div>
        </div>
      )}
    </div>
      <RoundedCategories />
      </>
  );
};

export default TopNavbar;
