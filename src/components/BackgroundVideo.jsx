import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BackgroundVideo.css";

gsap.registerPlugin(ScrollTrigger);

const BackgroundVideo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scale: 0.3,  
      opacity: 0,  
      borderRadius: "50%", 
      filter: "blur(10px)", 
      transformOrigin: "center center", 
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=300px top",
        scrub: 2, 
      },
    });
  }, []);


  return (
    <div ref={containerRef} className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/fondo.mp4" type="video/mp4" />
      </video>
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
    </div>
  );
};

export default BackgroundVideo;
