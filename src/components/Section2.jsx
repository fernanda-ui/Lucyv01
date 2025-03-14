import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Section2.css";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const sectionRef = useRef(null);
  const buttonsRef = useRef([]);

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
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  const images = ["/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png"];

  // Para mover los botones segun la posición del mouse
  const handleMouseMove = (e, index) => {
    const button = buttonsRef.current[index];

    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10; 
    const y = (e.clientY - rect.top - rect.height / 2) / 10; 

    gsap.to(button, { x, y, duration: 0.3, ease: "power2.out" });
  };

  // Restaurar la posicion cuando el mouse sale
  const handleMouseLeave = (index) => {
    gsap.to(buttonsRef.current[index], { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
  };

  return (
    <div ref={sectionRef} className="section-two">
      <div className="buttons-container">
        {images.map((imgSrc, index) => (
          <button
            key={index}
            ref={(el) => (buttonsRef.current[index] = el)}
            className="btn"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img src={imgSrc} alt={`Botón ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
