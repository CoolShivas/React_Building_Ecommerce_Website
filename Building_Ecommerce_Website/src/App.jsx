import { useState } from "react";
import Navbar from "./components/Header/Navbar";
import GettingData from "./components/Data/GettingData";
import AppName from "./components/AppName";
import "./App.module.css";

function App(){

  const [visible, setVisible] = useState(false);

    const showBucket = () =>{
      setVisible(true);
    }
  
    const hideBucket = () =>{
      setVisible(false);
    }

  return <>
  <header>
    <Navbar></Navbar>
    <AppName></AppName>
  </header>
  <main>
    <GettingData></GettingData>
    
  </main>
  <footer></footer>
  </>
}

export default App;