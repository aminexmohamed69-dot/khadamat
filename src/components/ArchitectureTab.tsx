export default function ArchitectureTab() {
  return (
    <div className="w-full h-full min-h-[500px] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900">تصميم العمارة</h3>
        <p className="text-gray-500">مشاهدة المخطط الكامل للمشروع</p>
      </div>
      
      <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
        <iframe
          src="/plan.pdf#toolbar=1&navpanes=0&scrollbar=1"
          className="w-full h-[600px]"
          title="Project Architecture"
        >
          <p>Your browser does not support PDFs. <a href="/plan.pdf">Download the PDF</a>.</p>
        </iframe>
      </div>
    </div>
  );
}
