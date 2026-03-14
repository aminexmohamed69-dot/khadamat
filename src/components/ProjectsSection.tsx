import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const images = [
  '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
];

export default function ProjectsSection({ onRevealOther }: { onRevealOther?: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleRevealClick = () => {
    if (onRevealOther) {
      onRevealOther();
      setTimeout(() => {
        const element = document.getElementById('other-projects-content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gray-50" id="projects-current">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            مشاريعنا الحالية
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          <div className="p-10 pb-12 flex flex-row-reverse justify-between items-center bg-gray-50/50">
            <div className="flex items-center gap-6">
              <button 
                onClick={handleRevealClick}
                className="text-blue-600 font-bold hover:text-blue-800 transition-colors text-lg border-b-2 border-blue-600/30 hover:border-blue-600"
              >
                اضغط للمزيد
              </button>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                مشروع تجزئة وإقامة النجمة – تيزنيت
              </h3>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg">
              جديد
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

            <div className="p-10 bg-gradient-to-r from-blue-50 to-white border-t border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 text-gray-700">
                  <span className="text-blue-600 font-bold text-2xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-lg">شقق سكنية بتزنيت</p>
                    <p className="text-gray-500 text-sm">عصرية وفاخرة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gray-700">
                  <span className="text-blue-600 font-bold text-2xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-lg">فضاءات مكتبية</p>
                    <p className="text-gray-500 text-sm">Plateaux Bureau متطورة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gray-700">
                  <span className="text-blue-600 font-bold text-2xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-lg">شقق سكنية بايت ملول</p>
                    <p className="text-gray-500 text-sm">في موقع استراتيجي</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gray-700">
                  <span className="text-blue-600 font-bold text-2xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-lg">شقق سكنية بالقليعة</p>
                    <p className="text-gray-500 text-sm">بأفضل الأسعار</p>
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
