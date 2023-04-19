import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
import './Cart.scss'

export const Cart = () => {
  const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="cartcontainer">
      {loading ? (
        <div >
          <br />
          <h2>TU COMPRA</h2>
          <ColorRing height={250} width={250} />
          <br />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <div className="cartcontainer">
          <h2>Tu compra</h2>
          <hr />
          {cart.length === 0 
          ? (
            <div className="cartcontainer1">
            <p>El carrito está vacío</p>
            <Link className="btn btn-primary m-1 cartvacio" to={"/"}>Volver</Link>
            </div>
          ) 
          : (
            <>
              {cart.map((item) => (
                <div  key={item.id}>
                  <h4>{item.name}</h4>
                  <img className="cart_img" src={item.img} alt={"imagen taza"} />
                  <div>
                    <small>
                      Cantidad: {item.cantidad} -- Precio x un: ${item.precio}
                    </small>
                  </div>
                  <p>Precio total: ${item.precio * item.cantidad}</p>
                  <button
                    onClick={() => removerItem(item.id)}
                    className="btn btn-primary ver_mas"
                  >
                    Borrar
                  </button>
                  <hr />
                </div>
              ))}
              <h3>TOTAL: ${totalCarrito()}</h3>
              <button
                onClick={vaciarCarrito}
                className="btn btn-primary ver_mas m-3"
              >
                Vaciar carrito
              </button>
              <Link className="btn btn-danger ver_mas " to={"/Checkout"}>Terminar Compra</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
