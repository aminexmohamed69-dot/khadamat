import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import MainOptions from './MainOptions';
import ApartmentSystem from './ApartmentSystem';

export default function ProjectDetails({ onBack }: { onBack?: () => void }) {
  const [view, setView] = useState<'selection' | 'apartments' | 'land'>('selection');

  const handleBackToSelection = () => {
    setView('selection');
  };

  const currentOnBack = view === 'selection' ? onBack : handleBackToSelection;
  const backLabel = view === 'selection' ? 'العودة للرئيسية' : 'العودة للخيارات';

  return (
    <section id="project-details" className="py-20 bg-gradient-to-b from-white to-gray-50 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={currentOnBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition-all group"
          >
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            <span>{backLabel}</span>
          </button>
          
          <div className="text-right">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              {view === 'selection' ? 'استكشف المشروع' : 'تفاصيل المشروع'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mr-0 ml-auto rounded-full"></div>
          </div>
        </div>

        <div className="min-h-[600px] flex flex-col items-center justify-center">
          {view === 'selection' && (
            <MainOptions onSelect={(option) => setView(option)} />
          )}

          {view === 'land' && (
            <div className="text-center space-y-6 animate-fadeIn py-20">
              <div className="w-32 h-32 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <span className="text-5xl font-black">!</span>
              </div>
              <h3 className="text-6xl font-black text-gray-900">قريباً</h3>
              <p className="text-gray-500 text-xl font-medium">نحن نعمل على تجهيز هذا القسم، ترقبوا التحديث القادم.</p>
              <button 
                onClick={handleBackToSelection}
                className="text-blue-600 font-bold hover:underline"
              >
                العودة للاختيارات السابقة
              </button>
            </div>
          )}

          {view === 'apartments' && (
            <ApartmentSystem />
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
