import React from 'react';
const heroBg = "https://terasjabar.id/wp-content/uploads/2025/08/1000817097.jpg"
const Hero = () => {
  return (
    <section className="relative w-full px-4 py-6 md:px-10">
      {/* Контейнер с закругленными углами как на фото */}
      <div className="relative h-[500px] md:h-[900px] w-full overflow-hidden rounded-[2rem] bg-stone-200">
        
        {/* Фоновое изображение (замените URL на свое) */}
        <img 
          src={heroBg} 
          alt="Fashion background" 
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />

        {/* Контент поверх изображения */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          
          <h1 className="mb-4 text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
            Wear Your Confidence
          </h1>
          
          <p className="max-w-2xl text-sm leading-relaxed md:text-lg text-stone-100 mb-8">
            Modern and stylish fashion store website design with a clean layout and elegant product showcase. 
            Perfect for clothing brands, boutiques, and online fashion shops.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button className="rounded-full bg-white px-10 py-3 text-sm font-medium text-black transition hover:bg-stone-200">
              Shop Now
            </button>
            <button className="rounded-full border border-white px-10 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-black">
              Explore Collection
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
