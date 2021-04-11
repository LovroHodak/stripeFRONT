import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";

export default function Cart() {
  const [products, setProducts, addToCart, cart, setCart] = useContext(
    MyContext
  );

  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Cart</h1>
      {cart.length < 1 ? (
        <p>Your Cart is empty</p>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {cart.map((item, i) => {
            return (
              <div key={i}>
                <img
                  src={item.imageUrl}
                  alt="productImg"
                  style={{ width: 100 }}
                />
                <p>Name: {item.name}</p>
                <p>Items: {item.countInStock} x</p>
                <p>Price per item: {item.price} €</p>
              </div>
            );
          })}
        </div>
      )}
      <button>Confirm</button>
    </div>
  );
}

//{(apple !== 0 ? (<p>Apple is not zero</p>) : (<p>Apple is zero {apple}</p>))}
