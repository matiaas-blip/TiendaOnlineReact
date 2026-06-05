import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarProducto = (producto) => {
    const existe = carrito.find(p => p.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(
      carrito
        .map(item =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const cantidadTotal = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
        vaciarCarrito,
        total,
        cantidadTotal
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}