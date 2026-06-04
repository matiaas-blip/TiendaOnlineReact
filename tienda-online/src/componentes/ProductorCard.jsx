import { Link } from "react-router-dom"

function ProductoCard({ producto }) {

  return (
    <div className="border p-4 rounded-xl shadow-lg">

      <img
        src={producto.imagen}
        className="h-52 w-full object-cover"
      />

      <h2 className="text-2xl mt-3">
        {producto.nombre}
      </h2>

      <p>${producto.precio}</p>

      <p>{producto.categoria}</p>

      {
        producto.stock > 0
          ? (
            <button className="bg-green-600 text-white px-4 py-2 rounded mt-3">
              Agregar al carrito
            </button>
          )
          : (
            <button
              disabled
              className="bg-gray-500 text-white px-4 py-2 rounded mt-3"
            >
              Sin stock
            </button>
          )
      }

      <Link
        to={`/producto/${producto.id}`}
        className="block mt-3 text-blue-500"
      >
        Ver detalle
      </Link>

    </div>
  )
}

export default ProductoCard