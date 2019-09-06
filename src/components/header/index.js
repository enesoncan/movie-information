import React, { Component } from "react";
import "./style.css";

import Logo from "./logo";
import Navigation from "../navigation";

class Header extends Component {
  render() {
    return (
      <header className="container-fluid wrapper">
        <Logo />
        <Navigation />
      </header>
    );
  }
}

export default Header;
