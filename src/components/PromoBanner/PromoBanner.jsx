import React from 'react';
const banner = "https://madeinvilnius.lt/wp-content/uploads/2025/03/vecteezy-clothes-collection-hanging-on-hangers-26575111-scaled.jpg"
const PromoBanner = () => {
  return (
    <section className="bg-[#f5f0eb] min-h-[400px] flex items-center py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Контентная часть */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2b1f] leading-tight">
            Exclusive Offers for <br /> a Limited Time
          </h2>
          <p className="text-[#6b5d54] text-sm md:text-base max-w-md">
            Modern and stylish fashion store website design with a clean layout 
            and elegant product showcases.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#3d2b1f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#523a2a] transition-colors">
              Shop Now
            </button>
            <button className="bg-white text-[#3d2b1f] border border-[#e5e0da] px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Изображение */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={banner}
              alt="Fashion Collection" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;
