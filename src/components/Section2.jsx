import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Section2.css";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return; 

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100", 
          end: "top center",
          scrub: 1, 
          markers: false,
        },
      }
    );

    ScrollTrigger.refresh(); 
  }, []);

  return (
    <div ref={sectionRef} className="section-two">
      <h1>222</h1>
    </div>
  );
};

export default SectionTwo;
