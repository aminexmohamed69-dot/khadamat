import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Premium Header with Glass Effect */}
      <nav className="border-b border-white/10 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4 order-2 lg:order-1">
            <img src="/image-removebg-preview.png" alt="Tozdaght Logo" className="h-20 w-auto" />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition order-3"
          >
            <Menu size={24} className="text-gray-700" />
          </button>

          <div className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 lg:static lg:flex lg:gap-8 lg:bg-transparent lg:border-0 lg:backdrop-blur-none order-1 lg:order-2 ${
            menuOpen ? 'flex flex-col gap-4 p-4' : 'hidden'
          }`}>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-semibold text-sm">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-semibold text-sm">حول نحن</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-semibold text-sm">الخدمات</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-semibold text-sm">المشاريع</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-semibold text-sm">اتصل معنا</a>
          </div>
        </div>
      </nav>

      {/* Premium Hero Section with Background */}
      <div className="relative h-screen bg-cover bg-center overflow-hidden" style={{backgroundImage: 'url(/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg)'}}>
        {/* Dark Overlay with Blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/85 backdrop-blur-sm"></div>
        
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-transparent"></div>

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-16">
          <div className="lg:flex-1 text-center lg:text-right">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-lg" style={{fontFamily: 'Cairo, sans-serif'}}>
              مشروع تجزئة وإقامة النجمة – تيزنيت
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed font-semibold drop-shadow-md">
              منطقة سكنية وتجارية حديثة بتصاميم عصرية
            </p>
            <p className="text-base text-blue-200 mb-12 leading-relaxed max-w-2xl lg:ml-auto drop-shadow-md">
              نحن نقدم مشاريع عقارية متطورة بمعايير عالمية، شقق سكنية فاخرة وفضاءات مكتبية احترافية
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-end">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-110 hover:shadow-2xl shadow-xl">
                استكشف المشروع
              </button>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-110 hover:shadow-2xl shadow-xl">
                اطلب عرض سعر
              </button>
            </div>
          </div>

          <div className="lg:flex-1 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg"
                alt="Project"
                className="relative rounded-2xl shadow-2xl w-full object-cover border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
