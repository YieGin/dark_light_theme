import React, { useState } from "react";
import Pageone from "./Pages/Pageone";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pageone />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
