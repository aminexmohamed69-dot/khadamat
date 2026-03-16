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
        className="group relative bg-slate-900/60 backdrop-blur-2xl aspect-square rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_70px_rgba(59,130,246,0.3)] transition-all duration-700 border border-white/10 hover:border-blue-500/30 flex flex-col items-center justify-center gap-10 overflow-hidden p-12 lg:p-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <div className="w-28 h-28 lg:w-40 lg:h-40 bg-blue-500/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 z-10 shadow-inner border border-blue-400/30">
          <Building2 size={80} strokeWidth={1.5} />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md">البقع الأرضية</h3>
          <p className="text-blue-100 text-xl lg:text-2xl font-medium max-w-[300px] leading-relaxed">استكشف البقع الأرضية المتوفرة ومواقعها الاستراتيجية</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
      </button>

      {/* Orange Card - Residential Apartments */}
      <button
        onClick={() => onSelect('apartments')}
        className="group relative bg-slate-900/60 backdrop-blur-2xl aspect-square rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_70px_rgba(249,115,22,0.3)] transition-all duration-700 border border-white/10 hover:border-orange-500/30 flex flex-col items-center justify-center gap-10 overflow-hidden p-12 lg:p-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <div className="w-28 h-28 lg:w-40 lg:h-40 bg-orange-500/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 z-10 shadow-inner border border-orange-400/30">
          <Map size={80} strokeWidth={1.5} />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md">الشقق السكنية</h3>
          <p className="text-orange-100/90 text-xl lg:text-2xl font-medium max-w-[300px] leading-relaxed">استكشف الشقق السكنية الفاخرة المتاحة وتفاصيلها</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
      </button>
    </div>
  );
}
