import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility__container section__padding">
      <div className="possibility__image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="possibility__text__container">
        <p className="possibility__text-early-access-1">
          Request Early Access to Get Started
        </p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="possibility__text-description">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="possibility__text-early-access-2">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possibility;
