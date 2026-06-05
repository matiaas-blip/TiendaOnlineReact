import { useState } from "react";

function FormularioCompra() {

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    entrega: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !datos.nombre ||
      !datos.email ||
      !datos.telefono ||
      !datos.direccion
    ) {
      alert("Complete todos los campos");
      return;
    }

    alert("Compra enviada correctamente");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
    >
      <input
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="telefono"
        placeholder="Teléfono"
        onChange={handleChange}
      />

      <input
        name="direccion"
        placeholder="Dirección"
        onChange={handleChange}
      />

      <select
        name="entrega"
        onChange={handleChange}
      >
        <option>Retiro en local</option>
        <option>Envío a domicilio</option>
      </select>

      <textarea
        name="mensaje"
        placeholder="Mensaje"
        onChange={handleChange}
      />

      <button type="submit">
        Confirmar compra
      </button>
    </form>
  );
}

export default FormularioCompra;