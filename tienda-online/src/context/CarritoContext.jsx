import { createContext, useEffect, useState } from "react";
import productosIniciales from "../data/productos";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {

  const [carrito, setCarrito] = useState(() => {
  return JSON.parse(localStorage.getItem("carrito")) || [];
  });

  const [productos, setProductos] = useState(() => {
    return JSON.parse(localStorage.getItem("productos")) || productosIniciales;
  });

  const [mensajeStock, setMensajeStock] = useState("");

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem(
      "productos",
      JSON.stringify(productos)
    );
  }, [productos]);

  const mostrarMensajeStock = (texto) => {
    setMensajeStock(texto);

    setTimeout(() => {
      setMensajeStock("");
    }, 3000);
  };

  const agregarProducto = (producto) => {

    const existe = carrito.find(
      item => item.id === producto.id
    );

    if (existe) {

      if (existe.cantidad >= producto.stock) {

        mostrarMensajeStock(
          `⚠️ Solo hay ${producto.stock} unidades disponibles de ${producto.nombre}`
        );

        return;
      }

      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1
              }
            : item
        )
      );

    } else {

      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1
        }
      ]);

    }
  };

  const eliminarProducto = (id) => {
    setCarrito(
      carrito.filter(item => item.id !== id)
    );
  };

  const aumentarCantidad = (id) => {

    setCarrito(
      carrito.map(item => {

        if (item.id === id) {

          if (item.cantidad >= item.stock) {

            mostrarMensajeStock(
              `⚠️ Solo hay ${item.stock} unidades disponibles de ${item.nombre}`
            );

            return item;
          }

          return {
            ...item,
            cantidad: item.cantidad + 1
          };
        }

        return item;
      })
    );
  };

  const disminuirCantidad = (id) => {

    setCarrito(
      carrito
        .map(item =>
          item.id === id
            ? {
                ...item,
                cantidad: item.cantidad - 1
              }
            : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const descontarStock = () => {
    setProductos(productosActuales =>
      productosActuales.map(producto => {

        const item = carrito.find(
          p => p.id === producto.id
        );

        if (!item) return producto;

        return {
          ...producto,
          stock: producto.stock - item.cantidad
        };
      })
    );
  };

  const total = carrito.reduce(
    (acc, item) =>
      acc + item.precio * item.cantidad,
    0
  );

  const cantidadTotal = carrito.reduce(
    (acc, item) =>
      acc + item.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
      productos,
      descontarStock,
      carrito,
      agregarProducto,
      eliminarProducto,
      aumentarCantidad,
      disminuirCantidad,
      vaciarCarrito,
      total,
      cantidadTotal,
      mensajeStock
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}