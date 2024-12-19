import React from "react";

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert">
      <span>{message}</span>
      <button className="close" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Alert;