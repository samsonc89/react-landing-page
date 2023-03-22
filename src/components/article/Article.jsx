import React from "react";
import "./article.css";

const Article = ({ image, altText, blogDate, blogTitle, blogLink }) => {
  return (
    <div className="article__container">
      <div className="article__image">
        <img src={image} alt={altText} />
      </div>
      <div className="article__description">
        <div className="article__description-date">{blogDate}</div>
        <div className="article__description-title">{blogTitle}</div>
        <div className="article__description-link">
          <a href={blogLink}>Read Full Article</a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Article;
