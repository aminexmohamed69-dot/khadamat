export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-transparent pt-20">
      {/* Premium Hero Section with Background */}
      <div className="relative h-[85vh] bg-cover bg-center overflow-hidden rounded-b-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b border-white/10" style={{backgroundImage: 'url(/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg)'}}>
        {/* Dark Overlay with Blur */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[4px]"></div>
        
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-transparent"></div>

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-16">
          <div className="lg:flex-1 text-center lg:text-right">
            {/* Interactive Title */}
            <h1 
              onClick={() => scrollToSection('projects-section')}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 drop-shadow-lg cursor-pointer group transition-all duration-500 hover:scale-[1.02]" 
              style={{fontFamily: 'Cairo, sans-serif'}}
            >
              مشروع تجزئة وإقامة النجمة
              <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mt-6 max-w-sm ml-auto opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 origin-right transition-all duration-700 ease-out rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
            </h1>
            
            <p 
              onClick={() => scrollToSection('projects-current')}
              className="text-xl lg:text-2xl text-blue-100/90 mb-8 leading-relaxed font-semibold cursor-pointer hover:text-white transition-colors duration-300 max-w-2xl ml-auto"
            >
              منطقة سكنية وتجارية حديثة بتصاميم عصرية في قلب تيزنيت
            </p>
            <p className="text-base text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto lg:ml-auto opacity-90 font-light">
              نقدم لكم مشاريع عقارية متطورة بمعايير عالمية تجمع بين الفخامة والعملية. شقق سكنية راقية وفضاءات مكتبية احترافية تلبي تطلعاتكم.
            </p>
          </div>

          <div className="lg:flex-1 hidden lg:block opacity-90 group perspective-1000">
            <div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <img
                src="/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg"
                alt="Project"
                className="relative rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full object-cover border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUnderline {
          from {
            transform: scaleX(0);
            transform-origin: right;
          }
          to {
            transform: scaleX(1);
            transform-origin: right;
          }
        }
      `}</style>
    </div>
  );
}
