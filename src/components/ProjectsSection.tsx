import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const images = [
  '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
];

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          مشاريعنا الحالية
        </h2>

        <div className="border-t-4 border-blue-600 mb-16"></div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                جديد
              </span>
            </div>

            <div className="aspect-video overflow-hidden bg-slate-200 relative">
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
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full transition z-20"
              >
                <ChevronRight size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full transition z-20"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-slate-50 to-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                مشروع تجزئة وإقامة النجمة – تيزنيت
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-4 text-slate-700">
                  <span className="text-blue-600 font-bold text-lg">➤</span>
                  <span>شقق سكنية بتزنيت</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <span className="text-blue-600 font-bold text-lg">➤</span>
                  <span>فضاءات مكتبية Plateaux Bureau – تيزنيت</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <span className="text-blue-600 font-bold text-lg">➤</span>
                  <span>شقق سكنية بايت ملول</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <span className="text-blue-600 font-bold text-lg">➤</span>
                  <span>شقق سكنية بالقليعة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
