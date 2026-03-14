import { useState } from 'react';

export default function LandPlotsCard() {
  const [activeTab, setActiveTab] = useState('design');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    floor: 'R+2',
    type: 'سكنية',
    plotNumber: '',
  });

  const plotImages = [
    '/75c59f40-7d77-4836-b9f0-0b6cebbe2b65.jpg',
    '/8b031074-8b99-44d7-a664-73b449f0666e.jpg',
    '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
  ];

  const progressImages = [
    '/8b031074-8b99-44d7-a664-73b449f0666e.jpg',
    '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
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
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition duration-300" style={{fontFamily: 'Cairo, sans-serif'}}>
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-6">
        <h3 className="text-3xl font-black text-white">البقع الأرضية</h3>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-gray-50 overflow-x-auto no-scrollbar">
        <div className="flex px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-bold text-center transition-all duration-300 whitespace-nowrap text-sm lg:text-base border-b-3 ${
                activeTab === tab.id
                  ? 'text-amber-600 border-amber-600 bg-white'
                  : 'text-gray-600 border-transparent hover:text-amber-500 hover:bg-gray-100'
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
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    نوع الطابق
                  </label>
                  <select
                    value={formData.floor}
                    onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition font-semibold"
                  >
                    <option value="R+2">R+2</option>
                    <option value="R+3">R+3</option>
                    <option value="R+4">R+4</option>
                  </select>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    نوع البقعة
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition font-semibold"
                  >
                    <option value="سكنية">سكنية</option>
                    <option value="تجارية">تجارية</option>
                  </select>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    رقم البقعة
                  </label>
                  <input
                    type="text"
                    value={formData.plotNumber}
                    onChange={(e) => setFormData({ ...formData, plotNumber: e.target.value })}
                    placeholder="أدخل رقم البقعة"
                    className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition font-semibold"
                  />
                </div>
              </>
            )}

            {/* Only visible on Booking tab */}
            {activeTab === 'booking' && (
              <button
                onClick={handleSubmit}
                className={`bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold rounded-xl transition transform hover:scale-110 shadow-lg hover:shadow-xl whitespace-nowrap px-10 py-3 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'animate-in fade-in zoom-in duration-500'}`}
              >
                تأكيد الحجز
              </button>
            )}
          </div>

          {/* Info Message */}
          {activeTab === 'booking' && !isFormValid && (
            <p className="text-center text-gray-500 text-sm font-medium animate-in fade-in duration-300">
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
