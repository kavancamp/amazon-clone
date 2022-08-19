import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
