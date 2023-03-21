import React from "react";
import "./feature.css";

const Feature = ({ title, text, className }) => {
  return (
    <div className={`feature__container ${className}`}>
      <div className="feature__title-container">
        <div className="feature__title-bar"></div>
        <h2 className="feature__title-title">{title}</h2>
      </div>
      <div className="feature__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
