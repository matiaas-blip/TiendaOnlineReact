import { Link } from "react-router-dom"

function Inicio() {
  return (
    <div className="p-10 text-center">

      <h1 className="text-5xl font-bold mb-5">
        Nova Gaming
      </h1>

      <p className="mb-5">
        Tienda online de periféricos gamer.
      </p>

      <img
        src="/img/banner.jpg"
        className="mx-auto rounded-xl mb-5"
      />

      <Link
        to="/productos"
        className="bg-violet-600 px-5 py-3 rounded-xl"
      >
        Ver Productos
      </Link>

    </div>
  )
}

export default Inicio