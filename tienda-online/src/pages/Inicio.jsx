import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-pink-100 rounded-3xl p-10 mx-6 mt-6">

        <div className="text-center">

          <h1 className="text-6xl font-bold text-pink-500 mb-4">
            🎀 Pinkie Nova Gaming 🎀
          </h1>

          <p className="text-xl text-pink-700 mb-6">
            Periféricos gamer con una estética única, cute y moderna 💕
          </p>

          <img
            src="/img/banner.jpg"
            alt="Pinkie Nova Gaming"
            className="mx-auto rounded-3xl shadow-lg mb-6 max-h-[450px] object-cover"
          />

          <Link
            to="/productos"
            className="
              bg-pink-500
              hover:bg-pink-600
              text-white
              px-8
              py-4
              rounded-full
              text-lg
              font-bold
              transition
            "
          >
            🛍️ Explorar Catálogo
          </Link>

        </div>

      </section>

      {/* BENEFICIOS */}
      <section className="grid md:grid-cols-3 gap-6 p-6">

        <div className="bg-white p-6 rounded-3xl shadow">
          <h2 className="text-2xl mb-2">🚚 Envíos</h2>
          <p>
            Realizamos envíos a todo el país.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <h2 className="text-2xl mb-2">🎮 Calidad Gamer</h2>
          <p>
            Productos seleccionados para jugadores exigentes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <h2 className="text-2xl mb-2">💖 Diseño Cute</h2>
          <p>
            Una tienda pensada para quienes aman la estética kawaii.
          </p>
        </div>

      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="p-6">

        <h2 className="text-4xl font-bold text-center text-pink-500 mb-8">
          ✨ Productos Destacados ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl shadow p-4">
            <img
              src="/img/tecladoRosa.jpg"
              className="h-52 w-full object-contain"
            />
            <h3 className="font-bold mt-3">
              Teclado Heart Pink Edition
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow p-4">
            <img
              src="/img/mouseRosa.jpg"
              className="h-52 w-full object-contain"
            />
            <h3 className="font-bold mt-3">
              Mouse Gamer Nova
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow p-4">
            <img
              src="/img/aurisKitty.jpg"
              className="h-52 w-full object-contain"
            />
            <h3 className="font-bold mt-3">
              Auriculares Kitty Pro
            </h3>
          </div>

        </div>

      </section>

      {/* ESTADÍSTICAS */}
      <section className="bg-pink-200 p-8 mt-6">

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Clientes felices</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">1200+</h3>
            <p>Productos vendidos</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">⭐ 4.9</h3>
            <p>Calificación promedio</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p>Atención al cliente</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Inicio;