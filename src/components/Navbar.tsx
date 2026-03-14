import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center gap-4 z-10 w-1/4">
          <img src="/image-removebg-preview.png" alt="Tozdaght Logo" className="h-14 sm:h-20 w-auto" />
        </div>

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none px-16 sm:px-4">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 leading-tight text-center pointer-events-auto" style={{fontFamily: 'Cairo, sans-serif'}}>
            شركة توزدغت العقارية
          </h1>
        </div>

        <div className="flex items-center justify-end z-10 w-1/4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Menu size={24} className="text-gray-700 pointer-events-auto" />
          </button>
        </div>
      </div>
    </nav>
  );
}
