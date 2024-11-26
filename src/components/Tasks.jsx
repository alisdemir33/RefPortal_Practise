
import NewTask from "./NewTask"

export default function Tasks({ tasks, onAdd, onDelete }) {

    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4"> Tasks</h2>
        <NewTask onAddNewTask={onAdd} />
        {tasks.length === 0 && (<p className="text-stone-400 my-4">This Project Has No Tasks</p>)}
        {tasks.length > 0 && (
            <ul className="p-4 rounded-md text-stone-800 bg-stone-100">
                {
                tasks.map((task) => {
                    return <li className="flex justify-between my-4" key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={()=>onDelete(task.id)} className="text-stone-400 hover:text-red-800">Clear</button></li>
                })
                }
            </ul>)
        }
    </section>
}