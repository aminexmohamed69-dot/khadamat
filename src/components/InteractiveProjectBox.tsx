export default function InteractiveProjectBox({ onShowDetails }) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100" id="interactive-projects">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* مشاريع اخرى Box */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white rounded-2xl p-16 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
              <div className="text-center">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  مشاريع أخرى
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  استكشف مشاريعنا الأخرى والخدمات المتميزة
                </p>
              </div>
            </div>
          </div>

          {/* تحقق Button */}
          <div className="flex justify-center">
            <button
              onClick={onShowDetails}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              تحقق
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
