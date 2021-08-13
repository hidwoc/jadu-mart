import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 id="welcome-to">Welcome to</h2>
      <h1 id="jadu-mart">Jadu Mart</h1>
      <p id="marketplace-of">Marketplace of Kimchi & Banchan by Heidi</p>
      <Link to="/shop">
        <button>SHOP THE GOODS</button>
      </Link>
    </div>
  );
};

export default Welcome;
