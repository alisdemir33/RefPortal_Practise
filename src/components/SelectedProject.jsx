export default function SelectedProject({ project, onClose }) {
    if (!project) {
        return (
            <div className="w-[35rem] mt-16 text-center">
                <p className="text-stone-800">No project selected.</p>
            </div>
        );
    }

    return (
        <div className="w-[35rem] mt-16 bg-stone-50 shadow-md rounded-lg p-6">
            <header className="border-b pb-4 mb-4">
                <h2 className="text-2xl font-bold text-stone-800">{project.title}</h2>
                <p className="text-stone-600 text-sm">Due Date: {project.dueDate}</p>
            </header>
            <section className="mb-4">
                <h3 className="text-lg font-semibold text-stone-700">Description</h3>
                <p className="text-stone-600">{project.description}</p>
            </section>
            <footer className="flex items-center justify-end gap-4">
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-stone-800 text-stone-50 hover:text-stone-950"
                >
                    Close
                </button>
            </footer>
        </div>
    );
}
