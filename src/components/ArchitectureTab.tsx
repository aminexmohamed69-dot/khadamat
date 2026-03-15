import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const architectureImages = [
  '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  '/75c59f40-7d77-4836-b9f0-0b6cebbe2b65.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
  '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg'
];

export default function ArchitectureTab() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % architectureImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + architectureImages.length) % architectureImages.length);
  };

  return (
    <div className="w-full h-full min-h-[500px] flex flex-col gap-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900">تصميم العمارة</h3>
        <p className="text-gray-500">مشاهدة المخطط الكامل للمشروع ({currentIndex + 1} / {architectureImages.length})</p>
      </div>
      
      <div className="flex-1 relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl group ring-1 ring-black/5">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img 
            src={architectureImages[currentIndex]} 
            alt={`Architecture Plan ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-[1.02]"
          />
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-8 pointer-events-none">
          <button 
            onClick={handlePrev}
            className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/80 md:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-100 md:opacity-0 group-hover:opacity-100 border border-gray-100/50"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>
          
          <button 
            onClick={handleNext}
            className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/80 md:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-100 md:opacity-0 group-hover:opacity-100 border border-gray-100/50"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {architectureImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
