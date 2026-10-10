import './Header.css'

function Header({ titulo, descripcion }) {
  return (
    <header className="header">
      <div className="header__contenido">
        <h1 className="header__titulo">{titulo}</h1>
        <p className="header__descripcion">{descripcion}</p>
      </div>
    </header>
  )
}

export default Header