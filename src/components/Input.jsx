import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Escribe algo..."
      className="input"
    />
  );
};

export default Input;