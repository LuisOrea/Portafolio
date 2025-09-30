import React from "react";
import ReactDOM from "react-dom";

export default function ExperienceDetail({ experienceSection, closeModal }) {
  const handleImageClick = (e) => {
    // Solo ejecuta en escritorio (mayor a 900px)
    if (window.innerWidth > 900) {
      const img = e.target;
      if (img.clientWidth <= 300) {
        img.style.width = "600px";
      } else {
        img.style.width = "300px";
      }
    }
  };

  if (!experienceSection) return null;

  // Modal content
  let modalContent = null;
  switch (experienceSection) {
    case "Softtek":
      modalContent = (
        <div className="experience-modal">
          <div className="modal-header">
            <img
              src="/Softtek-logo.png"
              alt="Softtek Logo"
              className="logo-modal"
              width={100}
            />
            <h2>SOFTTEK</h2>
            <span className="close-modal" onClick={closeModal}>
              X
            </span>
          </div>
          <div className="modal-subheader">
            <h3>Ingeniero de Software</h3>
            <h4>Febrero 2025 - Septiembre 2025</h4>
          </div>
          <p>
            Dentro del tiempo en el que forme parte de la Consultora Softtek,
            tuve la oportunidad de trabajar para el cliente Bancomer haciendo
            uso de la tecnología LitElement y JavaScript, participando en las
            areas de Metas para menores y Sostenibilidad, donde desarrolle las
            siguientes actividades:
          </p>
          <ol>
            <li>
              Desarrollo de componentes web reutilizables con LitElement,
              asegurando consistencia y mantenibilidad en el frontend.
            </li>
            <li>
              Implementación de interfaces dinámicas y accesibles, optimizando
              la experiencia de usuario en aplicaciones bancarias.
            </li>
            <li>
              Colaboración en equipos ágiles (Scrum) para la entrega continua de
              nuevas funcionalidades.
            </li>
            <li>
              Uso de pruebas unitarias e integración para asegurar la calidad
              del software y reducir incidencias en producción.
            </li>
            <li>
              Integración de componentes con APIs REST internas, asegurando
              cumplimiento con los estándares de seguridad bancaria.
            </li>
          </ol>
          <h5>Evidencias de trabajo:</h5>
          <video
            className="evidencia-video"
            type="video/mp4"
            controls
            muted
            autoPlay
            loop
            width={600}
          >
            <source src="/Bbva.mp4" />
          </video>
        </div>
      );
      break;

    case "Monkey Coffee":
      modalContent = (
        <div className="experience-modal">
          <div className="modal-header">
            <img
              src="/cofee-logo.png"
              alt="Monkey Coffee Logo"
              className="logo-modal"
              width={80}
            />
            <h2>MONKEY COFFEE && BAR</h2>
            <span className="close-modal" onClick={closeModal}>
              X
            </span>
          </div>
          <div className="modal-subheader">
            <h3>Desarrollador Front End</h3>
            <h4>Enero 2024 - Julio 2024</h4>
          </div>
          <p>
            En mi tiempo en Monkey Coffee, me enfoqué en el desarrollo de un
            menu digital para mejorar la experiencia del cliente y optimizar las
            operaciones del café. Utilicé tecnologías web modernas como React Js
            para crear una interfaz atractiva y fácil de usar.
          </p>
          <p>Mis responsabilidades incluían:</p>
          <ol>
            <li>
              Desarrollo y mantenimiento del menú digital interactivo,
              asegurando un diseño intuitivo y adaptable a dispositivos móviles.
            </li>
            <li>
              Resolución de bugs y mejoras continuas, optimizando la estabilidad
              y usabilidad de la plataforma.
            </li>
            <li>
              Implementación de nuevas funcionalidades basadas en los
              comentarios de los usuarios y las tendencias del mercado.
            </li>
          </ol>
          <h5>Evidencias de trabajo:</h5>
          <video
            className="evidencia-video"
            src="/Monkey-menu.mp4"
            controls
            muted
            loop
            autoPlay
            width={300}
          ></video>
        </div>
      );
      break;

    case "Ahorra Seguros":
      modalContent = (
        <div className="experience-modal">
          <div className="modal-header">
            <img
              src="/Ahorra-logo.webp"
              alt="Ahorra Seguros Logo"
              width={120}
              className="logo-modal"
            />
            <h2>AHORRA SEGUROS</h2>
            <span className="close-modal" onClick={closeModal}>
              X
            </span>
          </div>
          <div className="modal-subheader">
            <h3>Desarrollador Frontend</h3>
            <h4>Julio 2024 - Febrero 2025</h4>
          </div>
          <p>
            Durante mi tiempo en Ahorra Seguros, me enfoqué en el desarrollo de
            soluciones digitales para mejorar la experiencia del cliente en el
            sector de seguros. Utilicé tecnologías como Vue js para crear
            landing pages e interfaces interactivas y eficientes.
          </p>
          <ol>
            <li>
              Desarrollo y mantenimiento de landing pages corporativas,
              asegurando un diseño responsivo y optimizado para distintos
              dispositivos.
            </li>
            <li>
              Resolución de bugs y mejoras continuas, garantizando estabilidad y
              mejor experiencia de usuario.
            </li>
            <li>
              Implementación de nuevas funcionalidades y optimización de la
              performance en producción.
            </li>
            <li>
              Integración y consumo de APIs REST internas, conectando el
              frontend con servicios clave de la compañía.
            </li>
            <li>
              Migración de proyectos de Vue 2 a Vue 3, refactorizando
              componentes y optimizando la performance con las nuevas
              funcionalidades de Vue 3.
            </li>
          </ol>
          <h5>Evidencias de trabajo:</h5>
          <div className="evidencias-ahorra">
            <video
              src="/Ahorra.mp4"
              className="video-ahorra"
              controls
              width={600}
            ></video>
            <video
              src="/Ahorra-videollamada.mp4"
              className="video-ahorra"
              controls
              width={600}
            ></video>
          </div>
          <div className="clientes-ahorra">
            <img
              className="img-cliente"
              src="/Axa.png"
              alt="Axa"
              onClick={handleImageClick}
            />
            <img
              className="img-cliente"
              src="/Banorte.png"
              alt="Banorte"
              onClick={handleImageClick}
            />
            <img
              className="img-cliente"
              src="/gnp.png"
              alt="GNP"
              onClick={handleImageClick}
            />
          </div>
        </div>
      );
      break;

    default:
      return null;
  }

  // Render modal in portal
  return ReactDOM.createPortal(
    <div className="container-modal" onClick={closeModal}>
      {/* Evita cerrar el modal al hacer click dentro */}
      <div onClick={(e) => e.stopPropagation()}>{modalContent}</div>
    </div>,
    document.body
  );
}
