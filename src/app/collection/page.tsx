"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const collections = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  name: `Collection ${index + 1}`,
  image: 'https://littleboxindia.com/cdn/shop/products/219865c4b9a4283b97ee857eb9fdc730_360x.jpg?v=1682507952',
}));

const CollectionsGrid = () => {
  const itemsPerPage = 30;
  const totalPages = Math.ceil(collections.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = collections.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-20 py-8">
      <h1 className="text-2xl font-semibold text-center mb-6">Our Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
        {currentItems.map((collection) => (
          <Link
            key={collection.id}
            href={`/collection/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
            passHref
          >
            <div
              className="flex flex-col items-center cursor-pointer"
              style={{ height: '250px', width: '200px' }}
            >
              <Image
                src={collection.image}
                alt={collection.name}
                width={200}
                height={250}
                className="w-full h-full object-cover mb-2"
              />
              <p className="text-center text-lg font-medium">{collection.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-16">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white ${
            currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'
          } rounded`}
        >
          Previous
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white ${
            currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'
          } rounded`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CollectionsGrid;
