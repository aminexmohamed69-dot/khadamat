import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/plan-rdc-new.jpg',
  '/plan-1ere-new.jpg',
  '/plan-3eme-new.jpg',
  '/plan-4eme-new.jpg',
  '/plan-2ere-new.jpg'
];

export default function ArchitectureTab({ type }: { type?: 'apartments' | 'land' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-full min-h-[500px] flex flex-col gap-10 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-right">
          <h3 className="text-3xl font-black text-white tracking-tight leading-tight">
            {type === 'land' ? 'تصميم التجزئة' : 'تصميم العمارة'}
          </h3>
          <p className="text-blue-100/60 font-medium font-Cairo">مشاهدة المخطط الكامل للمشروع ({currentIndex + 1} / {images.length})</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-2xl shadow-lg">
          <span className="text-blue-200 font-black text-sm tracking-widest">DÉTAILS TECHNIQUES</span>
        </div>
      </div>

      {/* Content based on type */}
      {type === 'apartments' ? (
        <div className="space-y-10">
          {/* Embedded PDF Viewer for Apartments */}
          <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-gray-50">
            <iframe
              src="/plan.pdf#view=FitH"
              className="w-full h-full border-none"
              title="Project Plan PDF"
            />
          </div>

          {/* PDF Download Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-white/10 transition-all duration-700 shadow-2xl">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-700 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <div className="text-right md:text-left">
                <h4 className="text-2xl font-black text-white mb-2 tracking-tight">المخطط الهندسي الكامل (PDF)</h4>
                <p className="text-blue-100/60 font-medium">يمكنك تحميل أو عرض المخطط الكامل بدقة عالية</p>
              </div>
            </div>

            <a
              href="/plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(37,99,235,0.4)] border border-blue-400/50"
            >
              <span>فتح في نافذة جديدة</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-white">معرض صور المخططات</h4>
            <p className="text-blue-100/60">تصفح صور المخططات بتفصيل أكبر</p>
          </div>

          {/* Single Image Carousel for Land Plots */}
          <div className="relative bg-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl group min-h-[500px] flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={`Architecture Plan ${currentIndex + 1}`}
              className="max-w-full max-h-[800px] object-contain transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-[1.02]"
            />

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl hover:bg-black/60 transition-all opacity-100"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                className="pointer-events-auto w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl hover:bg-black/60 transition-all opacity-100"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-400/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
