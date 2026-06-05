import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CarritoProvider } from "./context/CarritoContext";

import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";

import Navbar from "./components/Navbar";

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;