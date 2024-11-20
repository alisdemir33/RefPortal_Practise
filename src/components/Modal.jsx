import { forwardRef,useImperativeHandle,useRef } from "react"
import { createPortal } from "react-dom"
const Modal = forwardRef( function Modal ({children,buttonCaption},modalRef ){

    const dialogRef=useRef();
    const buttonRef=useRef();
    
    useImperativeHandle(modalRef, ()=>{
        return {
            open(){
                dialogRef.current.showModal();
            },
            focusButton () { buttonRef.current?.focus()

            }
        }
    });
return createPortal( <dialog ref={dialogRef}>
    {children}
    <form method="dialog">
        <button ref={buttonRef}>{buttonCaption} </button>
    </form>
</dialog>, document.getElementById("modal-root"))
});
export default Modal; 