import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Headphones, Monitor, Cpu, LayoutGrid } from 'lucide-react';

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Маалымат алууда ката кетти:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Жүктөлүүдө...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow">
            
            {/* Сүрөт жана Категория */}
            <div className="relative bg-gray-100 rounded-2xl h-64 flex items-center justify-center overflow-hidden mb-4">
              <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                {product.category.name}
              </span>
              <img 
                src={product.images[0]} 
                alt={product.title} 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Маалыматтар */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-gray-800 truncate">{product.title}</h3>
              
              <div className="flex items-center gap-1 text-orange-400">
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-semibold text-gray-500">4.8 (1.2k Reviews)</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              </div>

              {/* Баскычтар */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 border border-gray-200 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 bg-zinc-900 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-zinc-800 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
