import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ограничиваем запрос до 4 карточек через параметры API
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-[#fdf8f4] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Шапка секции */}
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d2b1f]">Featured Products</h2>
            <p className="text-[#6b5d54] text-sm max-w-sm">
              Modern and stylish fashion store website design with a clean layout and elegant product showcases.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-white transition-all">
            See all <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Сетка на 4 колонки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            // Скелетоны при загрузке
            [...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-gray-200 animate-pulse rounded-2xl" />
            ))
          ) : (
            products.slice(0, 4).map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 group-hover:shadow-lg">
                  <img
                    src={product.images[0]} // Берем первое фото из массива
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = 'https://placehold.co'; }}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Кнопка для мобильных устройств */}
        <button className="w-full mt-8 md:hidden flex justify-center items-center gap-2 border border-gray-200 px-6 py-3 rounded-full text-sm font-medium">
          See all <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
