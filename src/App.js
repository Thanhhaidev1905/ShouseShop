import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import Home from "./component/Home";
import NotFound from "./component/NotFound";
import Footer from "./component/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const onHandledClick = (item) => {
    console.log("im in function");
    const newItem = {
      id: cart.length + 1,
      photo: item.photo,
      name: item.name,
      description: item.description,
      price: item.price,
    };
    const newList = [...cart, newItem];
    setCart(newList);
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route
            exact
            path="/cart"
            element={<Cart onHandledClick={onHandledClick} />}
          />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
