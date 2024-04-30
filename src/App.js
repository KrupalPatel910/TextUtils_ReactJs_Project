import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Worn from "./components/Worn";
import About from "./components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";



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
      showAlert("Dark mode has enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success")
      document.title = 'TextUtils - Light Mode'
      
    }
  };
  
  const router = createBrowserRouter([
     {
      path:"/",
      element:
        <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Worn alert={alert}/>
      <TextForm/>

        </>

       
     },
     {
      path:"/about",
      element:
        <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Worn alert={alert}/>
      <About title="About Us"/>
        </>
     }

  ])
  return (
    <>
      {/* <Navbar title = "TextUtils" about = "About TextUtils" mode={mode} /> */}
  
     
     
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
