function Nosotros() {
  return (
    <div className="max-w-5xl mx-auto p-8">

      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-pink-500 mb-4">
          🎀 Sobre Pinkie Nova Gaming 🎀
        </h1>

        <p className="text-lg text-pink-700">
          Una tienda gamer con estilo cute y mucha personalidad 💕
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

        <h2 className="text-2xl font-bold text-pink-500 mb-4">
          ✨ Nuestra historia
        </h2>

        <p>
          Pinkie Nova Gaming nació con la idea de ofrecer periféricos gamer
          de calidad en un espacio amigable, colorido y diferente.
          Queremos que cada jugador encuentre productos que reflejen
          su estilo mientras disfruta de una excelente experiencia.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-pink-100 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">🎮 Misión</h3>
          <p>
            Brindar productos gamer accesibles y de calidad.
          </p>
        </div>

        <div className="bg-pink-100 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">🌸 Visión</h3>
          <p>
            Crear una comunidad gamer inclusiva y divertida.
          </p>
        </div>

        <div className="bg-pink-100 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">💖 Valores</h3>
          <p>
            Creatividad, respeto, innovación y pasión por los videojuegos.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Nosotros;