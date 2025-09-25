
import Switch from "./Switch";

export default function Nav({ setActiveSection }) {

  const handleSection = (section) => {
    setActiveSection(section);
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
          <Switch  />
          <span>Dark</span>
        </div>
      </div>
    </>
  );
}
