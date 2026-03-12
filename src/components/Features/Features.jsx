import React from 'react';
import { Truck, Headphones, RotateCcw, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: "Free Shipping",
      description: "Step into the realm of style with our unbeatable curated selection of today."
    },
    {
      icon: <Headphones size={32} strokeWidth={1.5} />,
      title: "24/7 Support",
      description: "Step into the realm of style with our unbeatable curated selection of today."
    },
    {
      icon: <RotateCcw size={32} strokeWidth={1.5} />,
      title: "Easy Returns",
      description: "Step into the realm of style with our unbeatable curated selection of today."
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Secure Checkout",
      description: "Step into the realm of style with our unbeatable curated selection of today."
    }
  ];

  return (
    <section className="bg-[#f5ede3] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-3">
            <div className="text-gray-600 mb-2">
              {feature.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-lg">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
