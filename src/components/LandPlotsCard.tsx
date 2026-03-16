import { useState } from 'react';

export default function LandPlotsCard() {
  const [activeTab, setActiveTab] = useState('design');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    floor: 'R+2',
    type: 'سكنية',
    plotNumber: '',
  });

  // const plotImages = [
  //   '/75c59f40-7d77-4836-b9f0-0b6cebbe2b65.jpg',
  //   '/8b031074-8b99-44d7-a664-73b449f0666e.jpg',
  //   '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  // ];

  const progressImages = [
    '/8b031074-8b99-44d7-a664-73b449f0666e.jpg',
    '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
    '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg',
  ];

  const tabs = [
    { id: 'design', label: 'تصميم التجزئة' },
    { id: 'status', label: 'وضعية البقع' },
    { id: 'progress', label: 'تقدم الأشغال' },
    { id: 'booking', label: 'حجز بقعة' },
  ];

  const itemLabels: Record<string, string> = {
    design: 'التصميم',
    status: 'الوضعية',
    progress: 'تقدم الأشغال',
    booking: 'الحجز'
  };

  const isFormValid = formData.plotNumber.trim() !== '';

  const handleSubmit = () => {
    if (activeTab === 'booking' && !isFormValid) {
      alert('الرجاء إدخال رقم البقعة');
      return;
    }

    let message = '';
    if (activeTab === 'booking') {
      message = `السلام عليكم\nأرغب في حجز بقعة\n\nالطابق: ${formData.floor}\nالنوع: ${formData.type}\nرقم البقعة: ${formData.plotNumber}`;
    } else {
      const tabLabel = tabs.find(t => t.id === activeTab)?.label || '';
      message = `السلام عليكم\nأنا مهتم بمشروع البقع الأرضية\nالقسم: ${tabLabel}`;
    }

    const whatsappUrl = `https://wa.me/212702060323?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden border border-white/10 transition-all duration-500 hover:border-amber-500/30 group" style={{fontFamily: 'Cairo, sans-serif'}}>
      <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/10 px-10 py-8 backdrop-blur-md border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <h3 className="text-4xl font-black text-white drop-shadow-lg tracking-tight relative z-10">البقع الأرضية</h3>
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
                  ? 'text-white border-amber-400 bg-white/10 shadow-[inset_0_-4px_10px_rgba(251,191,36,0.2)]'
                  : 'text-blue-100 border-transparent hover:text-white hover:bg-white/5'
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
                  className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-amber-400 transition"
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
                    نوع الطابق
                  </label>
                  <select
                    value={formData.floor}
                    onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                    className="w-full px-5 py-3 border border-white/20 bg-black/40 text-white rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition font-semibold backdrop-blur-md appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'left 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option className="bg-gray-800" value="R+2">R+2</option>
                    <option className="bg-gray-800" value="R+3">R+3</option>
                    <option className="bg-gray-800" value="R+4">R+4</option>
                  </select>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-white mb-3 drop-shadow-md">
                    نوع البقعة
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-5 py-3 border border-white/20 bg-black/40 text-white rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition font-semibold backdrop-blur-md appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'left 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option className="bg-gray-800" value="سكنية">سكنية</option>
                    <option className="bg-gray-800" value="تجارية">تجارية</option>
                  </select>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-white mb-3 drop-shadow-md">
                    رقم البقعة
                  </label>
                  <input
                    type="text"
                    value={formData.plotNumber}
                    onChange={(e) => setFormData({ ...formData, plotNumber: e.target.value })}
                    placeholder="أدخل رقم البقعة"
                    className="w-full px-5 py-3 border border-white/20 bg-black/40 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition font-semibold backdrop-blur-md"
                  />
                </div>
              </>
            )}

            {/* Only visible on Booking tab */}
            {activeTab === 'booking' && (
              <button
                onClick={handleSubmit}
                className={`flex items-center gap-3 justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] border border-amber-400/30 px-12 py-4 text-xl w-full sm:w-auto mx-auto ${!isFormValid ? 'opacity-50 cursor-not-allowed border-none transform-none hover:transform-none shadow-none' : 'animate-in fade-in zoom-in duration-500'}`}
              >
                <span>تأكيد الحجز</span>
              </button>
            )}
          </div>

          {/* Info Message */}
          {activeTab === 'booking' && !isFormValid && (
            <p className="text-center text-blue-200 text-sm font-medium animate-in fade-in duration-300 bg-black/20 py-2 px-4 rounded-full max-w-max mx-auto backdrop-blur-sm border border-white/5">
              يرجى إدخال رقم البقعة لإتمام الحجز
            </p>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-amber-400 transition"
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
