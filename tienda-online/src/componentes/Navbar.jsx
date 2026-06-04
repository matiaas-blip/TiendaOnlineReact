import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-5">

      <Link to="/">Inicio</Link>

      <Link to="/productos">Productos</Link>

      <Link to="/carrito">Carrito</Link>

      <Link to="/contacto">Contacto</Link>

    </nav>
  )
}

export default Navbar