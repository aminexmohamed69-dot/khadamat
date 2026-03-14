import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import InteractiveProjectBox from './components/InteractiveProjectBox';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ProjectsSection onRevealOther={() => setIsRevealed(true)} />
      <Hero />
      <InteractiveProjectBox 
        isRevealed={isRevealed} 
        onShowDetails={() => setShowDetails(true)} 
      />
      {showDetails && <ProjectDetails />}
    </div>
  );
}

export default App;
