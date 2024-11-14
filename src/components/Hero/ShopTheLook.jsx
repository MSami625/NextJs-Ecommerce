import React from "react";

const ShopTheLook = () => {
  // Dummy data for now
  const products = [
    {
      id: 1,
      title: "Black Long Sheer Lantern Sleeve Dress",
      image: "https://littleboxindia.com/cdn/shop/videos/c/vp/906b64f64ada47b6abdc6eea2dc6fa4f/906b64f64ada47b6abdc6eea2dc6fa4f.HD-1080p-4.8Mbps-25425858.mp4?v=0",
      thumbnail: "https://littleboxindia.com/cdn/shop/products/ee75ac4455d89bf79cfe95df5e7953c4.jpg?v=1704878243", 
      link: "/collections/black-long-sheer-lantern-sleeve-dress",
    },
    {
      id: 2,
      title: "Tie Dye Draped Collar Slip Dress",
      image: "https://littleboxindia.com/cdn/shop/videos/c/vp/906b64f64ada47b6abdc6eea2dc6fa4f/906b64f64ada47b6abdc6eea2dc6fa4f.HD-1080p-4.8Mbps-25425858.mp4?v=0",
      thumbnail: "https://littleboxindia.com/cdn/shop/products/ee75ac4455d89bf79cfe95df5e7953c4.jpg?v=1704878243",
      link: "/collections/tie-dye-draped-collar-slip-dress",
    },
    {
      id: 3,
      title: "Square Neck Ruched Sheer Top",
      image: "https://littleboxindia.com/cdn/shop/videos/c/vp/906b64f64ada47b6abdc6eea2dc6fa4f/906b64f64ada47b6abdc6eea2dc6fa4f.HD-1080p-4.8Mbps-25425858.mp4?v=0",
      thumbnail: "https://littleboxindia.com/cdn/shop/products/ee75ac4455d89bf79cfe95df5e7953c4.jpg?v=1704878243",
      link: "/collections/square-neck-ruched-sheer-top",
    },
    {
      id: 4,
      title: "Tie Dye Sheer Mesh Slit Dress",
      image: "https://littleboxindia.com/cdn/shop/videos/c/vp/906b64f64ada47b6abdc6eea2dc6fa4f/906b64f64ada47b6abdc6eea2dc6fa4f.HD-1080p-4.8Mbps-25425858.mp4?v=0",
      thumbnail: "https://littleboxindia.com/cdn/shop/products/ee75ac4455d89bf79cfe95df5e7953c4.jpg?v=1704878243",
      link: "/collections/tie-dye-sheer-mesh-slit-dress",
    },
  ];

  return (
    <div className="px-10 py-10">
      <h2 className="text-center text-3xl font-semibold mb-8">SHOP THE LOOK</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center max-w-[80%] mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`relative bg-white rounded-lg overflow-hidden shadow-lg 
              ${index > 0 ? 'hidden lg:block' : ''}  
              ${index > 1 ? 'sm:hidden md:block' : ''}`} 
          >
            <video
              src={product.image}
              alt={product.title}
              className="w-full h-[360px] object-cover rounded-t-lg"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-gray-900 to-transparent">
              <div className="flex items-center gap-3">
                <img
                  src={product.thumbnail}
                  alt="thumbnail"
                  className="w-12 h-16 object-cover rounded-md shadow-md"
                />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold">
                    {product.title}
                  </span>
                  <a
                    href={product.link} 
                    className="mt-2 text-xs bg-[#333333]  w-full text-center text-white px-8 py-3 rounded-md hover:bg-gray-700"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopTheLook;
