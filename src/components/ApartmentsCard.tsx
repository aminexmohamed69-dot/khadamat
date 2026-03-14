import { useState } from 'react';

export default function ApartmentsCard() {
  const [activeTab, setActiveTab] = useState('design');
  const [formData, setFormData] = useState({
    floor: '1',
    apartmentNumber: '',
  });

  const tabs = [
    { id: 'design', label: 'تصميم العمارة' },
    { id: 'status', label: 'وضعية الشقق' },
    { id: 'progress', label: 'تقدم الأشغال' },
    { id: 'booking', label: 'حجز شقة' },
  ];

  const handleSubmit = () => {
    if (!formData.apartmentNumber) {
      alert('الرجاء إدخال رقم الشقة');
      return;
    }

    const message = `السلام عليكم\nأرغب في حجز شقة\n\nالطابق: ${formData.floor}\nرقم الشقة: ${formData.apartmentNumber}`;
    const whatsappUrl = `https://wa.me/212661795051?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition duration-300">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-6">
        <h3 className="text-3xl font-bold text-white">الشقق السكنية</h3>
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
                  ? 'text-emerald-600 border-b-3 border-emerald-600 bg-white'
                  : 'text-gray-600 hover:text-emerald-500 hover:bg-gray-100'
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  الطابق
                </label>
                <select
                  value={formData.floor}
                  onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition font-medium"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  رقم الشقة
                </label>
                <input
                  type="text"
                  value={formData.apartmentNumber}
                  onChange={(e) => setFormData({ ...formData, apartmentNumber: e.target.value })}
                  placeholder="أدخل رقم الشقة"
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition font-medium"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full md:w-auto md:ml-auto block px-12 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-xl transition transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              تأكيد الحجز
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
