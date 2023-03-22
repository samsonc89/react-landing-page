import React from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "../../assets";

const Blog = () => {
  return (
    <div className="blog__container section__padding">
      <div className="blog__heading">
        <h1 className="gradient__text">
          A lot is happening, <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="blog__articles__container">
        <Article image={blog01} />
        <Article image={blog02} />
        <Article image={blog03} />
        <Article image={blog04} />
        <Article image={blog05} />
      </div>
    </div>
  );
};

export default Blog;
