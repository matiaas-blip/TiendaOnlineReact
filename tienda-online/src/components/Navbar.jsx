import { Link } from "react-router-dom"
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Navbar() {

  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <nav className="bg-black text-white p-4 flex gap-5">

      <Link to="/">Inicio</Link>

      <Link to="/productos">Productos</Link>

      <Link to="/carrito" className="relative text-xl">

        🛒

        {cantidadTotal > 0 && (
          <span className="
            absolute -top-2 -right-3
            bg-red-500 text-white text-xs
            px-2 py-0.5 rounded-full
            animate-pulse
          ">
            {cantidadTotal}
          </span>
        )}
      </Link>

      <Link to="/contacto">Contacto</Link>

    </nav>
  )
}

export default Navbar