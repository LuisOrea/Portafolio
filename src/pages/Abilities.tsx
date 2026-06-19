import Title from "../components/Title";

export function Abilities() {
  return (
    <div className="mt-13 p-10 max-w-240 mx-auto">
      <Title title="Habilidades" />
      <div className="mt-5">
        Dentro de mis habilidades y tecnologias, destacan las siguientes:
      </div>

      <div>
        <b>Habilidades Técnicas (Hard Skills)</b>

        <p className="mt-5">
          <b>
            <i>Desarrollo Full-Stack: </i>
          </b>
          Experiencia integral en el ciclo de vida del software, desde la
          construcción de interfaces dinámicas hasta la arquitectura de
          servidores robustos.
        </p>

        <p className="mt-5">
          <b>
            <i> Ciberseguridad y Redes:</i>
          </b>
          Enfoque diferenciador orientado a la protección de datos y el
          diagnóstico profundo de infraestructura mediante análisis de tráfico y
          scripts de automatización.
        </p>

        <p className="mt-5">
          <b>Calidad y Maquetación: </b>
          Garantía de software estable mediante pruebas automatizadas y diseño
          de interfaces modernas y responsivas.
        </p>

        <p className="mt-5">
          <b>Herramientas y Entornos: </b>
          Gestión eficiente del código y colaboración en entornos profesionales
          de alto impacto.
        </p>
      </div>
    </div>
  );
}
