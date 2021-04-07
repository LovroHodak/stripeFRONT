// CSS
import "./App.css";
// REACT
import React from "react";
import { withRouter } from "react-router-dom";

// COMPONENTS
import Home from "./components/Home";
// CONTEXT
import { MyProvider } from "./MyContext";
import Cart from "./components/Cart";
import UserData from "./components/UserData";

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Home />
        <Cart />
        <UserData />
      </div>
    </MyProvider>
  );
}

export default withRouter(App);
