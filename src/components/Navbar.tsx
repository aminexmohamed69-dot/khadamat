import { Menu, X, Home, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate?: (view: 'home' | 'project-details') => void;
  currentView?: 'home' | 'project-details';
}

export default function Navbar({ onNavigate, currentView }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'الرئيسية', icon: <Home size={20} />, view: 'home' as const },
    { label: 'المشاريع', icon: <LayoutGrid size={20} />, view: 'project-details' as const },
  ];

  return (
    <>
      <nav className={`fixed w-full border-b border-white/5 bg-slate-950/40 backdrop-blur-3xl top-0 z-[60] shadow-[0_4px_32px_rgba(0,0,0,0.5)] transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4 z-10 w-1/4">
            <button 
              onClick={() => onNavigate?.('home')}
              className="hover:scale-105 transition-transform duration-500 active:scale-95"
            >
              <img src="/image-removebg-preview.png" alt="Tozdaght Logo" className="h-16 sm:h-20 w-auto drop-shadow-2xl" />
            </button>
          </div>

          {/* Center Title Section */}
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none px-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight text-center pointer-events-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300" style={{fontFamily: 'Cairo, sans-serif'}}>
              شركة توزدغت العقارية
            </h1>
            <p className="text-[10px] sm:text-xs lg:text-sm font-bold text-blue-300/90 mt-1 text-center pointer-events-auto tracking-widest uppercase opacity-80" style={{fontFamily: 'Tajawal, sans-serif'}}>
              استثمر بثقة… نحن رفيقكم في العقار
            </p>
          </div>

          {/* Desktop Menu & Hamburger Section */}
          <div className="flex items-center justify-end z-10 w-1/4 gap-6">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20 active:scale-90"
            >
              {menuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] transition-all duration-700 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={() => setMenuOpen(false)}></div>
        
        <div className={`absolute right-0 top-0 bottom-0 w-[280px] bg-slate-900 border-l border-white/10 shadow-2xl transition-transform duration-700 ease-out flex flex-col p-8 pt-28 gap-4 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  onNavigate?.(item.view);
                  setMenuOpen(false);
                }}
                className={`w-full text-right p-5 rounded-3xl transition-all duration-300 flex items-center justify-between group ${
                  currentView === item.view 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/40 translate-x-[-8px]' 
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
                style={{fontFamily: 'Cairo, sans-serif'}}
              >
                <span className="text-lg font-black">{item.label}</span>
                <span className={`${currentView === item.view ? 'text-white' : 'text-blue-400 opacity-50'} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-auto p-6 bg-blue-600/5 rounded-[2.5rem] border border-blue-500/10 text-center">
            <p className="text-blue-200/40 text-xs font-bold tracking-widest uppercase">Tozdaght Immobilier</p>
          </div>
        </div>
      </div>
    </>
  );
}
