"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";


export default function ProductPage() {
  const { name: productName } = useParams();



  const product = {
    name: productName ,
    price: 999,
    originalPrice: 1499,
    discount: 33,
    images: ["https://littleboxindia.com/cdn/shop/products/219865c4b9a4283b97ee857eb9fdc730_720x.jpg?v=1682507952", "https://littleboxindia.com/cdn/shop/products/c582b626cf77d8464d83f10cb06dc17e_360x.jpg?v=1682507952", "https://littleboxindia.com/cdn/shop/files/TR1149_01b0c5c5-6913-4b0b-831f-99ece1a71ae3_360x.jpg?v=1682508147/images/dress3.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    vendor: "Good Tribe Private Ltd",
  };

  // State to manage selected size and quantity
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const cartData = {
      productName: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
    };

    // Simulate sending data to the backend
    console.log("Sending to backend:", cartData);
    alert("Product added to cart!");
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Images */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="border">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="border cursor-pointer hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side - Details */}
        <motion.div
          className="space-y-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="text-xl">
            <span className="text-red-600 font-bold">₹{product.price}</span>
            <span className="line-through text-gray-500 ml-2">
              ₹{product.originalPrice}
            </span>
            <span className="ml-2 text-green-600">
              ({product.discount}% off)
            </span>
          </div>
          <p className="text-gray-600 text-sm">Inclusive of all taxes</p>

          {/* Size Selector */}
          <div className="space-y-2">
            <p className="font-semibold">Size:</p>
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size ? "bg-black text-white" : "hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && (
              <p className="text-sm text-green-600">
                Selected size: <span className="font-semibold">{selectedSize}</span>
              </p>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-2 border bg-gray-100"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-2 border bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Add to Cart and Buy Now */}
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-md hover:opacity-90"
            >
              Add to Cart
            </button>
            <button className="w-full border py-3 rounded-md hover:bg-gray-100">
              Buy It Now
            </button>
          </div>

          <p className="text-sm text-gray-600">
            Sold by: <span className="font-semibold">{product.vendor}</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
