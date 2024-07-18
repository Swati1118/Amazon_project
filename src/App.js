import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Checkout from "./Component/Checkout";
import Home from "./Component/Home";
import Address from "./Component/Address";
import Order from "./Component/Order";

import Payment from "./Component/Payment";

function App() {
 
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/address" element={<Address/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/order" element={<Order/>}/>               
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width:100vw;
`;

export default App;
