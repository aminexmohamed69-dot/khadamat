import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function InteractiveProjectBox({ onShowDetails }: { onShowDetails: () => void }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    // Smooth scroll down slightly to ensure the new content is visible
    setTimeout(() => {
      const element = document.getElementById('other-projects-content');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleClick = () => {
    setShowArrow(true);
    onShowDetails();
    
    // Scroll to the projects details section after a short delay
    setTimeout(() => {
      const element = document.getElementById('project-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="other-projects">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {!isRevealed ? (
          <div className="text-center space-y-4">
            <button 
              onClick={handleReveal}
              className="group relative flex flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
            >
              <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                اضغط للمزيد
              </span>
              <div className="w-12 h-1 bg-blue-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </button>
          </div>
        ) : (
          <div id="other-projects-content" className="w-full space-y-12 animate-fadeIn">
            {/* مشاريع اخرى Box */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2.5rem] blur-xl opacity-10 group-hover:opacity-20 transition duration-500"></div>

              <div className="relative bg-white rounded-[2.5rem] p-16 shadow-2xl transition duration-500 border border-blue-50">
                <div className="text-center">
                  <h3 className="text-5xl lg:text-6xl font-black text-blue-600 mb-6 transition relative inline-block">
                    مشاريع أخرى
                    <div className="absolute -bottom-4 left-0 right-0 h-1.5 bg-blue-600 rounded-full shadow-sm"></div>
                  </h3>
                  <p className="text-gray-500 text-xl mt-10 font-medium">
                    استكشف مشاريعنا الأخرى والخدمات المتميزة
                  </p>
                </div>
              </div>
            </div>

            {/* تحقق Button */}
            <div className="flex flex-col items-center gap-8">
              <button
                onClick={handleClick}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                تحقق
              </button>

              {/* Scroll Down Arrow */}
              {showArrow && (
                <div className="animate-bounce flex flex-col items-center gap-2">
                  <span className="text-sm font-semibold text-blue-600">مرر لأسفل</span>
                  <ChevronDown size={32} className="text-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
