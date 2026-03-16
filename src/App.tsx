import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import InteractiveProjectBox from './components/InteractiveProjectBox';
import ProjectDetails from './components/ProjectDetails';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'project-details'>('home');

  const handleShowProjectDetails = () => {
    setCurrentView('project-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-transparent font-sans selection:bg-blue-600/30">
      {/* Premium Glass Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')` }}
      >
        {/* Complex Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[30px] saturate-150 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-slate-900/40 to-emerald-500/10 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 flex flex-col w-full min-h-screen text-slate-100">
        <Navbar />
        
        {currentView === 'home' ? (
        <>
          <ProjectsSection 
            onExploreProject={handleShowProjectDetails}
          />
          <Hero />
          <InteractiveProjectBox 
            isRevealed={true} 
            onShowDetails={handleShowProjectDetails} 
          />
        </>
      ) : (
        <div className="animate-fadeIn">
          <ProjectDetails onBack={handleBackToHome} />
        </div>
      )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
