import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [initial, setInitial] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", { withCredentials: true })
      .then((response) => {
        setProducts(response.data);
        setInitial(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });
  }, []);

  const addToCart = (_id) => {
    // update products (state)
    const newProducts = products.map((product) => {
      if (product._id === _id && product.countInStock > 0) {
        const updateProduct = {
          ...product,
          countInStock: product.countInStock - 1,
        };
        return updateProduct;
      }
      return product;
    });
    setProducts(newProducts);

    // update cart (state)
    let cartItems = [];

    initial.forEach((product) => {
      newProducts.forEach((item) => {
        if (
          product._id === item._id &&
          product.countInStock !== item.countInStock
        ) {
          cartItems.push({
            _id: product._id,
            id: product.id,
            description: product.description,
            imageUrl: product.imageUrl,
            name: product.name,
            price: product.price,
            countInStock: product.countInStock - item.countInStock,
          });

        }
      });
    });

    setCart(cartItems);

  };

  

  const deleteFromCart = (_id) => {
    

    const newProducts = products.map((product) => {
      if (product._id === _id) {
        const updateProduct = {
          ...product,
          countInStock: product.countInStock + 1,
        };
        return updateProduct;
      }
      return product;
    });
    setProducts(newProducts);

    let cartItems = [];

    initial.forEach((product) => {
      newProducts.forEach((item) => {
        if (
          product._id === item._id &&
          product.countInStock !== item.countInStock
        ) {
          cartItems.push({
            _id: product._id,
            id: product.id,
            description: product.description,
            imageUrl: product.imageUrl,
            name: product.name,
            price: product.price,
            countInStock: product.countInStock - item.countInStock,
          });
        }
      });
    });

    setCart(cartItems);
  };


  

  return (
    <MyContext.Provider
      value={[products, setProducts, addToCart, cart, setCart, deleteFromCart]}
    >
      {props.children}
    </MyContext.Provider>
  );
};
