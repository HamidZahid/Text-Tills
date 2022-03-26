import React, { useState } from "react";

export default function Textform(props) {
  const hanldeUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const hanldeLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const hanldeClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] +/);
    setText(newText.join(""));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={hanldeUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={hanldeLoClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-danger mx-1" onClick={hanldeClearClick}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Clear Extra Space
        </button>
      </div>
      <div className="container">
        <h2>Your Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box to preview it here"}
        </p>
      </div>
    </>
  );
}
