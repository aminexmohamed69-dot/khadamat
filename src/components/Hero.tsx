import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 order-2 lg:order-1">
            <img src="/image-removebg-preview.png" alt="Logo" className="h-14 w-auto" />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition order-3"
          >
            <Menu size={24} className="text-gray-700" />
          </button>

          <div className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 lg:static lg:flex lg:gap-8 lg:bg-transparent lg:border-0 order-1 lg:order-2 ${
            menuOpen ? 'flex flex-col gap-4 p-4' : 'hidden'
          }`}>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">الرئيسية</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">حول نحن</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">الخدمات</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">المشاريع</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">اتصل معنا</a>
          </div>
        </div>
      </nav>

      <div className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:flex-1 text-center lg:text-right">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              خدمات البناء الاحترافية
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed font-medium">
              لنكي مستقبلك بحقوث وجودة
            </p>
            <p className="text-sm text-blue-200 mb-8 leading-relaxed">
              نحن شركة رائدة في مجال البناء والتشييد والتصميم، نقدم خدمات متكاملة، معايير الجودة والاحترافية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 hover:shadow-lg">
                خدماتنا
              </button>
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 hover:shadow-lg">
                اطلب عرض سعر
              </button>
            </div>
          </div>

          <div className="lg:flex-1">
            <img
              src="/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg"
              alt="Project"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
