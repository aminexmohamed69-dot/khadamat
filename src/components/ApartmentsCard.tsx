import { useState } from 'react';

export default function ApartmentsCard() {
  const [activeTab, setActiveTab] = useState('design');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    floor: '1',
    apartmentNumber: '',
  });

  const apartmentImages = [
    '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
    '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
    '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg',
  ];

  const progressImages = [
    '/New_Project_(10).png',
    '/New_Project_(7).png',
    '/image.png',
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
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition duration-300" style={{fontFamily: 'Cairo, sans-serif'}}>
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-6">
        <h3 className="text-3xl font-black text-white">الشقق السكنية</h3>
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
                  ? 'text-emerald-600 border-emerald-600 bg-white'
                  : 'text-gray-600 border-transparent hover:text-emerald-500 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-12">
        {(activeTab === 'booking' || activeTab === 'progress' || activeTab === 'status' || activeTab === 'design') && (
          <div className="animate-in fade-in zoom-in duration-500 mb-8">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {(activeTab === 'progress' ? progressImages : [
                '/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg',
                '/376b81f7-6ef7-42cf-a612-bdcfa1bfa2e0.jpg',
                '/3d6e4c86-ffaa-489b-b6b1-95d70af6f989.jpg'
              ]).map((img, index) => (
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
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    الطابق
                  </label>
                  <select
                    value={formData.floor}
                    onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition font-semibold"
                  >
                    <option value="0">0 (الطابق الأرضي)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    رقم الشقة
                  </label>
                  <input
                    type="text"
                    value={formData.apartmentNumber}
                    onChange={(e) => setFormData({ ...formData, apartmentNumber: e.target.value })}
                    placeholder="أدخل رقم الشقة"
                    className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition font-semibold"
                  />
                </div>
              </>
            )}

            {/* Always visible Confirmation Button */}
            <button
              onClick={handleSubmit}
              className={`bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-xl transition transform hover:scale-110 shadow-lg hover:shadow-xl whitespace-nowrap ${
                activeTab === 'booking' 
                  ? `px-10 py-3 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'animate-in fade-in zoom-in duration-500'}` 
                  : 'px-20 py-5 text-2xl animate-in fade-in zoom-in duration-500 mx-auto'
              }`}
            >
              تأكيد الحجز
            </button>
          </div>

          {/* Info Message */}
          {activeTab === 'booking' && !isFormValid && (
            <p className="text-center text-gray-500 text-sm font-medium animate-in fade-in duration-300">
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
