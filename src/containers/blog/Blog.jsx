import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog__container">
      <div className="blog__heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog__articles__container"></div>
    </div>
  );
};

export default Blog;
