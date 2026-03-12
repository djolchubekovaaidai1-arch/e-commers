import React, {useState} from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Drawer } from 'antd';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showDrawer = () => setIsMenuOpen(true);
  const onClose = () => setIsMenuOpen(false);

  // Ссылки меню для удобства вынесены в массив
  const navLinks = [
   { title: 'Home', href: '/' },
    { title: 'Categories', href: '/categories' },
    { title: 'Shop', href: '/shop' },
    { title: 'About us', href: '/about-us' },
    { title: 'Contact us', href: '/contact-us' },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-[#f8f4f0] px-4 md:px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Бургер для мобилки (показывается только на sm/md) */}
        <button  
          className="md:hidden text-stone-700" 
          onClick={showDrawer}
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>

        {/* Логотип */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-serif italic text-stone-800">Logo</h1>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-sm text-gray-600 hover:text-black transition">
              {link.title}
            </a>
          ))}
        </nav>

        {/* Иконки */}
        <div className="flex items-center space-x-4 md:space-x-5 text-stone-700">
          <button className="hover:text-black transition">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden sm:block hover:text-black transition">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-black transition">
            <User size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Мобильная шторка (Ant Design Drawer) */}
      <Drawer
        title={<span className="font-serif italic text-xl">Menu</span>}
        placement="left"
        onClose={onClose}
        open={isMenuOpen}
        width={280}
        closeIcon={<X size={20} className="text-stone-700" />}
        styles={{ body: { backgroundColor: '#f8f4f0' }, header: { backgroundColor: '#f8f4f0' } }}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="text-lg text-gray-700 hover:text-black transition border-b border-stone-200 pb-2"
              onClick={onClose} // Закрыть при клике на ссылку
            >
              {link.title}
            </a>
          ))}
          {/* Доп. иконка в меню для мобилки, если нужно */}
          <div className="pt-4 flex space-x-4">
             <ShoppingBag size={20} />
             <span className="text-gray-700">Cart</span>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
