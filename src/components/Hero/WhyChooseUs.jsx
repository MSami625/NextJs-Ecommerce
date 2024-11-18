const LittleBoxSection = () => {
    const features = [
      {
        icon: "littleboxindia.com/cdn/shop/files/dsvdsvdsv_2_180x.png?v=1670488714",
        title: "Fast Delivery",
      },
      {
        icon: "https://via.placeholder.com/64?text=Icon+2",
        title: "New Styles",
      },
      {
        icon: "https://via.placeholder.com/64?text=Icon+3",
        title: "Best fit",
      },
      {
        icon: "https://via.placeholder.com/64?text=Icon+4",
        title: "Easy exchange",
      },
    ];
  
    return (
      <section className="text-center py-10 bg-white border border-t-gray-800">
        <h1 className="text-4xl font-bold mb-2">littlebox</h1>
        <h2 className="text-sm font-medium text-gray-700 mb-4">#GoBeYou</h2>
        <p className="text-black text-md max-w-3xl mx-auto mb-12">
          The ultimate fashion destination for trendsetters who want the insta
          ready, celeb worthy looks & they want them now. With daily drops of
          fresh styles, fast free delivery & easy peasy returns, your best fit is
          right here.
        </p>
     
         
            <div className="flex flex-col items-center ">
              <img
                src="https://littleboxindia.com/cdn/shop/files/dsvdsvdsv_2.png?v=1670488714"
             
            
              />
          
            </div>
      
      </section>
    );
  };
  
  export default LittleBoxSection;
  