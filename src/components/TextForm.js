import React, { useState } from "react";

export default function TextForm(props) {
  const [btnText, setBtnText] = useState("Poppins");
  const [myFont, setFont] = useState({
    fontFamily: "Sans-serif",
  });
  const handleFontClick = () => {
    console.log("hello");

    if (myFont.fontFamily === "Sans-serif") {
      setFont({ fontFamily: "Poppins" });
      setBtnText("Sans Serif");
    } else {
      setFont({ fontFamily: "Sans-serif" });
      setBtnText("Poppins");
    }
  };
  const handleUpClick = () => {
    let newValue = value.toUpperCase();
    setValue(newValue);
  };
  const handleLowClick = () => {
    let newValue = value.toLowerCase();
    setValue(newValue);
  };
  const handleClearClick = () => {
    setValue("");
  };
  const handleCopyClick = () => {
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
            style={myFont}
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
        {/* <p>{value.split(" ").length * 0.008} minutes</p> */}
        <h2>Preview</h2>
        <p>{value}</p>
      </div>
    </>
  );
}
