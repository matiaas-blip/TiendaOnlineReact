import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import logo from "../assets/logo.svg";

function Navbar() {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <nav
      className="
        bg-pink-400
        px-4
        py-3
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
      "
    >
      <img
        src={logo}
        alt="Logo"
        className="h-14 w-auto"
      />

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-4
          text-sm
          md:text-base
          font-medium
        "
      >
        <Link
          to="/"
          className="hover:text-white transition"
        >
          🏠 Inicio
        </Link>

        <Link
          to="/productos"
          className="hover:text-white transition"
        >
          🛍️ Productos
        </Link>

        <Link
          to="/carrito"
          className="relative hover:text-white transition"
        >
          🛒 Carrito

          {cantidadTotal > 0 && (
            <span
              className="
                absolute
                -top-2
                -right-3
                bg-pink-600
                text-white
                text-xs
                px-2
                rounded-full
              "
            >
              {cantidadTotal}
            </span>
          )}
        </Link>

        <Link
          to="/contacto"
          className="hover:text-white transition"
        >
          💌 Contacto
        </Link>

        <Link
          to="/nosotros"
          className="hover:text-white transition"
        >
          🎀 Nosotros
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;