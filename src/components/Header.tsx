export default function Header() {
  return (
    <nav className="flex justify-between h-17">
      <span className="flex items-center social-media w-2/8 p-1">
        social media here
      </span>
      <span className="w-2xl flex items-center justify-center">
        {" "}
        <ul className="flex justify-end gap-9 ">
          <li>Inicio</li>
          <li>Sobre Mi</li>
          <li>Habilidades</li>
          <li>Proyectos</li>
          <li>Experiencia</li>
          <li>Contacto</li>
        </ul>
      </span>
    </nav>
  );
}
