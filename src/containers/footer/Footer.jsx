import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container section__padding">
      <div className="footer__heading">
        <p className="gradient__text">
          Do you want to step in to the future before others
        </p>
      </div>
      <button>Request Early Access</button>
      <div className="footer__links-container">
        <div className="footer__links-logo__container">
          <div className="footer__links-logo"></div>
          <div className="footer__links-logo-text">
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
        </div>
        <div className="footer__links-links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer__links-company">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer__links-contact">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
