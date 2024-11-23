import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, onSelectProject,projects,selectedProjectId }) {
  return (
    <aside className="bg-gray-800 text-white h-full w-64 p-4">
      <h2 className="text-lg font-semibold mb-4">Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>  {/* Add new project */}
      </div>
      <ul className="mt-8">
        {
        projects.map(project => {
         
          let cssClss="w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800"
          if(project.id === selectedProjectId){
            cssClss+=" bg-stone-800 text-stone-200";          
          }else{
            cssClss+=" text-stone-400";
          }
          
         return <li key = {project.id} > 
          <button onClick={()=>onSelectProject(project.id)}
            className={cssClss}>{project.title}</button>
        </li>})
        }
        
      </ul>
    </aside>

  );
}
