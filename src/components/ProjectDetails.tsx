
import LandPlotsCard from './LandPlotsCard';
import ApartmentsCard from './ApartmentsCard';

export default function ProjectDetails() {
  return (
    <section id="project-details" className="py-20 bg-gradient-to-b from-white to-gray-50 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            تفاصيل المشروع
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
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
