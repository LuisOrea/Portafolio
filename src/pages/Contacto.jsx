import { useTheme } from "../components/ThemeContext";
import Correo from "../components/Correo";
import Ws from "../components/Ws";

export default function Contacto() {
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
        <h1 className="title">Contacto</h1>
        <p className="description-contact">
          Si deseas ponerte en contacto conmigo, puedes enviarme un correo
          electrónico a <b>luisadrianmartinezorea@gmail.com</b> o a través de
          whatsapp al número
          <b> +52 5548737525</b>. Estoy abierto a llamadas para cualquier
          oportunidad de colaboración y proyectos interesantes.
        </p>
        <div className="contacto">
          <div className="Ws">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=luisadrianmartinezorea@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Correo />
            </a>
          </div>
          <div className="Ws">
            <a href="https://wa.me/525548737525" target="_blank" rel="noreferrer">
              <Ws />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
