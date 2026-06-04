import productos from "../data/productos"
import ProductoCard from "../components/ProductoCard"

function Productos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">

      {productos.map(producto => (
        <ProductoCard
          key={producto.id}
          producto={producto}
        />
      ))}

    </div>
  )
}

export default Productos