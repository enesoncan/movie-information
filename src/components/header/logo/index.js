import React, { Component } from "react";
import "./style.css";

import logo from "../../../images/video.png";

class Logo extends Component {
  render() {
    return (
      <div className="logo col-md-4">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}
export default Logo;
