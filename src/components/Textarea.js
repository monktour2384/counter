import React, { useState } from "react";
import Proptypes from "prop-types";

export default function Textarea(props) {
  const handleupclick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleloclick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    const newText = "";
    setText(newText);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.h1}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="16"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>
          To upperClass
        </button>
        <button className="btn btn-primary" onClick={handleloclick}>
          To lowerClass
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear text
        </button>
        <div className="container my-3">
          <p>
            {text.split(" ").length} Words {text.length} characters
          </p>
          <p>Minutes to read {0.008 * text.split(" ").length}</p>
          <p>Peview</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
