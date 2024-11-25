import { useState } from "react"
export default function NewTask({onAddNewTask}){
    const [enteredTask,setEnteredTask]=useState();

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(event){
        onAddNewTask(enteredTask);
        setEnteredTask('');
    }

    return <div className="flex items-center gap-4">
        <input 
        onChange={handleChange} 
        value={enteredTask}
        className="w-64 px-2 py-4 rounded-sm bg-stone-200" type="text"></input>
        <button onClick={handleClick} className="text-stone-300 hover:text-stone-800">Add Task</button>
    </div>
}