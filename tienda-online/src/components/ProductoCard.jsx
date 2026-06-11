import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

function ProductoCard({ producto }) {

const { agregarProducto, carrito } = useContext(CarritoContext);

const productoEnCarrito = carrito.find(
item => item.id === producto.id
);

const cantidadEnCarrito = productoEnCarrito
? productoEnCarrito.cantidad
: 0;

const stockDisponible =
producto.stock - cantidadEnCarrito;

return ( <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-lg transition">

  <img
    src={producto.imagen}
    alt={producto.nombre}
    className="h-52 w-full object-contain bg-white"
  />

  <h2>{producto.nombre}</h2>

  <p className="text-pink-500 font-bold text-lg">
    ${producto.precio}
  </p>

  <p>{producto.categoria}</p>

  <p className="text-sm text-gray-600">
    Stock disponible: {stockDisponible}
  </p>

  {stockDisponible > 0 ? (
    <button
      onClick={() => agregarProducto(producto)}
      className="
        bg-pink-400
        text-white
        px-4 py-2
        mt-2
        rounded-full
        hover:bg-pink-500
        transition
      "
    >
      Agregar
    </button>
  ) : (
    <button
      disabled
      className="
        bg-gray-500
        text-white
        px-4
        py-2
        mt-2
        rounded-full
      "
    >
      Sin stock
    </button>
  )}

  <Link
    to={`/producto/${producto.id}`}
    className="block mt-2 text-blue-500"
  >
    Ver detalle
  </Link>

</div>

);
}

export default ProductoCard;
