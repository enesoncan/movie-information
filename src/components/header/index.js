import React, { Component } from "react";
import "./style.css";

import Logo from "./logo";

class Header extends Component {
  render() {
    return (
      <header className="container-fluid wrapper">
        <Logo />
      </header>
    );
  }
}

export default Header;
