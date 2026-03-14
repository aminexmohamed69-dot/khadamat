import { useState } from 'react';

export default function LandPlotsCard() {
  const [activeTab, setActiveTab] = useState('design');
  const [formData, setFormData] = useState({
    floor: 'R+2',
    type: 'سكنية',
    plotNumber: '',
  });

  const tabs = [
    { id: 'design', label: 'تصميم التجزئة' },
    { id: 'function', label: 'وظيفة البقع' },
    { id: 'progress', label: 'تقدم الأشغال' },
    { id: 'booking', label: 'حجز بقعة' },
  ];

  const isFormValid = formData.plotNumber.trim() !== '';

  const handleSubmit = () => {
    if (!isFormValid) {
      alert('الرجاء إدخال رقم البقعة');
      return;
    }

    const message = `السلام عليكم\nأرغب في حجز بقعة\n\nالطابق: ${formData.floor}\nالنوع: ${formData.type}\nرقم البقعة: ${formData.plotNumber}`;
    const whatsappUrl = `https://wa.me/212702060323?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition duration-300" style={{fontFamily: 'Cairo, sans-serif'}}>
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-6">
        <h3 className="text-3xl font-black text-white">البقع الأرضية</h3>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-gray-50 overflow-x-auto">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-bold text-center transition-all duration-300 whitespace-nowrap text-sm lg:text-base ${
                activeTab === tab.id
                  ? 'text-amber-600 border-b-3 border-amber-600 bg-white'
                  : 'text-gray-600 hover:text-amber-500 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-12">
        {activeTab === 'booking' && (
          <div className="animate-in fade-in zoom-in duration-500 mb-8">
            {/* Gallery Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl h-48 shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center text-white font-bold text-center p-4">
                <span>صورة البقعة 1</span>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl h-48 shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center text-white font-bold text-center p-4">
                <span>صورة البقعة 2</span>
              </div>
              <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl h-48 shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center text-white font-bold text-center p-4">
                <span>صورة البقعة 3</span>
              </div>
            </div>
          </div>
        )}
        
        {activeTab !== 'booking' ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg font-medium">قريباً</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Horizontal Form Layout */}
            <div className="flex flex-col lg:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  نوع الطابق
                </label>
                <select
                  value={formData.floor}
                  onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition font-semibold"
                >                  <option value="R+0">R+0 (الطابق الأرضي)</option>                  <option value="R+2">R+2</option>
                  <option value="R+3">R+3</option>
                  <option value="R+4">R+4</option>
                </select>
              </div>

              <div className="flex-1">
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

              <div className="flex-1">
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

              {/* Auto-appearing Confirmation Button */}
              {isFormValid && (
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold rounded-xl transition transform hover:scale-110 shadow-lg hover:shadow-xl animate-in fade-in zoom-in duration-500 whitespace-nowrap"
                >
                  تأكيد الحجز
                </button>
              )}
            </div>

            {/* Info Message */}
            {!isFormValid && (
              <p className="text-center text-gray-500 text-sm font-medium animate-in fade-in duration-300">
                يرجى إدخال رقم البقعة لإتمام الحجز
              </p>
            )}
          </div>
        )}
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
