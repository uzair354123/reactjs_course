import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [modeText, setModeText] = useState("Dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setModeText("Dark");
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
      <div className="container mt-4">
        <TextForm heading="Enter The text to analyze Below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
