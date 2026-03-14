import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function InteractiveProjectBox({ 
  onShowDetails, 
  isRevealed, 
}: { 
  onShowDetails: () => void;
  isRevealed: boolean;
}) {
  const [showArrow, setShowArrow] = useState(false);

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

  if (!isRevealed) return <div id="other-projects" className="py-12" />;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="other-projects">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div id="other-projects-content" className="w-full space-y-12 animate-fadeIn">
          {/* Other Projects Box */}
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

          {/* Check Button */}
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
