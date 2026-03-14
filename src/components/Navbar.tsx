import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center gap-4 z-10">
          <img src="/image-removebg-preview.png" alt="Tozdaght Logo" className="h-14 sm:h-20 w-auto" />
        </div>

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none px-16 sm:px-4 lg:static lg:flex-1 lg:pointer-events-auto">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 leading-tight text-center" style={{fontFamily: 'Cairo, sans-serif'}}>
            شركة توزدغت العقارية
          </h1>
        </div>

        <div className="flex items-center z-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Menu size={24} className="text-gray-700 pointer-events-auto" />
          </button>
        </div>

        <div className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 lg:static lg:flex lg:gap-8 lg:bg-transparent lg:border-0 lg:backdrop-blur-none ${
          menuOpen ? 'flex flex-col gap-4 p-4 pointer-events-auto z-50' : 'hidden'
        }`}>
          <h2 className="text-lg lg:text-xl xl:text-2xl font-black text-blue-600 text-center lg:text-right" style={{fontFamily: 'Cairo, sans-serif'}}>
            مشروع تجزئة وإقامة النجمة – تيزنيت
          </h2>
        </div>
      </div>
    </nav>
  );
}
