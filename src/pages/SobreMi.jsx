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

        <div className="container-description"><p className="description-about">
          Luis Martínez, desarrollador de software de 25 años con 2 años de experiencia en el diseño y desarrollo de aplicaciones web modernas. He trabajado con tecnologías como React.js, JavaScript, Vue.js y LitElement, desarrollando componentes reutilizables, interfaces eficientes e integraciones con APIs para distintos entornos empresariales.
        </p>
        <p className="description-about">
          Además de mi experiencia en frontend, tengo la capacidad de desenvolverme en otras áreas del desarrollo como backend, testing y soporte técnico, lo que me permite adaptarme a distintos roles según las necesidades del proyecto.
        </p>
        <p className="description-about">
          Me caracteriza una sólida capacidad de análisis y resolución de problemas, así como una rápida adaptación a nuevas tecnologías. Puedo integrarme con facilidad a diferentes stacks o áreas de desarrollo, asumiendo retos técnicos en entornos cambiantes.
        </p>
        <p className="description-about">
          Cuento con experiencia colaborando en equipos ágiles, entregando soluciones funcionales, escalables y alineadas a los objetivos del negocio.
        </p>
        <p className="description-about">
          Mi objetivo profesional es seguir aportando valor en proyectos innovadores y de alto impacto dentro del sector tecnológico, participando en desarrollos que generen resultados reales y mejoren la experiencia del usuario.
        </p>
        </div>
        
      </div>
    </div>
  );
}
