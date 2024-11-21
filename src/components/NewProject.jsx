import { useRef } from "react";
import Input from "./Input"
import Modal from "./Modal";
export default function NewProject({ onAdd,onCancelAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const mymodal=useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            mymodal.current.open();
            return;
        }
        onAdd(
            {
                title: enteredTitle,
                description: enteredDescription,
                dueDate: enteredDueDate
            }
        );

    }

    function handleClose(){
        mymodal.current.close();
    }

   
    return (
        <>
        <Modal ref={mymodal} onClick={handleClose} buttonCaption="Close">
            <h2 className="text-slate-800 text-2xl font-semibold mb-4">invalid input</h2>
            <p className="text-stone-700 md-4">ooops!</p>
        </Modal>
        <div className="w-[35rem] mt-16 ">
            <menu className="flex items-center justify-end gap-4 my-4 ">
                <li><button onClick={onCancelAdd} className=" text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave}
                    className="px-6 py-2 bg-stone-800 text-stone-50 hover:text-stone-950">
                    Add
                </button></li>

            </menu>
            <div>
                <Input type="text" ref={title} labelText="Name" ></Input>
                <Input ref={description} labelText="Description" textArea={true}></Input>
                <Input type="date" ref={dueDate} labelText="Due Date" ></Input>
            </div>


        </div>
        </>
    );
}