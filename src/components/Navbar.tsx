import { Menu } from 'lucide-react';
import { useState } from 'react'; // Redundant push to ensure Vercel update

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full border-b border-white/10 bg-slate-900/50 backdrop-blur-2xl top-0 z-50 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center relative">
        <div className="flex items-center gap-4 z-10 w-1/4">
          <img src="/image-removebg-preview.png" alt="Tozdaght Logo" className="h-14 sm:h-24 w-auto drop-shadow-md hover:scale-105 transition-transform" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none px-16 sm:px-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight text-center pointer-events-auto drop-shadow-lg" style={{fontFamily: 'Cairo, sans-serif'}}>
            شركة توزدغت العقارية
          </h1>
          <p className="text-[10px] sm:text-xs lg:text-sm font-bold text-blue-200 mt-1 text-center pointer-events-auto tracking-wide opacity-90" style={{fontFamily: 'Tajawal, sans-serif'}}>
            استثمر بثقة… نحن رفيقكم في العقار
          </p>
        </div>

        <div className="flex items-center justify-end z-10 w-1/4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 hover:bg-white/10 rounded-xl transition-colors border border-transparent hover:border-white/10"
          >
            <Menu size={24} className="text-white pointer-events-auto" />
          </button>
        </div>
      </div>
    </nav>
  );
}
