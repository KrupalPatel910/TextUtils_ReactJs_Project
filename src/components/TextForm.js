import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setOriginalText(text)
    // console.log("Uppercase was clicked" + text)
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const  handleLoClick = () => {
    setOriginalText(text)
    let newText = text.toLocaleLowerCase();
    setText(newText);

  }
  const  handleClearClick = () => {
    let newText = "";
    setText(newText);
  }

  const  handleUndoClick = () => {
   setText(originalText)
  }
  const  handleSummaryClick = () => {
    let summary  =  text.slice(20)
   setText(summary)
  }

  const handleOnChange = (event) => {
    // console.log("Textarea was clicked")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const [originalText, setOriginalText] = useState('');

  

  // text = "new text"; // Wrong way to change the state
  // setText("New text"); // Correct way to change the state
  return (
    <>
    <div className="container">
      <h3 className="mb-3">{props.heading}</h3>
      <div>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          placeholder="Enter Text Hear"
          onChange={handleOnChange}
          rows="5"
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-primary m-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary " onClick={handleUndoClick}>
        Undo 
      </button>
        <button className="btn btn-primary m-3" onClick={handleSummaryClick}>
          Summary 
        </button>
        <button className="btn btn-primary m-3" onClick={handleClearClick}>
          Clear Text 
        </button>
        
    </div>
    <div className="container my-1">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.08 * text.split(" ").length } Minutes read</p>
      <p>{text.split(".").length - 1 } Sentences</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
    
  );
}
