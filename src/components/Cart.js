import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "../MyContext";

import { Modal, Button } from "react-bootstrap";

export default function Cart() {
  const [products, setProducts, addToCart, cart, setCart, deleteFromCart, total, setTotal] = useContext(
    MyContext
  );

  // MODAL LOGIC
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);


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
          <button onClick={handleShow}>Proceed to CheckOut</button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h1>Your Order</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                      <p>Price: {item.price * item.countInStock} €</p>
                    </div>
                  );
                })}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <h2 style={{marginRight: 100}}>Total: {total} €</h2>
              <Button>Submit</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
}

//{(apple !== 0 ? (<p>Apple is not zero</p>) : (<p>Apple is zero {apple}</p>))}
