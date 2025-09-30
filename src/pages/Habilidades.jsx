import { useState, useEffect } from "react";
import { useTheme } from "../components/ThemeContext";

// Hook para detectar si es móvil/tablet
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

// Carrusel para móvil/tablet
function SkillCarousel({ skills }) {
  const [index, setIndex] = useState(0);
  if (!skills || skills.length === 0) return null;
  const prevSkill = () => setIndex(index === 0 ? skills.length - 1 : index - 1);
  const nextSkill = () => setIndex(index === skills.length - 1 ? 0 : index + 1);

  return (
    <div className="skills-carousel">
      <button className="carousel-btn" onClick={prevSkill} aria-label="Anterior">&#8592;</button>
      <div className="skill-item">
        <img src={skills[index].img} alt={skills[index].alt} width={skills[index].width} />
        <b>{skills[index].label}</b>
      </div>
      <button className="carousel-btn" onClick={nextSkill} aria-label="Siguiente">&#8594;</button>
    </div>
  );
}

const skillsData = {
  Lenguajes: [
    { img: "/java-script-js-seeklogo.png", alt: "JavaScript-logo", label: "JavaScript", width: 50 },
    { img: "/Java-logo.svg", alt: "Java-logo", label: "Java", width: 53.5 },
    { img: "/Python-logo.svg", alt: "Python-logo", label: "Python", width: 75 },
  ],
  "Frameworks y Librerías": [
    { img: "/React-logo.svg", alt: "React-logo", label: "React Js", width: 80 },
    { img: "/Angular-logo.svg", alt: "Angular-logo", label: "Angular", width: 69 },
    { img: "/Vue-js.svg", alt: "Vue-logo", label: "Vue.js", width: 85 },
    { img: "/Lit-logo.svg", alt: "Lit-logo", label: "Lit Element", width: 60 },
  ],
  Testing: [
    { img: "/Jest-logo.svg", alt: "Jest-logo", label: "Jest Js", width: 60 },
    { img: "/Mocha-logo.svg", alt: "Mocha-logo", label: "Mocha Js", width: 60 },
    { img: "/Chai-logo.svg", alt: "Chai-logo", label: "Chai Js", width: 60 },
  ],
  "Control de Versiones": [
    { img: "/Git-logo.svg", alt: "Git-logo", label: "Git", width: 60 },
    { img: "/Github-logo.svg", alt: "GitHub-logo", label: "GitHub", width: 60 },
    { img: "/Bit-logo.svg", alt: "Bitbucket-logo", label: "Bitbucket", width: 60 },
  ],
  Estilos: [
    { img: "/Tw-logo.svg", alt: "Tailwind-logo", label: "Tailwind CSS", width: 98 },
    { img: "/Bs-logo.svg", alt: "Bootstrap-logo", label: "Bootstrap", width: 60 },
  ],
  "Otras Habilidades": [
    { img: "/PS-logo.svg", alt: "Photoshop-logo", label: "Photoshop", width: 60 },
    { img: "/Figma-logo.svg", alt: "Figma-logo", label: "Figma", width: 40 },
    { img: "/AI-logo.svg", alt: "Illustrator-logo", label: "Illustrator", width: 62 },
    { img: "/camera.png", alt: "Photography-logo", label: "Fotografía", width: 75 },
    { img: "/wordpress-icon.svg", alt: "WordPress-logo", label: "WordPress", width: 60 },
  ],
};

export default function Habilidades() {
  const [skillSection, setSkillSection] = useState("Lenguajes");
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const handleSectionChange = (section) => {
    setSkillSection(section);
  };

  return (
    <div className={`${theme === "Light" ? "container-dark" : "container-light"}`}>
      <div className={`${theme === "Light" ? "description-container-dark" : "description-container-light"}`}>
        <h2 className="title-skills">Habilidades</h2>
        {Object.entries(skillsData).map(([section, skills]) => (
          <div key={section} style={{ marginBottom: "32px" }}>
            <h2
              onClick={() => handleSectionChange(section)}
              className={`subtitle${skillSection === section ? " active" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {section}
            </h2>
            {skillSection === section && (
              isMobile ? (
                <SkillCarousel skills={skills} />
              ) : (
                <ul className="img-skills">
                  {skills.map((skill) => (
                    <li key={skill.label}>
                      <img src={skill.img} alt={skill.alt} width={skill.width} />
                      <b>{skill.label}</b>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}