import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <header id="header">
        <nav class="links" style={{ "--items": "5" }}>
          <Link to="/">Typing Frenzy</Link>
          <Link to="/type"> Word Master</Link>
          <Link to="/onemin">Timer Game: 1 min</Link>
          <Link to="/twomin">Timer Game: 2 min</Link>
          <Link to="/aboutme">About Me</Link>
          <span class="line"></span>
        </nav>
      </header>
    </div>
  );
}
