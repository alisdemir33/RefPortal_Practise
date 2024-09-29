import Button from "./Button";

export default function ProjectSidebar({ onAddProject, onSelectProject }) {
  return (
    <aside className="bg-gray-800 text-white h-full w-64 p-4">
      <h2 className="text-lg font-semibold mb-4">Projects</h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>  {/* Add new project */}
      </div>
    </aside>
  );
}
