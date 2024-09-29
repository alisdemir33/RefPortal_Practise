import noProjectsImage from "../assets/no-projects.png"; // Import the image
import Button from "./Button";

export default function NoProjectSelected() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-stone-500">
      <img src={noProjectsImage} alt="No Projects" className="mb-4 w-48 h-48" />
      <h2 className="text-2xl font-semibold mb-4">No Project Selected</h2>
      <p className="text-lg">Please select a project from the sidebar to view details or create a new project.</p>
      <Button>+ Add Project</Button>
    </div>
  );
}
