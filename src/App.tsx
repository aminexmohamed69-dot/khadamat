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
    <div className="min-h-screen bg-gray-50">
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
