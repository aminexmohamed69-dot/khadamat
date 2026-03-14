import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function InteractiveProjectBox({ onShowDetails }) {
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

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100" id="other-projects">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* مشاريع اخرى Box */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white rounded-2xl p-16 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
              <div className="text-center">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  مشاريع أخرى
                </h3>
                <p className="text-gray-600 text-lg mb-8">
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
      </div>
    </section>
  );
}
