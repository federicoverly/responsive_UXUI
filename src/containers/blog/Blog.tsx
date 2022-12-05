import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
            image={blog1}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
            image={blog2}
          />
          <Article
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
            image={blog3}
          />
          <Article
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
            image={blog4}
          />
          <Article
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
            image={blog5}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
