import React from "react";
import "./PoeticTerm.css";

const PoeticTerm = () => {
  return (
    <div className="poetic-term">
      <h2>Featured Poetic Term</h2>
      <div className="term-content">
        <h3>Artist’s book</h3>
        <p>
          A book made as an art piece of its own, integrating form with content
          such as text, images, and materials.
        </p>
        <button className="glossary-button">Explore Glossary of Poetic Terms</button>
      </div>
    </div>
  );
};

export default PoeticTerm;
