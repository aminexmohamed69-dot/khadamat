import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const architectureImages = [
  '/plan-4eme.jpg',  // 4ème Étage
  '/plan-3eme.jpg',  // 3ème Étage
  '/plan-1ere.jpg',  // 1ère Étage
  '/plan-rdc.jpg',   // Rez de Chaussée
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

      {/* Embedded PDF Viewer */}
      <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-gray-50">
        <iframe
          src="/plan.pdf#view=FitH"
          className="w-full h-full border-none"
          title="Project Plan PDF"
        />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h4 className="text-xl font-bold text-gray-900">معرض الصور</h4>
        <p className="text-gray-500">تصفح صور المخططات بتفصيل أكبر</p>
      </div>
      
      <div className="flex-1 relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl group ring-1 ring-black/5 min-h-[400px]">
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
            className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/80 md:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-100 border border-gray-100/50"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>
          
          <button 
            onClick={handleNext}
            className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/80 md:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-100 border border-gray-100/50"
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

      {/* PDF Download Section */}
      <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div className="text-right md:text-left">
            <h4 className="text-xl font-bold text-gray-900 mb-1">المخطط الهندسي الكامل (PDF)</h4>
            <p className="text-gray-500">يمكنك تحميل أو عرض المخطط الكامل بدقة عالية</p>
          </div>
        </div>
        
        <a 
          href="/plan.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
        >
          <span>فتح في نافذة جديدة</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
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
