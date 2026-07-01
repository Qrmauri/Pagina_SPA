export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        INACAP<span>Coyhaique</span>
      </div>
      <nav className="header__nav">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#carreras">Carreras</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}
