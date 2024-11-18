"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Categories = [
  { name: "New In", image: "https://littleboxindia.com/cdn/shop/files/Best_sellers_gif.gif?v=1709623355" },
  { name: "Dresses", image: "https://littleboxindia.com/cdn/shop/files/Untitled-1_1.jpg?v=170957295" },
  { name: "Hoodies", image: "https://littleboxindia.com/cdn/shop/files/2_3_00a795ae-dfef-422f-b792-62a918c2805f.jpg?v=1709572955" },
  { name: "Best Sellers", image: "https://littleboxindia.com/cdn/shop/files/Untitled-1_1.jpg?v=170957295" },
  { name: "Sets", image: "https://littleboxindia.com/cdn/shop/files/Untitled-1_1.jpg?v=170957295" },
  { name: "Tops", image: "https://littleboxindia.com/cdn/shop/files/3_1_20f4b29e-e8e5-49c4-91f1-ec39f2209c20.jpg?v=1709572954" },
  { name: "Trousers", image: "https://littleboxindia.com/cdn/shop/files/Untitled-1_1.jpg?v=170957295" },
];

const RoundedCategories = () => {
  return (
    <div className="bg-white border-t border-b border-gray-200 md:hidden">
      <motion.div
        className="flex py-4 px-6 space-x-4"
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {Categories.map((category, index) => (
          <Link
            key={index}
            href={`/collection/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-medium mt-2 text-center">{category.name}</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default RoundedCategories;
