
import React from 'react';

const Button = ({ children, onClick, className = "", type = "button", ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
