import Input from "./Input"
export default function NewProject() {

    return (
        <div  className="w-[35rem] mt-16 ">
            <menu className="flex items-center justify-end gap-4 my-4 ">
                <li><button className=" text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button className="px-6 py-2 bg-stone-800 text-stone-50 hover:text-stone-950">Add</button></li>
                
            </menu>
            <div>
                    <Input labelText="Name" ></Input>
                    <Input labelText="Description" textArea={true}></Input>
                    <Input labelText="Due Date" ></Input>
            </div>
        
      
        </div>
    );
}