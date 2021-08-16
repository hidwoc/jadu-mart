import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 id="welcome-to">Welcome to</h2>
      <div id="hero">
        <h1 id="jadu-mart">Jadu Mart</h1>
        <p id="marketplace-of">Marketplace of Kimchi & Banchan by Heidi</p>
      </div>
      <div id="button-div">
        <Link to="/shop">
          <button>SHOP THE GOODS</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
