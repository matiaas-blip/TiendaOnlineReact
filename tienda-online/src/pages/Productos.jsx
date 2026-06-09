import { useState } from "react";
import productos from "../data/productos";
import ProductoCard from "../components/ProductoCard";

function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [orden, setOrden] = useState("");

  const filtrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (categoria === "" || producto.categoria === categoria)
  );

  const productosOrdenados = [...filtrados].sort((a, b) => {
    if (orden === "asc") return a.precio - b.precio;
    if (orden === "desc") return b.precio - a.precio;
    return 0;
  });

  const categorias = [...new Set(productos.map((p) => p.categoria))];

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-pink-500">
          🎀 Catálogo 🎀
        </h1>

        <p className="text-pink-700 mt-2">
          Encontrá tus productos favoritos 💕
        </p>
      </div>

      <div className="bg-pink-100 p-5 rounded-3xl shadow-md mb-6">

        <div className="flex justify-between items-center mb-4">

          <span className="text-pink-600 font-semibold">
            🌸 Productos encontrados: {productosOrdenados.length}
          </span>

          <span className="bg-pink-200 px-3 py-1 rounded-full">
            🛍️ Tienda Gamer 
          </span>

        </div>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="🔎 Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="
              flex-1
              p-3
              rounded-full
              border-2
              border-pink-200
              focus:outline-none
              focus:border-pink-400
              bg-white
            "
          />

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="
              p-3
              rounded-full
              border-2
              border-pink-200
              bg-white
            "
          >
            <option value="">🌸 Todas las categorías</option>

            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}

          </select>

          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="
              p-3
              rounded-full
              border-2
              border-pink-200
              bg-white
            "
          >
            <option value="">💖 Ordenar</option>
            <option value="asc">⬆️ Menor precio</option>
            <option value="desc">⬇️ Mayor precio</option>
          </select>

        </div>

      </div>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        {productosOrdenados.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>

    </div>
  );
}

export default Productos;