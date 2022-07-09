import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [modeText, setModeText] = useState("Dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Light");
      showAlert("Dark Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setModeText("Dark");
      showAlert("Light Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Navbar
        title="Textutils"
        aboutText="About text utils"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <Alert alert={alert} />
      <div className="container mt-4">
        <TextForm
          heading="Enter The text to analyze Below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
