import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const landImages = [
  '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
];

const apartmentImages = [
  '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
];

interface GalleryProps {
  title: string;
  images: string[];
}

function Gallery({ title, images }: GalleryProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-bold text-gray-800 mr-2">{title}</h4>
      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg group">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <button
          onClick={prev}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        <button
          onClick={next}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${idx === current ? 'bg-white w-4' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`relative shrink-0 w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all ${idx === current ? 'border-blue-600 scale-105' : 'border-transparent opacity-60'
              }`}
          >
            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProgressTab() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-900">تقدم الأشغال</h3>
        <p className="text-gray-500">تابع آخر التحديثات والصور من موقع المشروع</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <Gallery title="البقع" images={landImages} />
        <Gallery title="الشقق" images={apartmentImages} />
      </div>
    </div>
  );
}
