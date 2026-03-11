import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  if (loading) return <div className="text-center py-10">Жүктөлүүдө...</div>;

  return (
    <section className="bg-[#f8f4f0] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-stone-800">Latest Products</h2>
        
        {/* Сетка - 1 колонка мобилкада, 3 колонка десктопто */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="group flex flex-col">
              
              {/* Сүрөт контейнери */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Маалыматтар */}
              <div className="mt-4 flex flex-col space-y-1">
                <h3 className="text-sm font-medium text-stone-800 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                  $ {product.price}.98 USD
                </p>
                
                {/* Add to Cart баскычы */}
                <button className="mt-2 flex items-center text-xs font-bold text-stone-400 hover:text-stone-700 transition">
                  ADD TO CART
                  <ChevronRight size={14} className="ml-1" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
