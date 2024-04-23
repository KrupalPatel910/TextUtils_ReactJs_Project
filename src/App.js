import "./App.css";
import Navbar from "./components/Navbar"; 
import TextForm from "./components/TextForm"
import About from "./components/About";
import {useState} from "react";

function App() {
   
  const [mode, setMode] = useState('light'); 
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark')    
      document.body.style.backgroundColor = "#042743";
    }
    else{
      setMode( 'light');
      document.body.style.backgroundColor = "white";

    }
  }
  return (
  <>
   {/* <Navbar title = "TextUtils" about = "About TextUtils" mode={mode} /> */}
   <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container mt-3 ">
     {/* <About /> */}
    <TextForm heading = "Enter th text to analyze below " mode={mode}/>
    </div>
  </>
  );
}

export default App;
