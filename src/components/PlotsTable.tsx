import React, { useState } from 'react';

type PlotCategory = 'R+2' | 'R+3' | 'R+4';

interface PlotRowData {
  id: number;
  label: string;
  typeKey: string;
  plots: number[];
  codePrefix: string;
}

const reservedNumbers = ['5', '8', '9', '16', '17', '35', '36', '39', '40', '46', '48', '52', '61', '80'];

const isReserved = (plotNum: number): boolean => {
  return reservedNumbers.includes(plotNum.toString());
};

const categoryData: Record<PlotCategory, PlotRowData[]> = {
  'R+2': [
    { id: 0, label: 'بقع سكنية', typeKey: 'residential', plots: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 34, 35, 37, 38, 43, 44, 45, 46, 48], codePrefix: 'HE2' },
    { id: 1, label: 'بقع تجارية', typeKey: 'commercial',  plots: [8, 9, 18, 19, 32, 33, 36, 39, 40, 41, 42, 47, 49, 50, 51, 52], codePrefix: 'HC2' }
  ],
  'R+3': [
    { id: 1, label: 'بقع تجارية', typeKey: 'commercial',  plots: [20, 21, 22, 23, 24, 25, 26, 27, 53, 54, 55, 56, 57, 58, 59], codePrefix: 'HC3' }
  ],
  'R+4': [
    { id: 0, label: 'بقع سكنية', typeKey: 'residential', plots: [30], codePrefix: 'HE4' },
    { id: 1, label: 'بقع تجارية', typeKey: 'commercial',  plots: [28, 29, 31, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85], codePrefix: 'HC4' }
  ],
};

const categories: { key: PlotCategory; label: string }[] = [
  { key: 'R+2', label: 'فئة R+2' },
  { key: 'R+3', label: 'فئة R+3' },
  { key: 'R+4', label: 'فئة R+4' },
];

const PlotsTable: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PlotCategory>('R+2');

  const rows = categoryData[activeCategory];

  return (
    <div className="space-y-10 animate-fadeIn" style={{ direction: 'rtl' }}>
      {/* Header */}
      <div className="flex flex-col gap-2 text-center md:text-right">
        <h3 className="text-3xl font-black text-white drop-shadow-md">وضعية البقع في الجدول</h3>
        <p className="text-blue-100/80">اختر الفئة لمشاهدة حالة البقع المتوفرة بالتفصيل</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActiveCategory(c.key)}
            className={`relative px-8 py-3 rounded-2xl font-black text-lg transition-all duration-500 backdrop-blur-md border ${
              activeCategory === c.key
                ? 'bg-blue-600/90 text-white shadow-[0_8px_32px_rgba(37,99,235,0.4)] border-blue-500/50 scale-105'
                : 'bg-white/5 text-blue-100/70 hover:bg-white/10 border-white/10 hover:text-white'
            }`}
          >
            {c.label}
            {activeCategory === c.key && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-blue-400 rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Vertical line from active tab */}
      <div className="flex justify-center">
        <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/10 p-6 shadow-xl">
        <div className="text-center mb-6">
          <span className="text-blue-400 font-black text-2xl">{categories.find(c => c.key === activeCategory)?.label}</span>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-4 text-right text-blue-300 font-bold text-base border-b border-white/10 min-w-[130px] w-1/5">
                نوع البقعة
              </th>
              <th className="py-4 px-4 text-right text-blue-300 font-bold text-base border-b border-white/10">
                البقع
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                <td className="py-6 px-4 text-right align-middle border-l border-white/5 hidden md:table-cell">
                  <span className="text-white font-bold text-sm bg-white/5 px-4 py-2 rounded-xl border border-white/10 inline-block whitespace-nowrap">
                    {row.label}
                  </span>
                </td>

                <td className="py-6 px-4">
                  {/* Mobile Label */}
                  <div className="md:hidden mb-4">
                    <span className="text-white font-bold text-sm bg-white/5 px-4 py-2 rounded-xl border border-white/10 inline-block whitespace-nowrap">
                      {row.label}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
                    {row.plots.map((plotNum) => {
                      const reserved = isReserved(plotNum);

                      return reserved ? (
                        <div key={plotNum} className="inline-flex flex-col items-center gap-1.5 shrink-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-red-600 border-2 border-red-500 shadow-[0_4px_20px_rgba(220,38,38,0.4)] flex items-center justify-center relative">
                            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-400 rounded-full flex items-center justify-center">
                              <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <span className="text-white/90 font-black text-sm md:text-base">{plotNum}</span>
                          </div>
                          <span className="text-[10px] text-red-400 font-bold">محجوزة</span>
                        </div>
                      ) : (
                        <a
                          key={plotNum}
                          href={`https://wa.me/212702060323?text=${encodeURIComponent(`السلام عليكم\nأرغب في الاستفسار عن البقعة رقم ${plotNum} (${row.codePrefix}) من ${categories.find(c => c.key === activeCategory)?.label}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex flex-col items-center gap-1.5 cursor-pointer shrink-0"
                        >
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500 border-2 border-emerald-400 shadow-[0_4px_20px_rgba(16,185,129,0.35)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] group-hover:-translate-y-1 relative">
                            <div className="absolute -top-0.5 -right-0.5 w-3 h-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow"></span>
                            </div>
                            <span className="text-white font-black text-sm md:text-base">{plotNum}</span>
                          </div>
                          <span className="text-[10px] text-emerald-300/80 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">متاحة</span>
                        </a>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
          <span className="text-blue-100/70 text-sm font-medium">متاحة</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-lg bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]"></div>
          <span className="text-blue-100/70 text-sm font-medium">محجوزة</span>
        </div>
      </div>
    </div>
  );
};

export default PlotsTable;
