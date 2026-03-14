import { useState } from 'react';
import { X } from 'lucide-react';

export default function ApartmentsCard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showReservation, setShowReservation] = useState(false);
  const [formData, setFormData] = useState({
    floor: '1',
    apartmentNumber: '',
  });

  const handleSubmit = () => {
    if (!formData.apartmentNumber) {
      alert('الرجاء إدخال رقم الشقة');
      return;
    }

    const message = `السلام عليكم
أرغب في حجز شقة

الطابق: ${formData.floor}
رقم الشقة: ${formData.apartmentNumber}`;

    const whatsappUrl = `https://wa.me/212661795051?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 p-8">
        <h3 className="text-2xl font-bold text-white">الشقق السكنية</h3>
      </div>

      <div className="border-b border-slate-200">
        <div className="flex gap-0">
          <button
            onClick={() => setActiveTab('design')}
            className={`flex-1 py-4 px-6 font-semibold text-center transition text-sm ${
              activeTab === 'design'
                ? 'bg-emerald-50 text-emerald-600 border-b-2 border-emerald-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            تصميم العمارة
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={`flex-1 py-4 px-6 font-semibold text-center transition text-sm ${
              activeTab === 'status'
                ? 'bg-emerald-50 text-emerald-600 border-b-2 border-emerald-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            وضعية الشقق
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex-1 py-4 px-6 font-semibold text-center transition text-sm ${
              activeTab === 'progress'
                ? 'bg-emerald-50 text-emerald-600 border-b-2 border-emerald-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            تقدم الأشغال
          </button>
          <button
            onClick={() => setShowReservation(true)}
            className={`flex-1 py-4 px-6 font-semibold text-center transition text-sm ${
              showReservation
                ? 'bg-emerald-50 text-emerald-600 border-b-2 border-emerald-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            حجز شقة
          </button>
        </div>
      </div>

      <div className="p-8">
        {!showReservation ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">قريباً</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                الطابق
              </label>
              <select
                value={formData.floor}
                onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                رقم الشقة
              </label>
              <input
                type="text"
                value={formData.apartmentNumber}
                onChange={(e) => setFormData({ ...formData, apartmentNumber: e.target.value })}
                placeholder="أدخل رقم الشقة"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              تأكيد
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
