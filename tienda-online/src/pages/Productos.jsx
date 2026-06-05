import { useState } from "react";
import productos from "../data/productos";
import ProductoCard from "../components/ProductoCard";

function Productos() {

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [orden, setOrden] = useState("");

  const filtrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoria === "" || producto.categoria === categoria)
  );

  const productosOrdenados = [...filtrados].sort((a, b) => {

    if (orden === "asc") {
      return a.precio - b.precio;
    }

    if (orden === "desc") {
      return b.precio - a.precio;
    }

    return 0;
  });

  return (
    <div>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* Categorías */}
      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Todas</option>
        <option value="Periféricos">Periféricos</option>
        <option value="Audio">Audio</option>
      </select>

      {/* Ordenamiento */}
      <select onChange={(e) => setOrden(e.target.value)}>
        <option value="">Sin ordenar</option>
        <option value="asc">Menor precio</option>
        <option value="desc">Mayor precio</option>
      </select>

      {/* Productos */}
      <div>
        {productosOrdenados.map(producto => (
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