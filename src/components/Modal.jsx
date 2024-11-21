import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, modalRef) {
  const dialogRef = useRef();
  const buttonRef = useRef();

  useImperativeHandle(modalRef, () => ({
    open() {
      dialogRef.current.showModal();
    },
    focusButton() {
      buttonRef.current?.focus();
    },
  }));

  return createPortal(
    <dialog
      ref={dialogRef}
      className="w-11/12 max-w-lg p-6 bg-white border rounded-lg shadow-lg backdrop:bg-black/50"
    >
      <div className="mb-4">{children}</div>
      <form method="dialog" className="text-right">
        <button
          ref={buttonRef}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
