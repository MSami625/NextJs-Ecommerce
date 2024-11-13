"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
import { BsSearch, BsFillPersonFill, BsCart2 } from "react-icons/bs";
import { motion } from "framer-motion";

const TopNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearchModal = () => setIsSearchOpen(true);
  const closeSearchModal = () => setIsSearchOpen(false);

  return (
    <div className="bg-[#333333] text-white">
      <div className="flex items-center justify-between py-3 px-6 border-b border-gray-700">
        <div className="flex space-x-4">
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

      <div className="flex bg-white items-center justify-between py-4 px-6 text-black">
        <div className="text-3xl font-bold">Littlebox</div>
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
  );
};

export default TopNavbar;
