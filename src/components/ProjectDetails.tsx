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
    <section id="project-details" className="py-20 bg-transparent animate-fadeIn">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={currentOnBack}
            className="flex items-center gap-2 text-blue-300 hover:text-white font-bold transition-all group bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
          >
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            <span>{backLabel}</span>
          </button>
          
          <div className="text-right">
            <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-md mb-2">
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
            <div className="text-center space-y-6 animate-fadeIn py-20 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="w-32 h-32 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center mx-auto shadow-inner border border-orange-500/30">
                <span className="text-5xl font-black drop-shadow-md">!</span>
              </div>
              <h3 className="text-6xl font-black text-white drop-shadow-md">قريباً</h3>
              <p className="text-blue-100 text-xl font-medium">نحن نعمل على تجهيز هذا القسم، ترقبوا التحديث القادم.</p>
              <button 
                onClick={handleBackToSelection}
                className="text-blue-300 font-bold hover:text-white hover:underline transition-colors mt-4 block mx-auto"
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
