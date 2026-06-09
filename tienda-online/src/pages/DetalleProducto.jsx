import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import productos from "../data/productos";
import { CarritoContext } from "../context/CarritoContext";

function DetalleProducto() {
  const { id } = useParams();

  const { agregarProducto } = useContext(CarritoContext);

  const producto = productos.find(
    (p) => p.id === Number(id)
  );

  if (!producto) {
    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold text-pink-500">
          Producto no encontrado 😿
        </h1>

        <Link
          to="/productos"
          className="
            inline-block
            mt-5
            bg-pink-500
            text-white
            px-6
            py-3
            rounded-full
          "
        >
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Imagen */}
          <div>

            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="
                w-full
                h-[450px]
                object-contain
                rounded-3xl
                bg-pink-50
                p-4
              "
            />

          </div>

          {/* Información */}
          <div>

            <div className="flex gap-2 flex-wrap">

              <span className="bg-pink-200 px-3 py-1 rounded-full">
                🎀 Nuevo
              </span>

              <span className="bg-red-400 text-white px-3 py-1 rounded-full">
                🔥 Más vendido
              </span>

            </div>

            <h1 className="text-4xl font-bold mt-4">
              {producto.nombre}
            </h1>

            <div className="text-yellow-500 text-2xl mt-2">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-pink-500 text-4xl font-bold mt-4">
              ${producto.precio}
            </p>

            <p className="mt-5 text-gray-600 text-lg">
              {producto.descripcion}
            </p>

            <div className="mt-5 space-y-2">

              <p>
                <strong>Categoría:</strong> {producto.categoria}
              </p>

              <p>
                <strong>Stock disponible:</strong> {producto.stock}
              </p>

            </div>

            <div className="bg-green-100 p-4 rounded-2xl mt-5">

              🚚 Envío gratis en compras superiores a $50.000

            </div>

            <button
              onClick={() => agregarProducto(producto)}
              disabled={producto.stock <= 0}
              className="
                mt-6
                bg-pink-500
                hover:bg-pink-600
                text-white
                px-8
                py-4
                rounded-full
                text-lg
                font-bold
                transition
                disabled:bg-gray-400
              "
            >
              🛒 Agregar al carrito
            </button>

            <div className="flex gap-3 mt-6 flex-wrap">

              <Link
                to="/productos"
                className="
                  bg-pink-100
                  hover:bg-pink-200
                  px-5
                  py-3
                  rounded-full
                  font-semibold
                "
              >
                🔙 Volver al catálogo
              </Link>

              <Link
                to="/carrito"
                className="
                  bg-pink-500
                  hover:bg-pink-600
                  text-white
                  px-5
                  py-3
                  rounded-full
                  font-semibold
                "
              >
                🛒 Ir al carrito
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* Características */}
      <div className="mt-8">

        <h2 className="text-3xl font-bold text-pink-500 mb-4">
          🎮 Características
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-pink-100 p-5 rounded-2xl shadow">
            🎮 Ideal para gaming
          </div>

          <div className="bg-pink-100 p-5 rounded-2xl shadow">
            💖 Diseño exclusivo Pinkie Nova
          </div>

          <div className="bg-pink-100 p-5 rounded-2xl shadow">
            🚚 Envíos a todo el país
          </div>

        </div>

      </div>

      {/* Información adicional */}
      <div className="mt-8 bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold text-pink-500 mb-4">
          📝 Descripción detallada
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {producto.descripcion}
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Todos nuestros productos son seleccionados especialmente para
          ofrecer una experiencia gamer cómoda, moderna y con la estética
          característica de Pinkie Nova Gaming.
        </p>

      </div>

      {/* Gatito decorativo */}
      <div
        className="
          fixed
          bottom-4
          right-4
          text-7xl
          select-none
        "
      >
        🐱💕
      </div>

    </div>
  );
}

export default DetalleProducto;