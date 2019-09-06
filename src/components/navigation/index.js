import React, { Component } from "react";
import "./style.css";

import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul className="navigate">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/fav-list">
            Favorite List
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
