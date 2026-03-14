import { useState } from 'react';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import InteractiveProjectBox from './components/InteractiveProjectBox';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <ProjectsSection />
      <InteractiveProjectBox onShowDetails={() => setShowDetails(true)} />
      {showDetails && <ProjectDetails />}
    </div>
  );
}

export default App;
