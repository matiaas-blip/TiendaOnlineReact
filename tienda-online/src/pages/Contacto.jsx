import { useState } from "react"

function Contacto() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: ""
  })

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Formulario enviado")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 flex flex-col gap-4"
    >

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        className="border p-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-3"
      />

      <button className="bg-violet-600 text-white p-3 rounded">
        Enviar
      </button>

    </form>
  )
}

export default Contacto