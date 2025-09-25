import {useState} from "react";
import { useTheme } from "../components/ThemeContext";

export default function Habilidades() {
    const [skillSection, setSkillSection] = useState("Lenguajes");
    const { theme } = useTheme();

    const handleSectionChange = (section) => {
        setSkillSection(section);
    };

  return (
    <div
      className={`${theme === "Light" ? "container-dark" : "container-light"}`}
    >
      <div className={`${theme === "Light" ? "description-container-dark" : "description-container-light"}`}>
        <h2 className="title-skills">Habilidades</h2>
        <div className="languages">
          <h2
            onClick={() => handleSectionChange("Lenguajes")}
            className="subtitle"
          >
            Lenguajes
          </h2>
          {skillSection === "Lenguajes" && (
            <ul>
              <li>
                <img
                  src="/public/java-script-js-seeklogo.png"
                  alt="JavaScript-logo"
                  width={50}
                />
                <b>JavaScript</b>
              </li>
              <li>
                <img src="/public/Java-logo.svg" alt="Java-logo" width={53.5} />
                <b>Java</b>
              </li>
              <li>
                <img
                  src="/public/Python-logo.svg"
                  alt="Python-logo"
                  width={75}
                />
                <b>Python</b>
              </li>
            </ul>
          )}
        </div>
        <div className="frameworks">
          <h2
            onClick={() => handleSectionChange("Frameworks y Librerías")}
            className="subtitle"
          >
            Frameworks y Librerías
          </h2>
          {skillSection === "Frameworks y Librerías" && (
            <ul>
              <li>
                <img src="/public/React-logo.svg" alt="" width={80} />
                <b>React Js</b>
              </li>
              <li>
                <img
                  src="/public/Angular-logo.svg"
                  alt="Angular-logo"
                  width={69}
                />
                <b>Angular</b>
              </li>
              <li>
                <img src="/public/Vue-js.svg" alt="Vue-logo" width={85} />
                <b>Vue.js</b>
              </li>
              <li>
                <img src="/public/Lit-logo.svg" alt="Lit-logo" width={60} />
                <b>Lit Element</b>
              </li>
            </ul>
          )}
        </div>
        <div className="testing">
          <h2
            onClick={() => handleSectionChange("Testing")}
            className="subtitle"
          >
            Testing
          </h2>
          {skillSection === "Testing" && (
            <ul>
              <li>
                <img src="/public/Jest-logo.svg" alt="Jest-logo" width={60} />
                <b>Jest Js</b>
              </li>
              <li>
                <img src="/public/Mocha-logo.svg" alt="Mocha-logo" width={60} />
                <b>Mocha Js</b>
              </li>
              <li>
                <img src="/public/Chai-logo.svg" alt="Chai-logo" width={60} />
                <b>Chai Js</b>
              </li>
            </ul>
          )}
        </div>
        <div className="version-control">
          <h2
            onClick={() => handleSectionChange("Control de Versiones")}
            className="subtitle"
          >
            Control de Versiones
          </h2>
          {skillSection === "Control de Versiones" && (
            <ul>
              <li>
                <img src="/public/Git-logo.svg" alt="Git-logo" width={60} />
                <b>Git</b>
              </li>
              <li>
                <img
                  src="/public/GitHub-logo.svg"
                  alt="GitHub-logo"
                  width={60}
                />
                <b>GitHub</b>
              </li>
              <li>
                <img
                  src="/public/Bit-logo.svg"
                  alt="Bitbucket-logo"
                  width={60}
                />
                <b>Bitbucket</b>
              </li>
            </ul>
          )}
        </div>
        <div className="css">
          <h2
            onClick={() => handleSectionChange("Estilos")}
            className="subtitle"
          >
            Estilos
          </h2>
          {skillSection === "Estilos" && (
            <ul>
              <li>
                <img src="/public/Tw-logo.svg" alt="Tailwind-logo" width={98} />
                <b>Tailwind CSS</b>
              </li>
              <li>
                <img
                  src="/public/Bs-logo.svg"
                  alt="Bootstrap-logo"
                  width={60}
                />
                <b>Bootstrap</b>
              </li>
            </ul>
          )}
        </div>
        <div className="other-skills">
          <h2
            onClick={() => handleSectionChange("Otras Habilidades")}
            className="subtitle"
          >
            Otras Habilidades
          </h2>
          {skillSection === "Otras Habilidades" && (
            <ul className="other-skills-list">
              <li>
                <img
                  src="/public/PS-logo.svg"
                  alt="Photoshop-logo"
                  width={60}
                />
                <b>Photoshop</b>
              </li>
              <li>
                <img src="/public/Figma-logo.svg" alt="Figma-logo" width={40} />
                <b>Figma</b>
              </li>
              <li>
                <img
                  src="/public/AI-logo.svg"
                  alt="Illustrator-logo"
                  width={62}
                />
                <b>Illustrator</b>
              </li>
              <li>
                <img
                  src="/public/camera.png"
                  alt="Photography-logo"
                  width={75}
                />
                <b>Fotografía</b>
              </li>
              <li>
                <img src="/public/wordpress-icon.svg" alt="WordPress-logo" width={60} />
                <b>WordPress</b>
              </li>
              <li>
                <img
                  src="/public/work-team.png"
                  alt="Teamwork-logo"
                  width={66}
                />
                <b>Colaboración</b>
              </li>
              <li>
                <img
                  src="/public/Comunicacion.png"
                  alt="Comunicacion-logo"
                  width={90}
                />
                <b>Comunicación</b>
              </li>
              <li>
                <img
                  src="/public/problemas.png"
                  alt="Problem-solving-logo"
                  width={70}
                />
                <b>Resolución de problemas</b>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
