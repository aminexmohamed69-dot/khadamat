import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { parseProjectPdf, Plot } from '../utils/pdfParser';

const floorPlanImages = [
  '/8b031074-8b99-44d7-a664-73b449f0666e.jpg',
  '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  '/75c59f40-7d77-4836-b9f0-0b6cebbe2b65.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
  '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg'
];

// Mock API response
const getPlotStatus = async (plotNumber: string) => {
  // Simulating an API call
  return new Promise<'available' | 'reserved'>((resolve) => {
    setTimeout(() => {
      // Set all plots to available as requested by user
      resolve('available');
    }, 100);
  });
};

interface PlotWithStatus extends Plot {
  status: 'available' | 'reserved';
}

export default function StatusTab() {
  const [plots, setPlots] = useState<PlotWithStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<'R+2' | 'R+3' | 'R+4'>('R+2');
  const [activeType, setActiveType] = useState<'residential' | 'commercial'>('residential');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(() => {
    const initPlots = async () => {
      setLoading(true);
      // Data extracted from site plan image
      const basePlots: Plot[] = [
        // R+2 Plots (HC2/HE2)
        ...[33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55].map(n => ({ code: 'HC2', number: n.toString(), type: 'commercial' as const, floor: '2', category: 'R+2' as const })),
        ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => ({ code: 'HE2', number: n.toString(), type: 'residential' as const, floor: '2', category: 'R+2' as const })),
        
        // R+3 Plots (HC3/HE3)
        ...[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(n => ({ code: 'HC3', number: n.toString(), type: 'commercial' as const, floor: '3', category: 'R+3' as const })),
        ...[40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50].map(n => ({ code: 'HE3', number: n.toString(), type: 'residential' as const, floor: '3', category: 'R+3' as const })),
        
        // R+4 Plots (HC4/HE4)
        ...[60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70].map(n => ({ code: 'HC4', number: n.toString(), type: 'commercial' as const, floor: '4', category: 'R+4' as const })),
        ...[71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81].map(n => ({ code: 'HE4', number: n.toString(), type: 'residential' as const, floor: '4', category: 'R+4' as const })),
      ];

      const plotsWithStatus = await Promise.all(
        basePlots.map(async (p) => ({
          ...p,
          status: await getPlotStatus(p.number),
        }))
      );
      
      setPlots(plotsWithStatus);
      setLoading(false);
    };

    initPlots();
  }, []);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % floorPlanImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + floorPlanImages.length) % floorPlanImages.length);
  };

  const filteredPlots = plots.filter(
    (p) => p.category === activeCategory && p.type === activeType
  );

  const floorLabels = [
    'مخطط الموقع العام (Site Plan)',
    'الطابق الرابع (4ème)',
    'الطابق الثالث (3ème)',
    'الطابق الأول (1ère)',
    'الطابق الأرضي (RDC)'
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-900">وضعية الشقق</h3>
        <p className="text-gray-500">مشاهدة المخططات والمواقع الحالية للبقع</p>
      </div>

      {/* Floor Plan Slider - Always Visible */}
      <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl group ring-1 ring-black/5 aspect-[16/9] md:aspect-[21/9]">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img 
            src={floorPlanImages[currentSlideIndex]} 
            alt={floorLabels[currentSlideIndex]}
            className="max-w-full max-h-full object-contain transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-[1.02]"
          />
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-8 pointer-events-none z-30">
          <button 
            onClick={handlePrevSlide}
            className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/80 md:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-100 border border-gray-100/50"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>
          
          <button 
            onClick={handleNextSlide}
            className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/80 md:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-100 border border-gray-100/50"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {floorPlanImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlideIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-12 gap-4 bg-gray-50 rounded-[2.5rem] border border-gray-100">
          <Loader2 size={40} className="text-blue-600 animate-spin" />
          <p className="text-gray-500 font-medium">جاري تحديث بيانات البقع...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-8 pt-4">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">تصفية البقع حسب الفئة</h4>
              <p className="text-gray-500">اختر الطابق ونوع البقعة لعرض التفاصيل في الجدول أدناه</p>
            </div>
          </div>

          {/* R+ Tabs */}
          <div className="flex justify-center gap-6">
            {(['R+2', 'R+3', 'R+4'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl font-black transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Residential/Commercial Switch */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-2">
              <button
                onClick={() => setActiveType('residential')}
                className={`px-8 py-2.5 rounded-xl font-bold transition-all ${
                  activeType === 'residential'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                البقع السكنية
              </button>
              <button
                onClick={() => setActiveType('commercial')}
                className={`px-8 py-2.5 rounded-xl font-bold transition-all ${
                  activeType === 'commercial'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                البقع التجارية
              </button>
            </div>
          </div>

          {/* Plots Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredPlots.length > 0 ? (
              filteredPlots.map((plot, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center"
                >
                  <div className="text-xl font-black text-gray-800 flex items-center gap-2">
                    <span>{plot.code}</span>
                    <span className="text-blue-500 text-sm">●</span>
                    <span>{plot.number}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      plot.status === 'available' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                    }`} />
                    <span className={`text-xs font-bold ${
                      plot.status === 'available' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {plot.status === 'available' ? 'متاحة' : 'محجوزة'}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">لا توجد بقع متوفرة في هذا القسم حالياً</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
