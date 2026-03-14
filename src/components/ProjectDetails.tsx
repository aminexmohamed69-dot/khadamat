import { ChevronRight } from 'lucide-react';
import LandPlotsCard from './LandPlotsCard';
import ApartmentsCard from './ApartmentsCard';

export default function ProjectDetails({ onBack }: { onBack?: () => void }) {
  return (
    <section id="project-details" className="py-20 bg-gradient-to-b from-white to-gray-50 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition-all group"
          >
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            <span>العودة للرئيسية</span>
          </button>
          
          <div className="text-right">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              تفاصيل المشروع
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mr-0 ml-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <LandPlotsCard />
          <ApartmentsCard />
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
