import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
  '/media__1773618014805.png' // New interior plan image
];

export default function ArchitectureTab() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); // New state for selected image

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
          <h3 className="text-3xl font-black text-white tracking-tight leading-tight">تصميم العمارة</h3>
          <p className="text-blue-100/60 font-medium font-Cairo">مشاهدة المخطط الكامل للمشروع ({currentIndex + 1} / {images.length})</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-2xl shadow-lg">
          <span className="text-blue-200 font-black text-sm tracking-widest">DÉTAILS TECHNIQUES</span>
        </div>
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

      {/* Single Image Carousel */}
      <div className="flex-1 relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl group ring-1 ring-black/5 min-h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={images[currentIndex]}
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
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>

      {/* New Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="group relative aspect-video overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 cursor-pointer border border-white/10 hover:border-blue-400/50 hover:scale-[1.02]"
          >
            <img
              src={img}
              alt={`Architecture plan ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white font-bold text-lg">عرض المخطط بالحجم الكامل</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-3xl flex items-center justify-center z-[100] p-4 animate-in fade-in duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white/50 hover:text-white transition-colors p-2"
            >
              <ChevronLeft size={48} className="rotate-90" />
            </button>
            <img 
              src={selectedImage} 
              alt="صورة مكبرة" 
              className="w-full h-auto rounded-3xl shadow-[0_0_100px_rgba(37,99,235,0.2)] border border-white/10"
            />
          </div>
        </div>
      )}

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
