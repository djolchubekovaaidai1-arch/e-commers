// src/components/Footer/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4a3224] text-[#f8f4f0] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Колонка 1: Логотип и Рассылка */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif italic">Logo</h2>
            <p className="text-sm text-stone-300 leading-relaxed">
              Suspendisse quis sodales nunc. Sed ligula enim, mattis ut sem id, mollis sagittis sapien.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-white/50"
              />
              <button className="bg-white text-[#4a3224] px-8 py-3 rounded-full text-sm font-bold hover:bg-stone-200 transition">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-stone-400">
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Колонка 2: Main Page */}
          <div className="lg:pl-10">
            <h3 className="text-lg font-bold mb-6">Main Page</h3>
            <ul className="space-y-4 text-sm text-stone-300">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Category</a></li>
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
            </ul>
          </div>

          {/* Колонка 3: Utility Page */}
          <div>
            <h3 className="text-lg font-bold mb-6">Utility Page</h3>
            <ul className="space-y-4 text-sm text-stone-300">
              <li><a href="#" className="hover:text-white transition">License</a></li>
              <li><a href="#" className="hover:text-white transition">Style Guide</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition">404 not found</a></li>
            </ul>
          </div>

          {/* Колонка 4: Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us :-</h3>
            <ul className="space-y-4 text-sm text-stone-300">
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span>033308890529</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span>monvykevin@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Manchester 13078</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-6 text-stone-300">
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
          </div>
          <p className="text-sm text-stone-400 font-medium">
            Built By Salmon Pixel - Powered By Figma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;