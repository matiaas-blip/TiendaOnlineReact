import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
  const {
    carrito,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad,
    total,
    vaciarCarrito
  } = useContext(CarritoContext);

  const [confirmar, setConfirmar] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    envio: "retiro",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validarFormulario = () => {
    if (!form.nombre || !form.email || !form.telefono || !form.direccion) {
      alert("Completa todos los campos obligatorios");
      return false;
    }

    if (!form.email.includes("@")) {
      alert("Email inválido");
      return false;
    }

    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return false;
    }

    return true;
  };

  const finalizarCompra = () => {
    if (!validarFormulario()) return;

    alert("Compra realizada con éxito 🛒");

    vaciarCarrito();

    setForm({
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      envio: "retiro",
      mensaje: ""
    });

    setConfirmar(false);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-4">Carrito</h1>

      {/* FORMULARIO */}
      <div className="border p-4 mb-4 rounded">

        <h2 className="font-bold mb-2">Datos del comprador</h2>

        <input
          name="nombre"
          placeholder="Nombre y apellido"
          value={form.nombre}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        <input
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        <select
          name="envio"
          value={form.envio}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        >
          <option value="retiro">Retiro en tienda</option>
          <option value="envio">Envío a domicilio</option>
        </select>

        <textarea
          name="mensaje"
          placeholder="Mensaje opcional"
          value={form.mensaje}
          onChange={handleChange}
          className="border p-2 w-full"
        />

      </div>

      {/* PRODUCTOS */}
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map(item => (
          <div key={item.id} className="border p-4 mb-3 flex justify-between">

            <div>
              <h2 className="font-bold">{item.nombre}</h2>
              <p>${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p>Subtotal: ${item.precio * item.cantidad}</p>
            </div>

            <div className="flex gap-2 items-center">

              <button onClick={() => disminuirCantidad(item.id)}>-</button>
              <button onClick={() => aumentarCantidad(item.id)}>+</button>
              <button onClick={() => eliminarProducto(item.id)}>X</button>

            </div>

          </div>
        ))
      )}

      <h2 className="text-xl font-bold mt-4">
        Total: ${total}
      </h2>

      <button
        onClick={() => setConfirmar(true)}
        disabled={carrito.length === 0}
        className="bg-green-600 text-white px-4 py-2 mt-4 rounded disabled:opacity-50"
      >
        Finalizar compra
      </button>

      {/* MODAL */}
      {confirmar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded">

            <h2 className="text-xl font-bold mb-2">
              Confirmar compra
            </h2>

            <p>Total: ${total}</p>

            <div className="flex gap-2 mt-4">

              <button
                onClick={finalizarCompra}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Confirmar
              </button>

              <button
                onClick={() => setConfirmar(false)}
                className="bg-gray-400 px-4 py-2 rounded"
              >
                Cancelar
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Carrito;