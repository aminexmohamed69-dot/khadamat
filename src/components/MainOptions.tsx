import { Building2, Map } from 'lucide-react';

interface MainOptionsProps {
  onSelect: (option: 'apartments' | 'land') => void;
}

export default function MainOptions({ onSelect }: MainOptionsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto py-12 px-6">
      {/* Blue Card - Land Plots */}
      <button
        onClick={() => onSelect('land')}
        className="group relative bg-white aspect-square rounded-[4rem] shadow-2xl hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] transition-all duration-700 border border-gray-100 flex flex-col items-center justify-center gap-10 overflow-hidden p-12 lg:p-20 shadow-blue-900/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="w-28 h-28 lg:w-40 lg:h-40 bg-blue-50 rounded-[2.5rem] flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 z-10 shadow-sm border border-blue-100/50">
          <Building2 size={80} strokeWidth={1.5} />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">البقع الأرضية</h3>
          <p className="text-gray-500 text-xl lg:text-2xl font-medium max-w-[300px] leading-relaxed">استكشف البقع الأرضية المتوفرة ومواقعها الاستراتيجية</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-3 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
      </button>

      {/* Orange Card - Residential Apartments */}
      <button
        onClick={() => onSelect('apartments')}
        className="group relative bg-white aspect-square rounded-[4rem] shadow-2xl hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] transition-all duration-700 border border-gray-100 flex flex-col items-center justify-center gap-10 overflow-hidden p-12 lg:p-20 shadow-orange-900/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="w-28 h-28 lg:w-40 lg:h-40 bg-orange-50 rounded-[2.5rem] flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 z-10 shadow-sm border border-orange-100/50">
          <Map size={80} strokeWidth={1.5} />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">الشقق السكنية</h3>
          <p className="text-gray-500 text-xl lg:text-2xl font-medium max-w-[300px] leading-relaxed">استكشف الشقق السكنية الفاخرة المتاحة وتفاصيلها</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
      </button>
    </div>
  );
}
