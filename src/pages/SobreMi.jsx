import { useTheme } from "../components/ThemeContext";
export default function SobreMi() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme === "Light" ? "container-dark" : "container-light"}`}
    >
      <div
        className={`${
          theme === "Light"
            ? "description-container-dark"
            : "description-container-light"
        }`}
      >
        <img src="/public/Yo.png" alt="img-yo" className="about-image" />
        <h1 className="title">Sobre Mi</h1>

        <p className="description-about">
          Desarrollador de software con experiencia en la creación de
          aplicaciones web modernas, integración de APIs y construcción de
          componentes reutilizables utilizando frameworks de JavaScript. Me
          destaco por mi capacidad de resolver problemas, trabajar en entornos
          ágiles y adaptarme rápidamente a nuevas tecnologías. Busco aportar
          valor en proyectos de alto impacto dentro del sector tecnológico.
        </p>
      </div>
    </div>
  );
}
