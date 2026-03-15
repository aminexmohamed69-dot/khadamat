import { useState } from 'react';
import { Send } from 'lucide-react';

export default function BookingTab() {
  const [floor, setFloor] = useState('1');
  const [apartmentNumber, setApartmentNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`تم إرسال طلب الحجز: الطبق ${floor}، رقم الشقة ${apartmentNumber}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">حجز شقة</h3>
        <p className="text-gray-500">يرجى إدخال رقم الشقة لإتمام الحجز</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 mr-1">الطابق</label>
            <select
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            >
              <option value="1">الطابق الأول (R+1)</option>
              <option value="2">الطابق الثاني (R+2)</option>
              <option value="3">الطابق الثالث (R+3)</option>
              <option value="4">الطابق الرابع (R+4)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 mr-1">رقم الشقة</label>
            <input
              type="text"
              required
              value={apartmentNumber}
              onChange={(e) => setApartmentNumber(e.target.value)}
              placeholder="مثال: 12"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-right"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          <Send size={20} className="group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform" />
          <span>تأكيد الحجز</span>
        </button>
      </form>

      <div className="mt-12 p-6 bg-blue-50 rounded-[2rem] border border-blue-100">
        <p className="text-blue-800 text-sm leading-relaxed text-center">
          * سيقوم فريقنا بمراجعة طلبك والتواصل معك في أقرب وقت ممكن لتأكيد التفاصيل النهائية.
        </p>
      </div>
    </div>
  );
}
