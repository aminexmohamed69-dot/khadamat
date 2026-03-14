import { Menu } from 'lucide-react';
import { useState } from 'react'; // Redundant push to ensure Vercel update

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/20 bg-white/70 backdrop-blur-xl sticky top-0 z-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 flex justify-between items-center relative">
        <div className="flex items-center gap-4 z-10 w-1/4">
          <img src="/image-removebg-preview.png" alt="Tozdaght Logo" className="h-14 sm:h-24 w-auto drop-shadow-md hover:scale-105 transition-transform" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none px-16 sm:px-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight text-center pointer-events-auto drop-shadow-sm" style={{fontFamily: 'Cairo, sans-serif'}}>
            شركة توزدغت العقارية
          </h1>
          <p className="text-[10px] sm:text-xs lg:text-sm font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mt-1.5 text-center pointer-events-auto tracking-wide" style={{fontFamily: 'Tajawal, sans-serif'}}>
            استثمر بثقة… نحن رفيقكم في العقار
          </p>
        </div>

        <div className="flex items-center justify-end z-10 w-1/4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 hover:bg-gray-100/50 rounded-xl transition-colors"
          >
            <Menu size={24} className="text-gray-800 pointer-events-auto" />
          </button>
        </div>
      </div>
    </nav>
  );
}
