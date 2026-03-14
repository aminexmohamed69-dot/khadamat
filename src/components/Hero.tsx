export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white">
      {/* Premium Hero Section with Background */}
      <div className="relative h-screen bg-cover bg-center overflow-hidden" style={{backgroundImage: 'url(/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg)'}}>
        {/* Dark Overlay with Blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/85 backdrop-blur-sm"></div>
        
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-transparent"></div>

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-16">
          <div className="lg:flex-1 text-center lg:text-right">
            {/* Interactive Title */}
            <h1 
              onClick={() => scrollToSection('projects-section')}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-lg cursor-pointer group transition-all duration-300" 
              style={{fontFamily: 'Cairo, sans-serif'}}
            >
              مشروع تجزئة وإقامة النجمة – تيزنيت
              <div className="h-1 bg-gradient-to-r from-white to-blue-200 mt-4 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-700 ease-out rounded-full"></div>
            </h1>
            
            <p 
              onClick={() => scrollToSection('projects-current')}
              className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed font-semibold drop-shadow-md cursor-pointer hover:text-white transition-colors duration-300"
            >
              منطقة سكنية وتجارية حديثة بتصاميم عصرية
            </p>
            <p className="text-base text-blue-200 mb-6 leading-relaxed max-w-2xl lg:ml-auto drop-shadow-md">
              نحن نقدم مشاريع عقارية متطورة بمعايير عالمية، شقق سكنية فاخرة وفضاءات مكتبية احترافية
            </p>
          </div>

          <div className="lg:flex-1 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/0ed97443-d755-48ff-bd3d-41a5c5fc587a.jpg"
                alt="Project"
                className="relative rounded-2xl shadow-2xl w-full object-cover border-4 border-white/20"
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
