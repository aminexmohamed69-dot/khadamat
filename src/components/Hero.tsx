import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm lg:text-base">مشروع تجزئة و اقامة النجمة بتزنيت</span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 hover:bg-slate-700 rounded-lg transition"
          >
            <Menu size={24} />
          </button>

          <div className={`absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-700 lg:static lg:flex lg:gap-8 lg:bg-transparent lg:border-0 ${
            menuOpen ? 'flex flex-col gap-4 p-4' : 'hidden'
          }`}>
            <a href="#" className="text-slate-300 hover:text-white transition">المشاريع</a>
            <a href="#" className="text-slate-300 hover:text-white transition">خدماتنا</a>
            <a href="#" className="text-slate-300 hover:text-white transition">عن الشركة</a>
            <a href="#" className="text-slate-300 hover:text-white transition">اتصل بنا</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:flex-1 text-center lg:text-right">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            مشروع تجزئة وإقامة النجمة
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            شقق سكنية عصرية وفضاءات مكتبية في قلب تيزنيت
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
            اكتشف المشروع
          </button>
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
  );
}
