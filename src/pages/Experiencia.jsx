import { useState } from "react";
import ExperienceDetail from "../components/ExperienceDetail";
import { useTheme } from "../components/ThemeContext";

export default function Experiencia() {
  const [experienceSection, setExperienceSection] = useState("");
  const { theme } = useTheme();

  const handleSectionChange = (section) => {
    setExperienceSection(section);
    console.log("Sección de experiencia activa:", section);
  };

  const closeModal = () => {
    setExperienceSection("");
  };

  const renderModal = () => {
    if (!experienceSection) return null;
    return (
      <ExperienceDetail
        experienceSection={experienceSection}
        closeModal={closeModal}
      />
    );
  };

  return (
    <>
    <div
      className={`${theme === "Light" ? "container-dark" : "container-light"}`}
    >
      <div className={`${theme === "Light" ? "description-container-dark" : "description-container-light"}`}>
        <h1 className="title">Experiencia</h1>
        <p className="description-experience">
          He trabajado en varios proyectos de desarrollo web, utilizando
          tecnologías como Java Script con sus respectivos frameworks en cada
          empresa. Mi enfoque principal ha sido crear aplicaciones web
          escalables y de alto rendimiento, componentes reutilizables, landing
          page, entre otras,siempre buscando la mejor experiencia para el
          usuario.
        </p>
        <div className="experience-list">
          <div >
            <ul className="softeek-monkey">
              <li onClick={() => handleSectionChange("Softtek")}>
                <img
                  src="/Softtek-logo.png"
                  alt="Softtek-logo"
                  className="softtek-logo"
                  width={200}
                />
                <b>Consultora Softtek</b>
              </li>
              <li onClick={() => handleSectionChange("Monkey Coffee")}>
                <img
                  src="/cofee-logo.png"
                  alt="Monkey-logo"
                  className="monkey-logo"
                  width={80}
                />
                <b>Monkey Coffee && Bar</b>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li onClick={() => handleSectionChange("Ahorra Seguros")}>
                <img
                  src="/Ahorra-logo.webp"
                  alt="Ahorra-logo"
                  className="ahorra-logo"
                  width={300}
                />
                <b>Ahorra Seguros</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {renderModal()}
    </>
    
  );
}
