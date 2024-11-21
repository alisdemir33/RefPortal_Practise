import { forwardRef,useImperativeHandle,useRef } from "react"
import { createPortal } from "react-dom"
import Button from "./Button";
const Modal = forwardRef( function Modal ({children,buttonCaption,onClick},modalRef ){

    const dialogRef=useRef();
    const buttonRef=useRef();
    
    useImperativeHandle(modalRef, ()=>{
        return {
            open(){
                dialogRef.current.showModal();
            },
            close(){
                dialogRef.current.close(); 
            },
            focusButton () { buttonRef.current?.focus()

            }
        }
    });
return createPortal( <dialog ref={dialogRef} className="backdrop:bg-stone-800/95 p-4 rounded-md shadow-md">
    {children}
    <form method="dialog" className="mt-4 text-right">
        <Button onClick={onClick} ref={buttonRef}>{buttonCaption} </Button>
    </form>
</dialog>, document.getElementById("modal-root"))
});
export default Modal; 