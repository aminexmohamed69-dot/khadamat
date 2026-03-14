import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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
          <h2 className="text-lg lg:text-2xl font-black text-blue-600 text-center lg:text-right" style={{fontFamily: 'Cairo, sans-serif'}}>
            مشروع تجزئة وإقامة النجمة – تيزنيت
          </h2>
        </div>
      </div>
    </nav>
  );
}
