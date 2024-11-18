"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const NewForYou = () => {
  const products = [
    {
      id: 1,
      name: "Lantern Sleeve Button Front Slim Fit Red Shirt",
      originalPrice: "Rs. 998.00",
      salePrice: "Rs. 499.00",
      images: [
        "https://littleboxindia.com/cdn/shop/files/bb524dca251f7d526ed975fa4e6bc970_460x.jpg?v=1731666356",
        "https://via.placeholder.com/300x400?text=Red+Shirt+2",
      ],
    },
    {
      id: 2,
      name: "Double Breasted Sleeveless Vest and Pleated Skirt Set (White)",
      originalPrice: "Rs. 1,498.00",
      salePrice: "Rs. 999.00",
      images: [
        "https://littleboxindia.com/cdn/shop/files/e30371f3a8e502f25f7e28081d1b2635_460x.jpg?v=1731665617",
        "https://via.placeholder.com/300x400?text=White+Vest+2",
      ],
    },
    {
      id: 3,
      name: "Double Breasted Sleeveless Vest and Pleated Skirt Set (Brown)",
      originalPrice: "Rs. 1,498.00",
      salePrice: "Rs. 999.00",
      images: [
        "https://littleboxindia.com/cdn/shop/files/fc35eac68c3da90a9cc0332905493d4e_460x.jpg?v=1731664461",
        "https://via.placeholder.com/300x400?text=Brown+Vest+2",
      ],
    },
    {
      id: 4,
      name: "Leopard Print Sexy Asymmetrical Neck Bodycon Mini Dress",
      originalPrice: "Rs. 1,398.00",
      salePrice: "Rs. 899.00",
      images: [
        "https://littleboxindia.com/cdn/shop/files/cdee262f3a2f7075c996bd6d49f15b3d_460x.jpg?v=1731665253",
        "https://via.placeholder.com/300x400?text=Leopard+Dress+2",
      ],
    },
  ];

  const [currentImage, setCurrentImage] = useState(
    products.map(() => 0) 
  );

  const handleNextImage = (productIndex) => {
    setCurrentImage((prev) =>
      prev.map((imgIndex, index) =>
        index === productIndex
          ? (imgIndex + 1) % products[productIndex].images.length
          : imgIndex
      )
    );
  };

  const handlePrevImage = (productIndex) => {
    setCurrentImage((prev) =>
      prev.map((imgIndex, index) =>
        index === productIndex
          ? (imgIndex - 1 + products[productIndex].images.length) %
            products[productIndex].images.length
          : imgIndex
      )
    );
  };

  return (
    <div className="container mx-auto py-8 ">
        <hr />
      <div className="flex justify-between items-center  mb-6">
        <h1 className="text-2xl m-auto font-bold">NEW FOR YOU</h1>
        <Link href="collection/new-arrivals" className="text-red-500 text-sm font-semibold">
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-gray-50 rounded-md shadow-lg overflow-hidden border"
          >
            <div className="relative group">
              <motion.div
                key={currentImage[index]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-64 overflow-hidden"
              >
                <img
                  src={product.images[currentImage[index]]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="bg-black/50 text-white rounded-full p-1"
                  onClick={() => handlePrevImage(index)}
                >
                  &#8249;
                </button>
                <button
                  className="bg-black/50 text-white rounded-full p-1"
                  onClick={() => handleNextImage(index)}
                >
                  &#8250;
                </button>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 ">
                New in
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
              <p className="text-gray-500 text-xs line-through">
                {product.originalPrice}
              </p>
              <p className="text-red-500 text-sm font-bold">{product.salePrice}</p>
              </div>
              <button className="w-full mt-4 bg-black text-white text-sm py-2 rounded-md">
                 BUY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewForYou;
