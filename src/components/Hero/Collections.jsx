// components/Collections.js
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    title: 'Combos',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/Tops_300x.jpg?v=1682057309',
    discount: 'UPTO 60% OFF',
  },
  {
    title: 'Hoodies & Set',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/dgaghh_300x.jpg?v=1684258524',
    discount: 'UPTO 60% OFF',
  },
  {
    title: 'Heels & Platform',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/Men_s_shoes_300x.jpg?v=1682057308',
    discount: 'UPTO 60% OFF',
  },
  {
    title: 'Tops',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/Tops_300x.jpg?v=1682057309',
    discount: 'UPTO 55% OFF',
  },
  {
    title: 'Oxfords & Boots',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/dgaghh_300x.jpg?v=1684258524',
    discount: 'UPTO 60% OFF',
  },
  {
    title: 'Dresses',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/Men_s_shoes_300x.jpg?v=1682057308',
    discount: 'UPTO 55% OFF',
  },
  {
    title: 'Pants',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/Tops_300x.jpg?v=1682057309',
    discount: 'UPTO 60% OFF',
  },
  {
    title: 'Loafers',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/dgaghh_300x.jpg?v=1684258524',
    discount: 'UPTO 60% OFF',
  },
  {
    title: 'Combos',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/Tops_300x.jpg?v=1682057309',
    discount: 'UPTO 60% OFF',
  },
  {
    title: 'Hoodies & Set',
    imgSrc: 'https://littleboxindia.com/cdn/shop/files/dgaghh_300x.jpg?v=1684258524',
    discount: 'UPTO 60% OFF',
  },
];

const Collections = () => {
  return (
    <div className="w-full mx-auto my-8 px-11 lg:px-12 md:px-4 hidden md:block">
      <h2 className="text-center text-2xl font-semibold mb-6">Collections</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {collections.map((collection, index) => (
          <Link
            key={index}
            href={`/collection/${encodeURIComponent(collection.title.replace(/ /g, '-').toLowerCase())}`}
            className="flex flex-col items-center group"  // Add group class for hover effects
          >
            <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src={collection.imgSrc}
                alt={collection.title}
                placeholder="blur"
                width={300}  
                height={700} 
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 220px"
                blurDataURL="https://via.placeholder.com/10x10?text=..." 
              />
              <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                {collection.discount}
              </div>
            </div>
            <p className="mt-2 text-center text-sm">{collection.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collections;
