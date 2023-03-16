import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__content">
        <h1 className="header__content-heading gradient__text">
          Let's Build Something amazing with GPT-3 Open AI
        </h1>
        <p className="header__content-description">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form>
          <input type="text" name="name" placeholder="Your Email Address" />

          <button type="button"> Get Started</button>
        </form>
        <div className="header__content__signup-stat">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__illustration">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
