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

  const handleNavigate = (view: 'home' | 'project-details') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-slate-950 font-sans selection:bg-blue-600/30 overflow-x-hidden">
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
        <Navbar onNavigate={handleNavigate} currentView={currentView} />
        
        <main className="pt-24 sm:pt-32">
          {currentView === 'home' ? (
            <div className="animate-reveal">
              <ProjectsSection 
                onExploreProject={handleShowProjectDetails}
              />
              <Hero />
              <InteractiveProjectBox 
                isRevealed={true} 
                onShowDetails={handleShowProjectDetails} 
              />
            </div>
          ) : (
            <div className="animate-reveal">
              <ProjectDetails onBack={handleBackToHome} />
            </div>
          )}
        </main>

        {/* Footer subtle highlight */}
        <footer className="py-12 px-6 mt-auto border-t border-white/5 bg-slate-950/40 backdrop-blur-3xl text-center">
            <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">© 2026 Tozdaght Immobilier. All rights reserved.</p>
        </footer>
      </div>

      <style>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-reveal {
          animation: reveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
