import React from "react";
import "./Content.css";
import Home from "../../views/examples/home";
import About from "../../views/examples/about";

import { Routes, Route } from "react-router-dom";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
    </Routes>
  </main>
);

export default Content;
