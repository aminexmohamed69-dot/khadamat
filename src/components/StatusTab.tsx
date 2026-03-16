import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Plot } from '../utils/pdfParser';

const floorPlanImages = [
  '/8b031074-8b99-44d7-a664-73b449f0666e.jpg',
  '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  '/75c59f40-7d77-4836-b9f0-0b6cebbe2b65.jpg',
  '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
  '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg'
];

// Removed getPlotStatus mock as we'll use local list of reserved plots

interface PlotWithStatus extends Plot {
  status: 'available' | 'reserved';
}

export default function StatusTab({ title = 'وضعية البقع' }: { title?: string }) {
  const [plots, setPlots] = useState<PlotWithStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<'R+2' | 'R+3' | 'R+4'>('R+2');
  const [activeType, setActiveType] = useState<'residential' | 'commercial'>('residential');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(() => {
    const initPlots = async () => {
      setLoading(true);
      // Data extracted from site plan image
      const reservedNumbers = ['5', '8', '9', '16', '17', '35', '36', '39', '40', '46', '48', '52', '61', '80'];
      
      const generatePlotsFromList = (numbers: number[], code: string, type: 'residential' | 'commercial', floor: string, category: 'R+2' | 'R+3' | 'R+4'): Plot[] => {
        return numbers.map(n => ({
          code, number: n.toString(), type, floor, category
        }));
      };

      const basePlots: Plot[] = [
        // R+2 Residential
        ...generatePlotsFromList([1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 34, 35, 37, 38, 43, 44, 45, 46, 48], 'HE2', 'residential', '2', 'R+2'),
        // R+2 Commercial
        ...generatePlotsFromList([8, 9, 18, 19, 32, 33, 36, 39, 40, 41, 42, 47, 49, 50, 51, 52], 'HC2', 'commercial', '2', 'R+2'),
        // R+3 Residential (empty but keeping the structure if needed)
        
        // R+3 Commercial
        ...generatePlotsFromList([20, 21, 22, 23, 24, 25, 26, 27, 53, 54, 55, 56, 57, 58, 59], 'HC3', 'commercial', '3', 'R+3'),
        // R+4 Residential
        ...generatePlotsFromList([30], 'HE4', 'residential', '4', 'R+4'),
        // R+4 Commercial
        ...generatePlotsFromList([28, 29, 31, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85], 'HC4', 'commercial', '4', 'R+4'),
      ];

      // Simulate network delay for effect
      await new Promise(resolve => setTimeout(resolve, 300));

      const plotsWithStatus = basePlots.map((p) => ({
        ...p,
        status: reservedNumbers.includes(p.number) ? 'reserved' as const : 'available' as const,
      }));
      
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
        <h3 className="text-2xl font-bold text-white drop-shadow-md">{title}</h3>
        <p className="text-blue-100">مشاهدة المخططات والمواقع الحالية للبقع</p>
      </div>

      {/* Floor Plan Slider - Always Visible */}
      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 group ring-1 ring-white/10 aspect-[16/9] md:aspect-[21/9]">
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
        <div className="flex flex-col items-center justify-center p-12 gap-4 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <Loader2 size={40} className="text-blue-400 animate-spin" />
          <p className="text-blue-100 font-medium">جاري تحديث بيانات البقع...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-8 pt-4">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-2 drop-shadow-md">تصفية البقع حسب الفئة</h4>
              <p className="text-blue-100/80">اختر الطابق ونوع البقعة لعرض التفاصيل في الجدول أدناه</p>
            </div>
          </div>

          {/* R+ Tabs */}
          <div className="flex justify-center gap-6">
            {(['R+2', 'R+3', 'R+4'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl font-black transition-all backdrop-blur-md border ${
                  activeCategory === cat
                    ? 'bg-blue-600/90 text-white shadow-[0_8px_32px_rgba(37,99,235,0.4)] border-blue-500/50'
                    : 'bg-black/30 text-blue-100 hover:bg-black/50 border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Residential/Commercial Switch */}
          <div className="flex justify-center">
            <div className="bg-black/40 backdrop-blur-xl p-1.5 rounded-2xl flex gap-2 border border-white/10">
              <button
                onClick={() => setActiveType('residential')}
                className={`px-8 py-2.5 rounded-xl font-bold transition-all ${
                  activeType === 'residential'
                    ? 'bg-white/10 text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-white/20'
                    : 'text-blue-200/60 hover:text-white hover:bg-white/5'
                }`}
              >
                البقع السكنية
              </button>
              <button
                onClick={() => setActiveType('commercial')}
                className={`px-8 py-2.5 rounded-xl font-bold transition-all ${
                  activeType === 'commercial'
                    ? 'bg-white/10 text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-white/20'
                    : 'text-blue-200/60 hover:text-white hover:bg-white/5'
                }`}
              >
                البقع التجارية
              </button>
            </div>
          </div>

          {/* Plots Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 max-w-5xl mx-auto">
            {filteredPlots.length > 0 ? (
              filteredPlots.map((plot, idx) => (
                <div
                  key={idx}
                  className={`group border p-4 rounded-3xl transition-all duration-500 flex flex-col items-center gap-3 text-center relative backdrop-blur-3xl hover:-translate-y-2 hover:scale-105 shadow-xl ${
                    plot.status === 'available'
                      ? 'bg-emerald-500 border-emerald-400 shadow-[0_20px_40px_rgba(16,185,129,0.3)]'
                      : 'bg-red-600 border-red-500 shadow-[0_10px_30px_rgba(220,38,38,0.4)]'
                  }`}
                >
                  <div className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white shadow-xl"></span>
                  </div>

                  <div className="text-base font-black flex items-center gap-2 text-white drop-shadow-sm">
                    <span>{plot.code}</span>
                    <span className="text-white/30">|</span>
                    <span>{plot.number}</span>
                  </div>
                  
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full w-full justify-center ${
                    plot.status === 'available' ? 'bg-black/10' : 'bg-black/20'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      plot.status === 'available' ? 'bg-white animate-pulse' : 'bg-red-200'
                    }`} />
                    <span className={`text-xs font-black tracking-wider ${
                      plot.status === 'available' ? 'text-white' : 'text-red-100'
                    }`}>
                      {plot.status === 'available' ? 'متاحة' : 'محجوزة'}
                    </span>
                  </div>

                  {plot.status === 'available' && (
                    <a 
                      href={`https://wa.me/212702060323?text=${encodeURIComponent(`السلام عليكم\nأرغب في حجز البقعة رقم ${plot.number} (${plot.code})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 bg-white text-emerald-700 text-xs font-black rounded-xl hover:bg-emerald-50 transition-all flex items-center justify-center shadow-lg group-hover:animate-bounce mt-1"
                    >
                      حجز الآن
                    </a>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <p className="text-blue-200 font-medium text-lg">لا توجد بقع متوفرة في هذا القسم حالياً</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
