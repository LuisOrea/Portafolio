import { useState } from "react";
import Switch from "./Switch";

export default function Nav({ setActiveSection }) {
  const [open, setOpen] = useState(false);

  const handleSection = (section) => {
    setActiveSection(section);
    setOpen(false); // Cierra el menú al seleccionar
    console.log("Sección activa:", section);
  };

  return (
    <>
      <div className="nav">
        <ul>
          <li onClick={() => handleSection("Sobre mi")}>Sobre mi</li>
          <li onClick={() => handleSection("Habilidades")}>Habilidades</li>
          <li onClick={() => handleSection("Experiencia")}>Experiencia</li>
          <li onClick={() => handleSection("Contacto")}>Contacto</li>
        </ul>
        <div className="theme-switcher">
          <span>Light</span>
          <Switch />
          <span>Dark</span>
        </div>
      </div>

      <button
        className="hamburger-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span className="hamburger-icon">&#9776;</span>
      </button>


      {open && (
        <div className="nav-hamburguer">
          <ul>
            <li onClick={() => handleSection("Sobre mi")}>Sobre mi</li>
            <li onClick={() => handleSection("Habilidades")}>Habilidades</li>
            <li onClick={() => handleSection("Experiencia")}>Experiencia</li>
            <li onClick={() => handleSection("Contacto")}>Contacto</li>
          </ul>
          <div className="theme-switcher">
            <span>Light</span>
            <Switch />
            <span>Dark</span>
          </div>
        </div>
      )}
    </>
  );
}