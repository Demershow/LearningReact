import React from "react";
import "./app.css";

import { BrowserRouter } from "react-router-dom";

import Content from "../components/layout/content";
import Menu from "../components/layout/menu";

const App = (props) => (
  <div className="App">
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  </div>
);

export default App;
