import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Brand = () => {
  return (
    <div className="brand__container">
      <img src={google} />
      <img src={slack} />
      <img src={atlassian} />
      <img src={dropbox} />
      <img src={shopify} />
    </div>
  );
};

export default Brand;
