import { useState } from 'react';

export default function ApartmentsCard() {
  const [activeTab, setActiveTab] = useState('design');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    floor: '1',
    apartmentNumber: '',
  });

  // const apartmentImages = []; // Removed to fix unused error

  const progressImages = [
    '/8b031074-8b99-44d7-a664-73b449f0666e.jpg',
    '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
    '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg',
  ];

  const tabs = [
    { id: 'design', label: 'تصميم العمارة' },
    { id: 'status', label: 'وضعية الشقق' },
    { id: 'progress', label: 'تقدم الأشغال' },
    { id: 'booking', label: 'حجز شقة' },
  ];

  const itemLabels: Record<string, string> = {
    design: 'التصميم',
    status: 'الوضعية',
    progress: 'تقدم الأشغال',
    booking: 'الحجز'
  };

  const isFormValid = formData.apartmentNumber.trim() !== '';

  const handleSubmit = () => {
    if (activeTab === 'booking' && !isFormValid) {
      alert('الرجاء إدخال رقم الشقة');
      return;
    }

    let message = '';
    if (activeTab === 'booking') {
      message = `السلام عليكم\nأرغب في حجز شقة\n\nالطابق: ${formData.floor}\nرقم الشقة: ${formData.apartmentNumber}`;
    } else {
      const tabLabel = tabs.find(t => t.id === activeTab)?.label || '';
      message = `السلام عليكم\nأنا مهتم بمشروع الشقق السكنية\nالقسم: ${tabLabel}`;
    }

    const whatsappUrl = `https://wa.me/212702060323?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden border border-white/10 transition-all duration-500 hover:border-emerald-500/30 group" style={{fontFamily: 'Cairo, sans-serif'}}>
      <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-500/10 px-10 py-8 backdrop-blur-md border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <h3 className="text-4xl font-black text-white drop-shadow-lg tracking-tight relative z-10">الشقق السكنية</h3>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-white/5 bg-black/40 overflow-x-auto no-scrollbar">
        <div className="flex px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-bold text-center transition-all duration-300 whitespace-nowrap text-sm lg:text-base border-b-3 ${
                activeTab === tab.id
                  ? 'text-white border-emerald-400 bg-black/40 shadow-[inset_0_-4px_10px_rgba(52,211,153,0.2)]'
                  : 'text-blue-100/70 border-transparent hover:text-white hover:bg-black/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-12">
        {activeTab === 'progress' && (
          <div className="animate-in fade-in zoom-in duration-500 mb-8">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {progressImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer h-48"
                >
                  <img
                    src={img}
                    alt={`صورة ${itemLabels[activeTab]} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-emerald-400 transition"
                >
                  ✕
                </button>
                <img
                  src={selectedImage}
                  alt="صورة موسعة"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          )}

          {/* Horizontal Form Layout */}
          <div className={`flex flex-col gap-6 items-center ${activeTab === 'booking' ? 'lg:flex-row lg:items-end' : 'justify-center py-8'}`}>
            {activeTab === 'booking' && (
              <>
                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-white mb-3 drop-shadow-md">
                    الطابق
                  </label>
                  <select
                    value={formData.floor}
                    onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                    className="w-full px-5 py-3 border border-white/20 bg-black/40 text-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition font-semibold backdrop-blur-md appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'left 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option className="bg-gray-800" value="0">0 (الطابق الأرضي)</option>
                    <option className="bg-gray-800" value="1">1</option>
                    <option className="bg-gray-800" value="2">2</option>
                    <option className="bg-gray-800" value="3">3</option>
                    <option className="bg-gray-800" value="4">4</option>
                  </select>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-white mb-3 drop-shadow-md">
                    رقم الشقة
                  </label>
                  <input
                    type="text"
                    value={formData.apartmentNumber}
                    onChange={(e) => setFormData({ ...formData, apartmentNumber: e.target.value })}
                    placeholder="أدخل رقم الشقة"
                    className="w-full px-5 py-3 border border-white/20 bg-black/40 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition font-semibold backdrop-blur-md"
                  />
                </div>
              </>
            )}

            {/* Only visible on Booking tab */}
            {activeTab === 'booking' && (
              <button
                onClick={handleSubmit}
                className={`flex items-center gap-3 justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] border border-emerald-400/30 px-12 py-4 text-xl w-full sm:w-auto mx-auto ${!isFormValid ? 'opacity-50 cursor-not-allowed border-none transform-none hover:transform-none shadow-none' : 'animate-in fade-in zoom-in duration-500'}`}
              >
                <span>تأكيد الحجز</span>
              </button>
            )}
          </div>

          {/* Info Message */}
          {activeTab === 'booking' && !isFormValid && (
            <p className="text-center text-blue-200 text-sm font-medium animate-in fade-in duration-300 bg-black/40 py-2 px-4 rounded-full max-w-max mx-auto backdrop-blur-sm border border-white/10 shadow-inner">
              يرجى إدخال رقم الشقة لإتمام الحجز
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-in {
          animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}
