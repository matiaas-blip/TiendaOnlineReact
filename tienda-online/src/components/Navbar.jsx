import { Link } from "react-router-dom"
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import logo from "../assets/logo.jpg"

function Navbar() {

  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <nav className="
      bg-pink-400
      p-4
      flex
      flex-wrap
      justify-between
      items-center
    ">

      <div className="flex flex-wrap gap-4">
        <Link to="/">🏠 Inicio</Link>

        <Link to="/productos">🛍️ Productos</Link>

        <Link to="/carrito" className="relative">
          🛒 Carrito

          {cantidadTotal > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs px-2 rounded-full">
              {cantidadTotal}
            </span>
          )}
        </Link>

        <Link to="/contacto">💌 Contacto</Link>

        <Link to="/nosotros">🎀 Nosotros</Link>
      </div>

      <img
        src={logo}
        alt="Logo"
        className="h-12 w-auto"
      />

    </nav>
  )
}

export default Navbar