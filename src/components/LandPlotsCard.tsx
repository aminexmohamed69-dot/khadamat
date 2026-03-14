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

  const handleSubmit = () => {
    if (!formData.plotNumber) {
      alert('الرجاء إدخال رقم البقعة');
      return;
    }

    const message = `السلام عليكم\nأرغب في حجز بقعة\n\nالطابق: ${formData.floor}\nالنوع: ${formData.type}\nرقم البقعة: ${formData.plotNumber}`;
    const whatsappUrl = `https://wa.me/212661795051?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-6">
        <h3 className="text-3xl font-bold text-white">البقع الأرضية</h3>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-semibold text-center transition-all duration-300 whitespace-nowrap text-sm lg:text-base ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-3 border-blue-600 bg-white'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10">
        {activeTab !== 'booking' ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg font-medium">قريباً</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Horizontal Form Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  نوع الطابق
                </label>
                <select
                  value={formData.floor}
                  onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition font-medium"
                >
                  <option value="R+2">R+2</option>
                  <option value="R+3">R+3</option>
                  <option value="R+4">R+4</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  نوع البقعة
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition font-medium"
                >
                  <option value="سكنية">سكنية</option>
                  <option value="تجارية">تجارية</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  رقم البقعة
                </label>
                <input
                  type="text"
                  value={formData.plotNumber}
                  onChange={(e) => setFormData({ ...formData, plotNumber: e.target.value })}
                  placeholder="أدخل رقم البقعة"
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition font-medium"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full md:w-auto md:ml-auto block px-12 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold rounded-xl transition transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              تأكيد الحجز
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
