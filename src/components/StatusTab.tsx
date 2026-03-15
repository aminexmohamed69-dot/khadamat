import { useState, useEffect } from 'react';
import { parseProjectPdf, Plot } from '../utils/pdfParser';
import { Loader2 } from 'lucide-react';

// Mock API response
const getPlotStatus = async (plotNumber: string) => {
  // Simulating an API call
  return new Promise<'available' | 'reserved'>((resolve) => {
    setTimeout(() => {
      // Logic to make it look realistic: even numbers available, odd reserved
      resolve(parseInt(plotNumber) % 3 === 0 ? 'reserved' : 'available');
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

  useEffect(() => {
    const initPlots = async () => {
      setLoading(true);
      const extractedPlots = await parseProjectPdf('/plan.pdf');
      
      const plotsWithStatus = await Promise.all(
        extractedPlots.map(async (p) => ({
          ...p,
          status: await getPlotStatus(p.number),
        }))
      );
      
      setPlots(plotsWithStatus);
      setLoading(false);
    };

    initPlots();
  }, []);

  const filteredPlots = plots.filter(
    (p) => p.category === activeCategory && p.type === activeType
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 gap-4">
        <Loader2 size={48} className="text-blue-600 animate-spin" />
        <p className="text-gray-500 font-medium">جاري تحليل المخطط واستخلاص البيانات...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-900">وضعية الشقق</h3>
        <p className="text-gray-500">اختر الطابق ونوع البقعة لعرض التفاصيل</p>
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
    </div>
  );
}
