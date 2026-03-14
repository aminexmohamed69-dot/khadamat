import { useState } from 'react';
import { X } from 'lucide-react';

export default function LandPlotsCard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showReservation, setShowReservation] = useState(false);
  const [formData, setFormData] = useState({
    floor: 'R+2',
    type: 'سكنية',
    plotNumber: '',
  });

  const handleSubmit = () => {
    if (!formData.plotNumber) {
      alert('الرجاء إدخال رقم البقعة');
      return;
    }

    const message = `السلام عليكم
أرغب في حجز بقعة

الطابق: ${formData.floor}
النوع: ${formData.type}
رقم البقعة: ${formData.plotNumber}`;

    const whatsappUrl = `https://wa.me/212661795051?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8">
        <h3 className="text-2xl font-bold text-white">البقع الأرضية</h3>
      </div>

      <div className="border-b border-slate-200">
        <div className="flex gap-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-4 px-6 font-semibold text-center transition ${
              activeTab === 'overview'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            تصميم التجزئة
          </button>
          <button
            onClick={() => setActiveTab('function')}
            className={`flex-1 py-4 px-6 font-semibold text-center transition ${
              activeTab === 'function'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            وظيفة البقع
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex-1 py-4 px-6 font-semibold text-center transition ${
              activeTab === 'progress'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            تقدم الأشغال
          </button>
          <button
            onClick={() => setShowReservation(true)}
            className={`flex-1 py-4 px-6 font-semibold text-center transition ${
              showReservation
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            حجز بقعة
          </button>
        </div>
      </div>

      <div className="p-8">
        {!showReservation ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">محتوى التفاصيل قريباً</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                نوع الطابق
              </label>
              <select
                value={formData.floor}
                onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="R+2">R+2</option>
                <option value="R+3">R+3</option>
                <option value="R+4">R+4</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                نوع البقعة
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="سكنية">سكنية</option>
                <option value="تجارية">تجارية</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                رقم البقعة
              </label>
              <input
                type="text"
                value={formData.plotNumber}
                onChange={(e) => setFormData({ ...formData, plotNumber: e.target.value })}
                placeholder="أدخل رقم البقعة"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              تأكيد
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
