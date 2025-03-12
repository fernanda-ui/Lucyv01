import React from "react";
import { gsap } from "gsap";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
    gsap.to(".text1", { opacity: 1, duration: 1, delay: 1 });
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/fondo.mp4" type="video/mp4" /></video>
      <div className="text1">
        <h1>New</h1>
        <p>secretary</p>
      </div>
      
      <div className="text2">
        <p>Optimize your productivity with our smart virtual secretary, designed to assist you with your daily tasks with voice commands.</p>
      </div>

      <div className="text3">
        <h1>With</h1>
        <p>IA</p>
      </div>

      <div className="Nombre-Lucy">
        <h1>Lucy</h1>
        <button>Download</button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
