import React from "react";
import "./App.css";

import Home from "./components/Home";
import Section1 from "./components/Section1";
import Soon from "./components/Soon";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
   
      <Home />
      <Section1 />
      <Contact /> 
      <Soon />
    </div> 
  );
}
export default App;
