import React, { Component } from "react";
import "./style.css";

import Logo from "./logo";
import Navigation from "../navigation";

class Header extends Component {
  render() {
    return (
      <header className="container-fluid wrapper">
        <div className="row">
          <Logo />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
