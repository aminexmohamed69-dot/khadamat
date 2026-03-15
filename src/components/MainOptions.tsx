import { Building2, Map } from 'lucide-react';

interface MainOptionsProps {
  onSelect: (option: 'apartments' | 'land') => void;
}

export default function MainOptions({ onSelect }: MainOptionsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto py-12 px-4">
      {/* Blue Card - Land Plots */}
      <button
        onClick={() => onSelect('land')}
        className="group relative bg-white p-12 lg:p-16 rounded-[3rem] shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 flex flex-col items-center gap-8 overflow-hidden min-h-[400px] justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="w-24 h-24 lg:w-32 lg:h-32 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 z-10 shadow-sm border border-blue-100/50">
          <Building2 size={60} />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">البقع الأرضية</h3>
          <p className="text-gray-500 text-xl lg:text-2xl font-medium">استكشف البقع الأرضية المتوفرة ومواقعها الاستراتيجية</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </button>

      {/* Orange Card - Residential Apartments */}
      <button
        onClick={() => onSelect('apartments')}
        className="group relative bg-white p-12 lg:p-16 rounded-[3rem] shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 flex flex-col items-center gap-8 overflow-hidden min-h-[400px] justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="w-24 h-24 lg:w-32 lg:h-32 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 z-10 shadow-sm border border-orange-100/50">
          <Map size={60} />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">الشقق السكنية</h3>
          <p className="text-gray-500 text-xl lg:text-2xl font-medium">استكشف الشقق السكنية الفاخرة المتاحة وتفاصيلها</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </button>
    </div>
    </div>
  );
}
