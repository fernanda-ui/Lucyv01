import React from "react";
import BackgroundVideo from "./components/BackgroundVideo";
import Section2 from "./components/Section2"; 
import "./App.css";

function App() {
  return (
    <div>
      <BackgroundVideo />
      <img src="/img/principal.png" alt="Imagen fija" className="fixed-image" />

      <div className={`section-two ${Section2 ? "show" : ""}`}>
        <Section2 />
      </div>

    </div>
  );
}

export default App;

