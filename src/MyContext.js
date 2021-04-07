import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("i am beeing called");

    axios
      .get("http://localhost:5000/api/products", { withCredentials: true })
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });
  }, []);

  const addToCart = (id) => {
    console.log("connected", id);

    const newProducts = products.map((product) => {
      if (product._id === id) {
        const updateProduct = {
          ...product,
          countInStock: product.countInStock - 1,
        };
        return updateProduct;
      }
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <MyContext.Provider value={[products, setProducts, addToCart]}>
      {props.children}
    </MyContext.Provider>
  );
};
