import { useParams } from "react-router-dom"
import productos from "../data/productos"

function DetalleProducto() {

  const { id } = useParams()

  const producto = productos.find(
    p => p.id === Number(id)
  )

  return (
    <div className="p-10">

      <img
        src={producto.imagen}
        className="w-96 rounded-xl"
      />

      <h1 className="text-4xl mt-5">
        {producto.nombre}
      </h1>

      <p>{producto.descripcion}</p>

      <p className="mt-3">
        Precio: ${producto.precio}
      </p>

      <p>
        Stock: {producto.stock}
      </p>

    </div>
  )
}

export default DetalleProducto