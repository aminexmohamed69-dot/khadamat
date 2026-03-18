import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const images = [
  '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
];

export default function ProjectsSection({ 
  onExploreProject
}: { 
  onExploreProject?: () => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="pt-6 pb-20 bg-transparent" id="projects-current">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-6 drop-shadow-sm tracking-tight" style={{fontFamily: 'Cairo, sans-serif'}}>
            مشاريعنا الحالية
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20">
          <div className="p-8 flex flex-col items-center gap-4 bg-black/40 border-b border-white/10 text-center relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full text-lg font-black shadow-lg tracking-widest relative z-10">
              جديد
            </div>

            <div className="flex flex-col items-center gap-4 relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-xl tracking-tight" style={{fontFamily: 'Cairo, sans-serif'}}>
                مشروع تجزئة وإقامة النجمة – تيزنيت
              </h3>
              <button 
                onClick={onExploreProject}
                className="flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-all duration-500 text-lg group bg-white/5 hover:bg-white/10 px-8 py-2 rounded-full border border-white/10 hover:border-blue-400/50"
              >
                <span>استكشف المشروع</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">←</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video overflow-hidden bg-gray-200 relative">

              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Project slide ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    idx === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              <button
                onClick={prevSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-600 hover:text-white text-gray-900 p-3 rounded-full transition z-20 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-600 hover:text-white text-gray-900 p-3 rounded-full transition z-20 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-10 bg-black/40 backdrop-blur-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 text-gray-100">
                  <span className="text-blue-600 font-bold text-2xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-lg">شقق سكنية بتزنيت</p>
                    <p className="text-gray-400 text-sm">عصرية وفاخرة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gray-100">
                  <span className="text-blue-400 font-bold text-2xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-lg">فضاءات مكتبية</p>
                    <p className="text-gray-400 text-sm">Plateaux Bureau متطورة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gray-100">
                  <span className="text-blue-600 font-bold text-2xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-lg">شقق سكنية بايت ملول</p>
                    <p className="text-gray-400 text-sm">في موقع استراتيجي</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gray-100">
                  <span className="text-blue-400 font-bold text-2xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-lg">شقق سكنية بالقليعة</p>
                    <p className="text-gray-400 text-sm">بأفضل الأسعار</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
