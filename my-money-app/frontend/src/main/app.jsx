import "../common/template/dependecies";
import React from "react";

import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";

export default (props) => (
  <div className="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <div className="content-wrapper">
      <h1>Content</h1>
    </div>
    <Footer>

    </Footer>
  </div>
);
