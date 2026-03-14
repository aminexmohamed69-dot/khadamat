export default function InteractiveProjectBox({ onShowDetails }) {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {/* مشاريع اخرى Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-300"></div>

            <div className="relative bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-12 shadow-xl hover:shadow-2xl transition duration-300 group-hover:border-blue-400">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative text-right">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                  مشاريع اخرى
                </h3>
              </div>
            </div>
          </div>

          {/* تحقق Button */}
          <div className="flex justify-center">
            <button
              onClick={onShowDetails}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105"
            >
              تحقق
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
