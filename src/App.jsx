import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [selectedProject, setSelectedProject] = useState(null); // State to track if a project is selected

  return (
    <main className="flex h-screen">
      <ProjectSidebar 
        onSelectProject={(project) => setSelectedProject(project)} // Simulate project selection from the sidebar
      />
      <div className="flex-1 p-6">
        {selectedProject ? (
          <NewProject project={selectedProject} />
        ) : (
          <NoProjectSelected />
        )}
      </div>
    </main>
  );
}

export default App;

