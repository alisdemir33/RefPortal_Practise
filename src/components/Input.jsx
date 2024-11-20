import { forwardRef } from "react";
const Input = forwardRef( function Input({ labelText, textArea, ...props },ref) {
    const inputClassNames =
      "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  
    return (
      <p className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          {labelText}
        </label>
        {textArea ? (
          <textarea ref={ref} className={inputClassNames} {...props}></textarea>
        ) : (
          <input ref={ref} className={inputClassNames} {...props} />
        )}
      </p>
    );
  });

  export default Input;

  