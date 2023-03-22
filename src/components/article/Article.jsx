import React from "react";
import "./article.css";

const Article = ({
  image,
  altText = "blog image",
  blogDate = "Sep 26, 2021",
  blogTitle = "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  blogLink,
}) => {
  return (
    <div className="article__container">
      <div className="article__image">
        <img src={image} alt={altText} />
      </div>
      <div className="article__description">
        <div className="article__description-date">
          <p>{blogDate}</p>
        </div>
        <div className="article__description-title">{blogTitle}</div>
        <div className="article__description-link">
          <p>
            <a href={blogLink}>Read Full Article</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
