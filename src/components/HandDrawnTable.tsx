import React, { useState } from 'react';

type Building = 'A' | 'B' | 'C' | 'D';

interface FloorData {
  id: number;
  label: string;
  floorKey: string;
  apartments: number[];
}

// Reserved apartments: building -> floorKey -> array of reserved apartment numbers
const reservedApartments: Record<string, Record<string, number[]>> = {
  A: {
    '2eme': [1],
    '3eme': [1],
  },
  B: {
    'rdc': [2],
    '1er': [2],
    '2eme': [1, 2],
    '3eme': [2],
    '4eme': [2],
  },
  C: {
    'rdc': [2],
    '2eme': [2],
    '3eme': [1],
  },
  D: {
    '2eme': [2],
    '3eme': [2],
  },
};

const isReserved = (building: Building, floorKey: string, aptNum: number): boolean => {
  return reservedApartments[building]?.[floorKey]?.includes(aptNum) ?? false;
};

const buildingData: Record<Building, FloorData[]> = {
  A: [
    { id: 1, label: 'الطابق الأول',  floorKey: '1er',  apartments: [1, 2] },
    { id: 2, label: 'الطابق الثاني', floorKey: '2eme', apartments: [1, 2] },
    { id: 3, label: 'الطابق الثالث', floorKey: '3eme', apartments: [1, 2] },
    { id: 4, label: 'الطابق الرابع', floorKey: '4eme', apartments: [1, 2] },
  ],
  B: [
    { id: 0, label: 'الطابق الأرضي', floorKey: 'rdc',  apartments: [1, 2] },
    { id: 1, label: 'الطابق الأول',  floorKey: '1er',  apartments: [1, 2] },
    { id: 2, label: 'الطابق الثاني', floorKey: '2eme', apartments: [1, 2] },
    { id: 3, label: 'الطابق الثالث', floorKey: '3eme', apartments: [1, 2] },
    { id: 4, label: 'الطابق الرابع', floorKey: '4eme', apartments: [1, 2] },
  ],
  C: [
    { id: 0, label: 'الطابق الأرضي', floorKey: 'rdc',  apartments: [1, 2] },
    { id: 1, label: 'الطابق الأول',  floorKey: '1er',  apartments: [1, 2] },
    { id: 2, label: 'الطابق الثاني', floorKey: '2eme', apartments: [1, 2] },
    { id: 3, label: 'الطابق الثالث', floorKey: '3eme', apartments: [1, 2] },
    { id: 4, label: 'الطابق الرابع', floorKey: '4eme', apartments: [1, 2] },
  ],
  D: [
    { id: 1, label: 'الطابق الأول',  floorKey: '1er',  apartments: [1, 2] },
    { id: 2, label: 'الطابق الثاني', floorKey: '2eme', apartments: [1, 2] },
    { id: 3, label: 'الطابق الثالث', floorKey: '3eme', apartments: [1, 2] },
    { id: 4, label: 'الطابق الرابع', floorKey: '4eme', apartments: [1, 2] },
  ],
};

const buildings: { key: Building; label: string }[] = [
  { key: 'A', label: 'عمارة A' },
  { key: 'B', label: 'عمارة B' },
  { key: 'C', label: 'عمارة C' },
  { key: 'D', label: 'عمارة D' },
];

const ApartmentStatus: React.FC = () => {
  const [activeBuilding, setActiveBuilding] = useState<Building>('A');

  const floors = buildingData[activeBuilding];

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-2 text-center md:text-right">
        <h3 className="text-3xl font-black text-white drop-shadow-md">وضعية الشقق</h3>
        <p className="text-blue-100/80">اختر العمارة لمشاهدة حالة الشقق المتوفرة</p>
      </div>

      {/* Building Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {buildings.map((b) => (
          <button
            key={b.key}
            onClick={() => setActiveBuilding(b.key)}
            className={`relative px-8 py-3 rounded-2xl font-black text-lg transition-all duration-500 backdrop-blur-md border ${
              activeBuilding === b.key
                ? 'bg-emerald-600/90 text-white shadow-[0_8px_32px_rgba(16,185,129,0.4)] border-emerald-500/50 scale-105'
                : 'bg-white/5 text-blue-100/70 hover:bg-white/10 border-white/10 hover:text-white'
            }`}
          >
            {b.label}
            {/* Active indicator line going down */}
            {activeBuilding === b.key && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-emerald-400 rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Vertical line from active tab */}
      <div className="flex justify-center">
        <div className="w-px h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/10 p-6 shadow-xl">
        <div className="text-center mb-6">
          <span className="text-emerald-400 font-black text-2xl">{buildings.find(b => b.key === activeBuilding)?.label}</span>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-4 text-right text-blue-300 font-bold text-base border-b border-white/10 min-w-[130px]">
                الطابق
              </th>
              <th colSpan={5} className="py-4 px-4 text-center text-blue-300 font-bold text-base border-b border-white/10">
                الشقق
              </th>
            </tr>
          </thead>

          <tbody>
            {floors.map((floor) => (
              <tr key={floor.id} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                <td className="py-6 px-4 text-right">
                  <span className="text-white font-bold text-sm bg-white/5 px-4 py-2 rounded-xl border border-white/10 inline-block whitespace-nowrap">
                    {floor.label}
                  </span>
                </td>

                {floor.apartments.map((aptNum) => {
                  const reserved = isReserved(activeBuilding, floor.floorKey, aptNum);

                  return reserved ? (
                    <td key={aptNum} className="py-6 px-2 text-center">
                      <div className="inline-flex flex-col items-center gap-1.5">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-red-600 border-2 border-red-500 shadow-[0_4px_20px_rgba(220,38,38,0.4)] flex items-center justify-center relative">
                          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-400 rounded-full flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <span className="text-white/90 font-black text-sm md:text-base">{aptNum}</span>
                        </div>
                        <span className="text-[10px] text-red-400 font-bold">محجوزة</span>
                      </div>
                    </td>
                  ) : (
                    <td key={aptNum} className="py-6 px-2 text-center">
                      <a
                        href={`https://wa.me/212702060323?text=${encodeURIComponent(`السلام عليكم\nأرغب في الاستفسار عن الشقة رقم ${aptNum} في ${floor.label} - ${buildings.find(b => b.key === activeBuilding)?.label}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-col items-center gap-1.5 cursor-pointer"
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500 border-2 border-emerald-400 shadow-[0_4px_20px_rgba(16,185,129,0.35)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] group-hover:-translate-y-1 relative">
                          <div className="absolute -top-0.5 -right-0.5 w-3 h-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow"></span>
                          </div>
                          <span className="text-white font-black text-sm md:text-base">{aptNum}</span>
                        </div>
                        <span className="text-[10px] text-emerald-300/80 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">متاحة</span>
                      </a>
                    </td>
                  );
                })}
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

export default ApartmentStatus;
