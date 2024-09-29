import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [selectedProject, setSelectedProject] = useState(null); // State to track selected project
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false); // State to track if we're creating a new project

  return (
    <main className="flex h-screen">
      <ProjectSidebar 
        onAddProject={() => setIsCreatingNewProject(true)} // Trigger new project creation
        onSelectProject={(project) => {
          setSelectedProject(project);
          setIsCreatingNewProject(false); // Reset new project creation if a project is selected
        }}
      />
      <div className="flex-1 p-6">
        {isCreatingNewProject ? (
          <NewProject />  // Render NewProject component when creating a project
        ) : selectedProject ? (
          <NewProject project={selectedProject} />  // Render the selected project
        ) : (
          <NoProjectSelected /> // Render the "No Project Selected" screen
        )}
      </div>
    </main>
  );
}

export default App;
