import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

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
    let newid= Math.random();
    const newProject = { ...projectData, newid }
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      }

    });
  }

  console.log(projectState);

  let content;
  if (projectState.selectedProjectId === null) {//
    content = <NewProject onAdd={handleAddProject}></NewProject>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  }


  return (
    <main className="flex h-screen">
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject} // Trigger new project creation
        onSelectProject={(project) => {
          setSelectedProject(project);          
        }}
      />
      <div className="flex-1 p-6">
        {content}
      </div>
    </main>
  );
}

export default App;
