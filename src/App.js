import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [themeColor, setThemeColor] = useState({ color: "black" });
  const [modeText, setModeText] = useState("Dark");
  const [alert, setAlert] = useState(null);
  const handleThemeColor = (ThemeColorToSet) => {
    setThemeColor({ color: ThemeColorToSet });
  };
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
      document.title = "TextUtils - Dark Mode";
      if (themeColor.color === "black") {
        handleThemeColor("white");
      }
    } else {
      setMode("light");
      setModeText("Dark");
      showAlert("Light Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Navbar
          title="Textutils"
          aboutText="About text utils"
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
          handleThemeColor={handleThemeColor}
        />
        <Alert alert={alert} />
        <div className="container mt-4" style={themeColor}>
          <Routes>
            <Route path="/about" element={<About />}></Route>

            <Route
              path="/reactjs_course"
              element={
                <TextForm
                  heading="Enter The text to analyze Below"
                  mode={mode}
                  showAlert={showAlert}
                  themeColor={themeColor}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
