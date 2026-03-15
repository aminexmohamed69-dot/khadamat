import { Building2, Map } from 'lucide-react';

interface MainOptionsProps {
  onSelect: (option: 'apartments' | 'land') => void;
}

export default function MainOptions({ onSelect }: MainOptionsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-12">
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-12">
      {/* Blue Card - Land Plots (Scrambled as per request) */}
      <button
        onClick={() => onSelect('land')}
        className="group relative bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center gap-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500 z-10">
          <Building2 size={40} />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">البقع الأرضية</h3>
          <p className="text-gray-500">استكشف البقع الأرضية المتوفرة</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </button>

      {/* Orange Card - Residential Apartments (Scrambled as per request) */}
      <button
        onClick={() => onSelect('apartments')}
        className="group relative bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center gap-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-500 z-10">
          <Map size={40} />
        </div>
        
        <div className="text-center z-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">الشقق السكنية</h3>
          <p className="text-gray-500">استكشف الشقق المتاحة وتفاصيلها</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </button>
    </div>
    </div>
  );
}
