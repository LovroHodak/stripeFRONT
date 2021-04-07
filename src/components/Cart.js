import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";

export default function Cart() {

  const [products, setProducts] = useContext(MyContext);


  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Cart</h1>
      

      <button>Order</button>
    </div>
  );
}
