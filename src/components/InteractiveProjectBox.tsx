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
    <section className="py-24 bg-transparent" id="other-projects">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div id="other-projects-content" className="w-full space-y-12 animate-fadeIn">
          {/* Other Projects Box */}
          <div className="max-w-4xl mx-auto group">
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-[3rem] p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition duration-700 border border-white/20 hover:bg-white/15 hover:border-white/30 overflow-hidden">
              
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="text-center relative z-10 w-full mb-12">
                <h2 className="text-4xl lg:text-6xl font-black text-white drop-shadow-md mb-6 tracking-tight line-clamp-2 leading-tight" style={{fontFamily: 'Cairo, sans-serif'}}>
                  مشروع تجزئة وإقامة النجمة
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full group-hover:w-48 transition-all duration-700 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
              </div>
              <p className="text-blue-100 text-xl mt-10 font-medium text-center relative z-10">
                استكشف مشاريعنا الأخرى والخدمات المتميزة
              </p>
            </div>
          </div>

          {/* Check Button */}
          <div className="flex justify-center mt-12 relative z-10">
            <button 
              onClick={handleClick} // Changed from onExplore to handleClick
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.6)] border border-blue-400/30 backdrop-blur-sm group"
            >
              <span className="text-xl">استكشف المشروع</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
          {/* Scroll Down Arrow */}
          {showArrow && (
            <div className="animate-bounce flex flex-col items-center gap-2">
              <span className="text-sm font-semibold text-white">مرر لأسفل</span>
              <ChevronDown size={32} className="text-white animate-bounce drop-shadow-md" style={{ animationDelay: '0.2s' }} />
            </div>
          )}
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
