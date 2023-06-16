import React from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./index.css";


const App = () => {
  return(
  <div>
   <div className="bg-slate-900">
    <Navbar></Navbar>
   </div>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
   
  </div>
  )
};

export default App;
