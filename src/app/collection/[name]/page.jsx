"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaFilter } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const createProducts = () => {
  return Array.from({ length: 34 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    images: [
      "https://littleboxindia.com/cdn/shop/products/dc3df8c031e81e0a77eaa179d5f2c9b1_300x.jpg?v=1673451805",
      "https://via.placeholder.com/200x200?text=Product+Image+2",
    ],
    price: 1000 + index * 10,
    oldPrice: 1200 + index * 15,
    size: ["XS", "S", "M", "L", "XL"][index % 5],
    type: ["Clothing", "Accessories", "Shoes"][index % 3],
    isSale: index % 5 === 0,
  }));
};

const CollectionPage = () => {
  const pathname = usePathname();
  const name = pathname.split("/").pop();
  const products = createProducts();

  const [filters, setFilters] = useState({
    size: [],
    priceRange: { min: 0, max: 2000 },
    type: "Clothing",
  });

  const [currentImage, setCurrentImage] = useState(products.map(() => 0));
  const [showFilter, setShowFilter] = useState(false);

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

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSize = filters.size.length
      ? filters.size.includes(product.size)
      : true;
    const matchesPrice = product.price <= filters.priceRange.max;
    const matchesType = product.type === filters.type;
    return matchesSize && matchesPrice && matchesType;
  });

  return (
    <div className="relative flex justify-center lg:justify-between">
      {/* Sidebar Filter Section */}
      <div className="hidden md:block w-1/4 bg-white p-6 sticky top-16 h-full overflow-auto shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Filters</h2>

        {/* Size Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600">Size</h3>
          <div className="flex flex-col space-y-3 mt-3">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <label
                key={size}
                className="flex items-center text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFilterChange(
                      "size",
                      e.target.checked
                        ? [...filters.size, size]
                        : filters.size.filter((s) => s !== size)
                    )
                  }
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600">Price</h3>
          <input
            type="range"
            min="0"
            max="2000"
            value={filters.priceRange.max}
            onChange={(e) =>
              handleFilterChange("priceRange", {
                ...filters.priceRange,
                max: e.target.value,
              })
            }
            className="w-full mt-2"
          />
          <div className="flex justify-between text-xs mt-2">
            <span>₹0</span>
            <span>₹{filters.priceRange.max}</span>
          </div>
        </div>

        {/* Product Type Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600">Product Type</h3>
          <select
            onChange={(e) => handleFilterChange("type", e.target.value)}
            value={filters.type}
            className="w-full p-2 mt-3 border border-gray-300 rounded-md"
          >
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
      </div>

      {/* Mobile Filter Section */}
      <motion.div
        className={`${
          showFilter ? "block" : "hidden"
        } fixed inset-0 z-50 bg-white p-6 overflow-auto shadow-lg rounded-xl border border-gray-200 md:hidden`}
        initial={{ x: "-100%" }}
        animate={{ x: 0, width: "80%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Filters</h2>

        {/* Size Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600">Size</h3>
          <div className="flex flex-col space-y-3 mt-3">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <label
                key={size}
                className="flex items-center text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFilterChange(
                      "size",
                      e.target.checked
                        ? [...filters.size, size]
                        : filters.size.filter((s) => s !== size)
                    )
                  }
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600">Price</h3>
          <input
            type="range"
            min="0"
            max="2000"
            value={filters.priceRange.max}
            onChange={(e) =>
              handleFilterChange("priceRange", {
                ...filters.priceRange,
                max: e.target.value,
              })
            }
            className="w-full mt-2"
          />
          <div className="flex justify-between text-xs mt-2">
            <span>₹0</span>
            <span>₹{filters.priceRange.max}</span>
          </div>
        </div>

        {/* Product Type Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600">Product Type</h3>
          <select
            onChange={(e) => handleFilterChange("type", e.target.value)}
            value={filters.type}
            className="w-full p-2 mt-3 border border-gray-300 rounded-md"
          >
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>

        <button
          onClick={() => setShowFilter(false)}
          className="absolute top-4 right-4 text-gray-700"
        >
          &times;
        </button>
      </motion.div>

      {/* Product Grid */}
      <div className="ml-1/4 w-full p-6">
        <div className="flex justify-between text-center items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">{name}</h1>

          <button
            onClick={() => setShowFilter(!showFilter)}
            className="sm:hidden text-xl text-gray-800"
          >
            <FaFilter />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="relative">
              <Link
                key={product.id}
                href={`/product/${product.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  {/* Image Carousel with Arrow Navigation */}
                  <motion.img
                    src={product.images[currentImage[index]]}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {product.isSale && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Sale
                    </span>
                  )}

                  {/* Carousel Arrow Navigation */}
                </div>
              </Link>
              <button
                onClick={() => handlePrevImage(index)}
                className="absolute z-100 top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
              >
                <BiChevronLeft />
              </button>
              <button
                onClick={() => handleNextImage(index)}
                className="absolute z-100 top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
              >
                <BiChevronRight />
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-semibold text-gray-800">
                    ₹{product.price}
                  </p>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-600 line-through">
                      ₹{product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
