import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject"

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData) {
    let id= Math.random();
    const newProject = { ...projectData, id }
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      }

    });
  }

  function handleSelectProject(projectId) {
    debugger;
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function handleCloseDetails() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  console.log(projectState);

  let content;
  if (projectState.selectedProjectId === null) {//
    content = <NewProject onAdd={handleAddProject}></NewProject>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  }
  else {
    const selectedProject = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
    content = (
      <SelectedProject project={selectedProject} onClose={handleCloseDetails} />
    );
  }

  return (
    <main className="flex h-screen">
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject} // Trigger new project creation
        /* onSelectProject={(project) => {
          setSelectedProject(project);          
        }} */
          onSelectProject={handleSelectProject} // Select project to view details
      />
      <div className="flex-1 p-6">
        {content}
      </div>
    </main>
  );
}

export default App;
