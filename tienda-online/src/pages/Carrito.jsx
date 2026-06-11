import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
  const {
    carrito,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad,
    total,
    vaciarCarrito,
    descontarStock,
    mensajeStock
  } = useContext(CarritoContext);

  const [confirmar, setConfirmar] = useState(false);
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

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

      setMensajeError(
        "Completa todos los campos obligatorios."
      );

      return false;
    }

    if (!form.email.includes("@")) {

      setMensajeError(
        "Ingresá un email válido."
      );

      return false;
    }

    if (carrito.length === 0) {

      setMensajeError(
        "El carrito está vacío."
      );

      return false;
    }

    setMensajeError("");
    return true;
};

  const finalizarCompra = () => {
    if (!validarFormulario()) return;

    setCompraExitosa(true);

    descontarStock();

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

    setTimeout(() => {
      setCompraExitosa(false);
    }, 5000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="text-center mb-8">

        <h1 className="text-5xl font-bold text-pink-500">
          🛒 Mi Carrito
        </h1>

        <p className="text-pink-700 mt-2">
          Revisá tus productos antes de finalizar la compra 💖
        </p>

      </div>


      {compraExitosa && (
        <div className="bg-pink-100 border-2 border-pink-300 rounded-3xl p-6 mb-6 shadow-lg">

          <div className="text-7xl text-center mb-4">
            🎀🐱🎮
          </div>

          <h2 className="text-3xl font-bold text-pink-500 text-center">
            ¡Compra realizada con éxito!
          </h2>

          <p className="text-center text-pink-700 mt-2">
            Gracias por comprar en Pinkie Nova Gaming 💖
          </p>

        </div>
      )}

      <div className="bg-pink-50 p-6 rounded-3xl shadow-lg mb-8">

        <h2 className="text-2xl font-bold text-pink-500 mb-4">
          📝 Datos del comprador
        </h2>

        <input
          name="nombre"
          placeholder="Nombre y apellido"
          value={form.nombre}
          onChange={handleChange}
          className="border p-3 rounded-xl w-full mb-3"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded-xl w-full mb-3"
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          className="border p-3 rounded-xl w-full mb-3"
        />

        <input
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          className="border p-3 rounded-xl w-full mb-3"
        />

        <select
          name="envio"
          value={form.envio}
          onChange={handleChange}
          className="border p-3 rounded-xl w-full mb-3"
        >
          <option value="retiro">
            Retiro en tienda
          </option>

          <option value="envio">
            Envío a domicilio
          </option>
        </select>

        <textarea
          name="mensaje"
          placeholder="Mensaje opcional"
          value={form.mensaje}
          onChange={handleChange}
          rows="4"
          className="border p-3 rounded-xl w-full"
        />

        {mensajeError && (
          <div
            className="
              mt-4
              bg-red-100
              border
              border-red-300
              text-red-700
              p-4
              rounded-2xl
              font-semibold
            "
          >
            {mensajeError}
          </div>
        )}

      </div>

      {carrito.length === 0 ? (

        <div className="text-center py-12">

          <div className="text-8xl mb-4">
            🛒💔
          </div>

          <h2 className="text-3xl font-bold text-pink-500">
            Tu carrito está vacío
          </h2>

          <p className="text-pink-700 mt-3">
            Agregá algunos productos para comenzar tu compra.
          </p>

        </div>

      ) : (

        <>
        {mensajeStock && (
          <div
            className="
              bg-red-100
              border-2
              border-red-300
              rounded-3xl
              p-4
              mb-6
              text-center
              shadow-lg
            "
          >
            <div className="text-3xl mb-2">
              ⚠️
            </div>

            <p className="text-red-600 font-bold">
              {mensajeStock}
            </p>
          </div>
        )}  

          <div className="space-y-4">

            {carrito.map((item) => (

              <div
                key={item.id}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-5
                  flex
                  flex-col
                  md:flex-row
                  gap-4
                  items-center
                "
              >

                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-32 h-32 object-contain"
                />

                <div className="flex-1">

                  <h2 className="text-xl font-bold">
                    {item.nombre}
                  </h2>

                  <p className="text-pink-500 font-bold">
                    ${item.precio}
                  </p>

                  <p>
                    Cantidad: {item.cantidad}
                  </p>

                  <p className="font-semibold">
                    Subtotal: ${item.precio * item.cantidad}
                  </p>

                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() => disminuirCantidad(item.id)}
                    className="
                      bg-pink-200
                      w-10
                      h-10
                      rounded-full
                      hover:scale-110
                      transition
                    "
                  >
                    ➖
                  </button>

                  <button
                    onClick={() => aumentarCantidad(item.id)}
                    className="
                      bg-pink-200
                      w-10
                      h-10
                      rounded-full
                      hover:scale-110
                      transition
                    "
                  >
                    ➕
                  </button>

                  <button
                    onClick={() => eliminarProducto(item.id)}
                    className="
                      bg-red-400
                      text-white
                      px-3
                      rounded-xl
                      hover:scale-105
                      transition
                    "
                  >
                    🗑️
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="bg-pink-100 rounded-3xl p-6 shadow-lg mt-8">

            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              📋 Resumen de compra
            </h2>

            <div className="flex justify-between mb-2">
              <span>Productos:</span>
              <span>{carrito.length}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Envío:</span>
              <span>Gratis 🚚</span>
            </div>

            <div className="flex justify-between text-2xl font-bold text-pink-600">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            <button
              onClick={() => setConfirmar(true)}
              className="
                mt-6
                w-full
                bg-pink-500
                hover:bg-pink-600
                text-white
                py-3
                rounded-full
                font-bold
                transition
              "
            >
              💖 Finalizar compra
            </button>

          </div>
        </>
      )}

      {confirmar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md">

            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              🎀 Confirmar compra
            </h2>

            <p className="mb-4">
              Total a pagar: <strong>${total}</strong>
            </p>

            <div className="flex gap-3">

              <button
                onClick={finalizarCompra}
                className="
                  flex-1
                  bg-pink-500
                  text-white
                  py-2
                  rounded-xl
                "
              >
                Confirmar
              </button>

              <button
                onClick={() => setConfirmar(false)}
                className="
                  flex-1
                  bg-gray-300
                  py-2
                  rounded-xl
                "
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