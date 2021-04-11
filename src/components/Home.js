import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";

export default function Home() {
  const [
    products,
    setProducts,
    addToCart,
    cart,
    setCart,
    deleteFromCart,
  ] = useContext(MyContext);

  return (
    <div style={{ border: "2px solid green" }}>
      <h1>Home</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {products.map((product, i) => {
          return (
            <div key={i}>
              <p>NAME: {product.name}</p>
              <p>Price: {product.price} €</p>
              <p>Stock: {product.countInStock}</p>
              <img
                src={product.imageUrl}
                alt="productImg"
                style={{ width: 100 }}
              />
              <br />
              {product.countInStock > 0 ? (
                <button onClick={() => addToCart(product._id)}>
                  Add to Cart
                </button>
              ) : (
                <></>
              )}
              {cart.map((el, i) => {
                if (el._id === product._id && el.countInStock > 0) {
                  return (
                    <button key={i} onClick={() => deleteFromCart(product._id)}>
                      Delete from Cart
                    </button>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
