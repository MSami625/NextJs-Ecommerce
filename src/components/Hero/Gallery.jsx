const Gallery = () => {
    const images = [
      "https://littleboxindia.com/cdn/shop/files/When_your_outfit_feels_just_right__confidence_shines_effortlessly____littlebox.india__littlebox_wit__littlebox_trends_____ComfortableFashion__OwnYourStyle__JPG_5eccc1e3-54c6-4d5c-9e10-d0a2ac430ada.jpg?v=1719479634",
      "https://littleboxindia.com/cdn/shop/files/tanya_bedi_97f1925b-5017-48c8-bb9c-c9b076fd59ec.jpg?v=1709553111",
      "https://littleboxindia.com/cdn/shop/files/vivacious_10ee9196-bffa-47dd-a64d-1523d3b64421.jpg?v=1709552666",
      "https://littleboxindia.com/cdn/shop/files/tanya_bedi_97f1925b-5017-48c8-bb9c-c9b076fd59ec.jpg?v=1709553111",
      "https://littleboxindia.com/cdn/shop/files/vivacious_10ee9196-bffa-47dd-a64d-1523d3b64421.jpg?v=1709552666",
     "https://littleboxindia.com/cdn/shop/files/tanya_bedi_97f1925b-5017-48c8-bb9c-c9b076fd59ec.jpg?v=17095531116",
      "https://littleboxindia.com/cdn/shop/files/tanya_bedi_97f1925b-5017-48c8-bb9c-c9b076fd59ec.jpg?v=1709553111",
      "https://littleboxindia.com/cdn/shop/files/vivacious_10ee9196-bffa-47dd-a64d-1523d3b64421.jpg?v=1709552666",
    ];
  
    return (
      <div className="mt-8 text-center p-10">
        <hr />
        <h2 className="text-2xl font-bold mb-4">#LITCLUB</h2>
        <hr />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover "
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  