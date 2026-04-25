import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand mb-0 h1">Course Portal</span>
        <Link to="/'" className="btn btn-outline-light">Home</Link>
      </nav>
    );
  }
}

export default Navbar;