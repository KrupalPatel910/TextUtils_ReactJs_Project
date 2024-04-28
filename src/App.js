import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Worn from "./components/Worn";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled", "Success")
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "Success")

    }
  };





  return (
    <>
      {/* <Navbar title = "TextUtils" about = "About TextUtils" mode={mode} /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Worn alert={alert}/>
      <div className="container mt-3 ">
        {/* <About /> */}
        <TextForm  showAlert={showAlert} heading="Enter th text to analyze below " mode={mode} />
      </div>
    </>
  );
}

export default App;
