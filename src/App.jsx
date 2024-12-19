import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";
import "./index.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    setShowAlert(false);
  };

  return (
    <div className="app">
      <h1>React Alert App</h1>
      <Input value={inputValue} onChange={handleInputChange} />
      <Button disabled={!inputValue.trim()} onClick={handleButtonClick} />
      {showAlert && (
        <Alert message="¡Esta es una alerta!" onClose={handleAlertClose} />
      )}
    </div>
  );
};

export default App;
