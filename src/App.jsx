import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  function handleSelectProject(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleDeleteProject(){
    setProjectState((prevState) => {
    let newList= prevState.projects.filter((project)=>project.id!==prevState.selectedProjectId);

      return {  
        ...prevState,    
        projects:newList,
        selectedProjectId: undefined,
      }
    })
  }



  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData) {
    let id = Math.floor(Math.random() * 10000);
    const newProject = { ...projectData, id }
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }

    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddTask(text){
   
    
    setProjectState(prevState => {
      let taskid = Math.floor(Math.random() * 10000);
      const newTask = { text:text,id : taskid, projectId:prevState.selectedProjectId }

      return {
        ...prevState,
       
        tasks: [newTask, ...prevState.tasks]
      }

    });

  }

  function handleDeleteTask(id){
    setProjectState((prevState) => {
      let newList= prevState.tasks.filter((task)=>task.id!==id);  
        return {  
          ...prevState,    
         tasks:newList
        }
      })
  }


  console.log(projectState);

  const selectedProject=projectState.projects.find((project)=> projectState.selectedProjectId===project.id)

  let content=<SelectedProject 
  tasks={projectState.tasks}
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask }
  onDelete={handleDeleteProject} project={selectedProject}></SelectedProject>;
  
  if (projectState.selectedProjectId === null) {//
    content = <NewProject onCancelAdd={handleCancelAddProject} onAdd={handleAddProject}></NewProject>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  }


  return (
    <main className="flex h-screen">
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject} // Trigger new project creation
        onSelectProject={handleSelectProject} 
        selectedProjectId={projectState.selectedProjectId}       
      />
      <div className="flex-1 p-6">
        {content}
      </div>
    </main>
  );
}

export default App;
