import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Категорияларды алуу (биринчи 4 же 5 категорияны көрсөтүү үчүн limit коштук)
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  if (loading) return <div className="text-center py-20">Loading categories...</div>;

  return (
    <section className="bg-[#f8f4f0] px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        {/* Заголовок жана подзаголовок */}
        <h2 className="text-4xl font-bold text-stone-800 mb-2">Categories</h2>
        <p className="text-stone-500 mb-10">Perfect for clothing brands, boutiques, and online fashion shops.</p>

        {/* Категориялар сеткасы */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).map((cat) => (
            <div 
              key={cat.id} 
              className="group relative h-[450px] overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Категориянын сүрөтү */}
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Сүрөттүн үстүндөгү капсула (Button/Badge) */}
              <div onClick={()=>{
                    console.log(cat.id);
                    navigate(`/category-products/${cat.id}`);
                  }} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]">
                <div className="bg-white/60 backdrop-blur-md py-3 rounded-full text-center transition hover:bg-white/90">
                  <span  className="text-xs font-bold uppercase tracking-widest text-stone-800">
                    {cat.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
