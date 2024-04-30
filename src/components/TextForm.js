import React, { useState } from "react";




export default function TextForm(props) {
  const handleUpClick = () => {
    setOriginalText(text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
  props.showAlert("Converted to Uppercase", "success")

  };
  const handleLoClick = () => {
    setOriginalText(text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")

  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success")
  };

  const handleUndoClick = () => {
    setText(originalText);
    props.showAlert("Undo Successful", "success")
  };

  const handleSummaryClick = () => {
    let summary = text.slice(20);
    setText(summary);
    

  };
  const [countt, setcountt] = useState("0");
  function WordCount(str) { 
    if(!str.includes("  ")){
      setcountt(str.split(" ").length)

    }
  }

  const handleOnChange = (event) => {
    // console.log("Textarea was clicked")
    const val = event.target.value
     console.log("Textarea was clicked", event.target.value.includes("  "))

   WordCount(val)
    setText(event.target.value);
  };
  
  const [text, setText] = useState("");
  const [originalText, setOriginalText] = useState("");

  // text = "new text"; // Wrong way to change the state
  // setText("New text"); // Correct way to change the state
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h3 className="mb-3">{props.heading}</h3>
        <div>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            style={{backgroundColor : props.mode === 'dark'?'grey':'white', color :props.mode === 'dark'?'white':'black'}}
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
      <div className="container my-1" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length-1} words and {text.length} character
          {/* {countt} words and {text.length} character  */}
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <p>{text.split(".").length - 1} Sentences</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
