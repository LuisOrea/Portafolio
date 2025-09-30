import Nav from "../components/Nav";
import SobreMi from "./SobreMi";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";
import Contacto from "./Contacto";
import Loader from "../components/loader";
import { ThemeProvider } from "../components/ThemeContext";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Sobre mi");
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "Sobre mi":
        return <SobreMi />;
      case "Habilidades":
        return <Habilidades />;
      case "Experiencia":
        return <Experiencia />;
      case "Contacto":
        return <Contacto />;
      default:
        return <SobreMi />;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div >
        <Nav
          setActiveSection={(section) => {
            setTransitioning(true);
            setTimeout(() => {
              setActiveSection(section);
              setTransitioning(false);
            }, 600); 
          }}
        />
        <div
          key={activeSection}
          className={`${transitioning ? "slide-out" : "slide-in"} loader-container`}
        >
          {loading ? <Loader /> : renderSection()}
        </div>
      </div>
    </ThemeProvider>
  );
}
