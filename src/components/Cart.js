import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "../MyContext";

import { Modal, Button } from "react-bootstrap";

export default function Cart() {
  const [
    products,
    setProducts,
    addToCart,
    cart,
    setCart,
    deleteFromCart,
    total,
    setTotal,
    soldHistory, setSoldHistory,
    initial, setInitial
  ] = useContext(MyContext);

  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateStreet = (e) => {
    setStreet(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const buyIt = (e) => {
    e.preventDefault();

    setSoldHistory((prevClients) => [
      ...prevClients,
      {
        name: name,
        street: street,
        city: city,
        cart: cart.map((item) => {
          return item
        })
      },
    ]);

    setName('')
    setStreet('')
    setCity('')
    
    setCart([])
    setInitial(products)
  }

  console.log(soldHistory)
  console.log(cart)

  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Cart</h1>
      {cart.length < 1 ? (
        <p>Your Cart is empty</p>
      ) : (
        <div>
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
          <h1>Total: {total} €</h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              margin: "auto",
            }}
            onSubmit={buyIt}
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={updateName}
            />
            <input
              type="text"
              name="street"
              placeholder="street"
              value={street}
              onChange={updateStreet}
            />
            <input
              type="text"
              name="city"
              placeholder="city"
              value={city}
              onChange={updateCity}
            />
            <button>Proceed to CheckOut</button>
          </form>
        </div>
      )}
    </div>
  );
}
