"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";  // Import Next.js Image component

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Lantern Sleeve Button Front Slim Fit Red Shirt",
      originalPrice: "Rs. 998.00",
      salePrice: "Rs. 499.00",
      images: [
        "https://littleboxindia.com/cdn/shop/files/557_1_460x.jpg?v=1728902718",
        "https://via.placeholder.com/300x400?text=Red+Shirt+2",
      ],
    },
    {
      id: 2,
      name: "Double Breasted Sleeveless Vest and Pleated Skirt Set (White)",
      originalPrice: "Rs. 1,498.00",
      salePrice: "Rs. 999.00",
      images: [
        "https://littleboxindia.com/cdn/shop/files/367c477d4d62e1cb56412edeb6fe887b_360x.jpg?v=1718453316",
        "https://via.placeholder.com/300x400?text=White+Vest+2",
      ],
    },
    {
      id: 3,
      name: "Double Breasted Sleeveless Vest and Pleated Skirt Set (Brown)",
      originalPrice: "Rs. 1,498.00",
      salePrice: "Rs. 999.00",
      images: [
        "https://littleboxindia.com/cdn/shop/products/37befaedf9b508e3813a96d91f32758c_460x.jpg?v=1692779728",
        "https://via.placeholder.com/300x400?text=Brown+Vest+2",
      ],
    },
    {
      id: 4,
      name: "Leopard Print Sexy Asymmetrical Neck Bodycon Mini Dress",
      originalPrice: "Rs. 1,398.00",
      salePrice: "Rs. 899.00",
      images: [
        "https://littleboxindia.com/cdn/shop/files/557_1_460x.jpg?v=1728902718",
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl m-auto font-bold">BEST SELLERS</h1>
        <Link href="collection/best-sellers" className="text-red-500 text-sm font-semibold">
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
                <Image
                  src={product.images[currentImage[index]]}
                  alt={product.name}
                  width={300}  // Specify width for the image
                  height={400} // Specify height for the image
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
              <span className="absolute bottom-2 left-2 bg-white text-green-500 text-sm font-semibold px-3 py-2 ">
                Instant Shipping
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

export default BestSellers;
