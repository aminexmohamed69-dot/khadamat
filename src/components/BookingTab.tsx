import { useState } from 'react';


export default function BookingTab({ type = 'apartments' }: { type?: 'apartments' | 'land' }) {
  const [floor, setFloor] = useState('1');
  const [apartmentNumber, setApartmentNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    const label = type === 'apartments' ? 'الشقة' : 'البقعة';
    alert(`تم إرسال طلب الحجز: الطبق ${floor}، رقم ${label} ${apartmentNumber}`);
  };

  return (
    <div className="space-y-12 animate-fadeIn py-10">
      <div className="text-center space-y-4">
        <h3 className="text-4xl font-black text-white drop-shadow-xl tracking-tight">
          {type === 'apartments' ? 'حجز شقة' : 'حجز بقعة'}
        </h3>
        <p className="text-blue-100/60 font-medium text-lg">
          {type === 'apartments' ? 'يرجى إدخال تفاصيل الشقة لإتمام الحجز' : 'يرجى إدخال تفاصيل البقعة لإتمام الحجز'}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="block text-lg font-bold text-white px-2">الطابق</label>
            <div className="relative group">
              <select
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                className="w-full bg-black/40 border border-white/10 text-white rounded-[1.5rem] px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 appearance-none font-bold text-lg backdrop-blur-xl"
              >
                <option value="1">الطابق الأول (R+1)</option>
                <option value="2">الطابق الثاني (R+2)</option>
                <option value="3">الطابق الثالث (R+3)</option>
                <option value="4">الطابق الرابع (R+4)</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-lg font-bold text-white px-2">
              {type === 'apartments' ? 'رقم الشقة' : 'رقم البقعة'}
            </label>
            <input
              type="text"
              value={apartmentNumber}
              onChange={(e) => setApartmentNumber(e.target.value)}
              placeholder="مثال: 12"
              className="w-full bg-black/40 border border-white/10 text-white placeholder:text-white/20 rounded-[1.5rem] px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 font-bold text-lg backdrop-blur-xl"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-6 rounded-[1.5rem] transform hover:-translate-y-1 transition-all duration-300 shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.5)] text-xl border border-blue-400/30"
        >
          تأكيد الحجز
        </button>

        <div className="p-8 rounded-[2rem] bg-blue-500/5 border border-white/5 text-center backdrop-blur-md">
          <p className="text-blue-100/40 font-medium italic">
            * سيقوم فريقنا بمراجعة طلبك والتواصل معك في أقرب وقت ممكن لتأكيد التفاصيل النهائية.
          </p>
        </div>
      </div>
    </div>
  );
}
