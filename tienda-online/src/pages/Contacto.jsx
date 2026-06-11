import { useState } from "react";
import mascota from "../assets/logoEsquina.svg";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      alert("Completa todos los campos");
      return;
    }

    setEnviado(true);

    setForm({
      nombre: "",
      email: "",
      mensaje: ""
    });

    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">

      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-pink-500">
          💌 Contactanos 💌
        </h1>

        <div className="bg-pink-100 rounded-3xl p-6 mb-8 shadow-lg">

          <div className="text-6xl mb-2">
            🐱🎀💖
          </div>

          <h2 className="text-2xl font-bold text-pink-500">
            ¡Nos encanta escucharte!
          </h2>

          <p className="text-pink-700 mt-2">
            Si tenés dudas sobre productos, envíos o compras,
            escribinos y te responderemos lo antes posible.
          </p>

        </div>          
        <p className="text-pink-700 mt-3">
          Estamos para ayudarte con cualquier consulta 🎀
        </p>
      </div>

      {enviado && (
        <div className="bg-pink-100 border-2 border-pink-300 rounded-3xl p-6 mb-8 text-center shadow-lg">

          <div className="text-6xl mb-3">
            🐱💕
          </div>

          <h2 className="text-2xl font-bold text-pink-500">
            ¡Mensaje enviado!
          </h2>

          <p className="text-pink-700">
            Te responderemos lo antes posible.
          </p>

        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-pink-50 p-6 rounded-3xl shadow">

          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            ✨ Información
          </h2>

          <p className="mb-3">
            📧 contacto@pinkienovagaming.com
          </p>

          <p className="mb-3">
            📱 +54 11 1234-5678
          </p>

          <p className="mb-3">
            📍 Buenos Aires, Argentina
          </p>

          <p className="mb-3">
            🕒 Lunes a Viernes de 9:00 a 18:00
          </p>

          <div className="mt-6">
            <h3 className="font-bold mb-3 text-pink-500">
              🌸 Seguinos
            </h3>

            <div className="space-y-3">

              <div className="bg-pink-100 hover:bg-pink-200 transition p-3 rounded-2xl shadow-sm">
                📷 Instagram · <span className="font-bold">@pinkienovagaming</span>
              </div>

              <div className="bg-pink-100 hover:bg-pink-200 transition p-3 rounded-2xl shadow-sm">
                🎮 Twitch · <span className="font-bold">@__pinkiegaming</span>
              </div>

            </div>
          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-3xl shadow"
        >

          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            📝 Enviar consulta
          </h2>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-3"
          />

          <textarea
            name="mensaje"
            placeholder="Escribí tu mensaje..."
            value={form.mensaje}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border rounded-xl mb-4"
          />

          <button
            type="submit"
            className="
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
            💌 Enviar mensaje
          </button>

        </form>
        <img
          src={mascota}
          alt="Mascota"
          className="
            fixed
            bottom-4
            right-4
            w-24
            md:w-32
            select-none
            pointer-events-none
          "
        />


      </div>

    </div>
  );
}

export default Contacto;