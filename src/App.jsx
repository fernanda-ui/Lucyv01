import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundVideo from "./components/BackgroundVideo";
import Section2 from "./components/Section2";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const imgRef = useRef(null);

  useEffect(() => {
    // Cuando se carga la pagina lo lleva al inicio
    window.scrollTo(0, 0);

    if (!imgRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { opacity: 1, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    const scrollEffect = gsap.to(imgRef.current, {
      scale: 0.8,
      y: 50,
      opacity: 0.7,
      transformOrigin: "center bottom",
      scrollTrigger: {
        trigger: ".section-two",
        start: "top bottom",
        end: "top center",
        scrub: 1.5,
        onLeaveBack: () => {
          // Resetea la imagen al volver al inicio
          gsap.to(imgRef.current, { scale: 1, y: 0, opacity: 1, duration: 0.5 });
        },
        onEnterBack: () => {
          // Evita acumulación de transformaciones al subir
          gsap.to(imgRef.current, { scale: 1, y: 0, opacity: 1, duration: 0.5 });
        },
      },
    });

    return () => {
      // Limpia la animacion para evitar errores al recargar
      scrollEffect.kill();
    };
  }, []);

  return (
    <div>
      <BackgroundVideo />
      <div className="Nombre-Lucy">
        <h1>Lucy</h1>
        <button>Download</button>
      </div>
      <img ref={imgRef} src="/img/principal.png" className="fixed-image" alt="Imagen fija" />

      <div className={`section-two ${Section2 ? "show" : ""}`}>
        <Section2 />
      </div>
    </div>
  );
}

export default App;
