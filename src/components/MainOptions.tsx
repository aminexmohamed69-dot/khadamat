import { Home, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MainOptionsProps {
  onSelect: (option: 'apartments' | 'land') => void;
}

const plotImages = [
  '/plan-rdc-new.jpg',
  '/plan-1ere-new.jpg',
  '/plan-2ere-new.jpg',
  '/plan-3eme-new.jpg',
  '/plan-4eme-new.jpg'
];

export default function MainOptions({ onSelect }: MainOptionsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % plotImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % plotImages.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + plotImages.length) % plotImages.length);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto py-12 px-6">
      {/* Blue Card (Position 1) - Residential Apartments (Static Home Icon) */}
      <button
        onClick={() => onSelect('apartments')}
        className="group relative bg-slate-900/60 backdrop-blur-2xl aspect-square rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_70px_rgba(59,130,246,0.3)] transition-all duration-700 border border-white/10 hover:border-blue-500/30 flex flex-col items-center justify-center gap-10 overflow-hidden p-12 lg:p-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <div className="w-28 h-28 lg:w-40 lg:h-40 bg-blue-500/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-blue-400 group-hover:scale-110 transition-all duration-700 z-10 shadow-inner border border-blue-400/30 overflow-hidden">
          <Home size={80} strokeWidth={1.5} className="group-hover:-rotate-6 transition-transform duration-700" />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md" style={{fontFamily: 'Cairo, sans-serif'}}>الشقق السكنية</h3>
          <p className="text-blue-100 text-xl lg:text-2xl font-medium max-w-[300px] leading-relaxed" style={{fontFamily: 'Tajawal, sans-serif'}}>استكشف الشقق السكنية الفاخرة المتاحة وتفاصيلها</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
      </button>

      {/* Orange Card (Position 2) - Land Plots + Image Slider (Floor Plans) */}
      <button
        onClick={() => onSelect('land')}
        className="group relative bg-slate-900/60 backdrop-blur-2xl aspect-square rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_70px_rgba(249,115,22,0.3)] transition-all duration-700 border border-white/10 hover:border-orange-500/30 flex flex-col items-center justify-center gap-10 overflow-hidden p-12 lg:p-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <div className="w-28 h-28 lg:w-40 lg:h-40 bg-orange-500/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-orange-400 transition-all duration-700 z-10 shadow-inner border border-orange-400/30 overflow-hidden relative">
          {/* Slider for Plots */}
          <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110">
            {plotImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Plan ${idx}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-orange-500/10"></div>
          </div>
          
          <MapPin size={80} strokeWidth={1.5} className="relative z-10 group-hover:rotate-6 transition-transform duration-700 drop-shadow-lg mix-blend-overlay opacity-50" />
          
          {/* Slider Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <button onClick={prevSlide} className="p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-sm transition-all scale-75">
              <ChevronRight size={16} />
            </button>
            <button onClick={nextSlide} className="p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-sm transition-all scale-75">
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md" style={{fontFamily: 'Cairo, sans-serif'}}>البقع الأرضية</h3>
          <p className="text-orange-100/90 text-xl lg:text-2xl font-medium max-w-[300px] leading-relaxed" style={{fontFamily: 'Tajawal, sans-serif'}}>استكشف البقع الأرضية المتوفرة ومواقعها الاستراتيجية</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
      </button>
    </div>
  );
}
