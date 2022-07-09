import React, { useState } from "react";

export default function TextForm(props) {
  const [btnText, setBtnText] = useState("Poppins");

  const [myStyle, setStyle] = useState({
    fontFamily: "Sans-serif",
  });
  const handleFontClick = () => {
    if (myStyle.fontFamily === "Sans-serif") {
      setStyle({ fontFamily: "Poppins" });
      props.showAlert("Converted To Poppins", "success");
      document.querySelector("textarea").style.fontFamily = "Poppins";
      setBtnText("Sans Serif");
    } else {
      setStyle({ fontFamily: "Sans-serif" });
      props.showAlert("Converted To Sans-Serif", "success");
      document.querySelector("textarea").style.fontFamily = "Sans-serif";
      setBtnText("Poppins");
    }
  };
  const handleUpClick = () => {
    let newValue = value.toUpperCase();
    props.showAlert("Converted To Uppercase", "success");
    setValue(newValue);
  };
  const handleLowClick = () => {
    let newValue = value.toLowerCase();
    props.showAlert("Converted To Lowercase", "success");
    setValue(newValue);
  };
  const handleClearClick = () => {
    props.showAlert("Textarea Cleared", "success");
    setValue("");
  };
  const handleCopyClick = () => {
    props.showAlert("Copied To Clipboard", "success");
    navigator.clipboard.writeText(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [value, setValue] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={value}
            onChange={handleChange}
            id="myText"
            rows={7}
            style={{
              backgroundColor: `${props.mode === "light" ? "white" : "black"}`,
              color: `${props.mode === "light" ? "black" : "white"}`,
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy To Clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleFontClick}>
          {btnText}
        </button>
      </div>
      <div className="container mt-4">
        <h2>Your Text Summary</h2>
        <p>
          {value.split(" ").length} words, {value.length} characters
        </p>
        <p>
          {
            value
              .trim()
              .split(" ")
              .filter(function (element) {
                return element !== "";
              }).length
          }{" "}
          words and {value.length} characters
        </p>
        <h2>Preview</h2>
        <p>{value.length > 0 ? value : "Enter Something To Preview"}</p>
      </div>
    </>
  );
}
