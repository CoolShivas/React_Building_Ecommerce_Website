import GettingData from "./components/Data/GettingData";
import AppName from "./components/AppName";
import "./App.module.css";

function App(){
  return <>
  <header>
    <AppName></AppName>
  </header>
  <main>
    <GettingData></GettingData>
  </main>
  <footer></footer>
  </>
}

export default App;