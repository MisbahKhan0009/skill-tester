import React from "react";
import "./Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="topic-container">
      <h1 className="blog-heading">
        Enhance your knowledge <br /> by reading our blogs.
      </h1>
      <div className="scroll-down">
        <h2>Scroll Down</h2>
        <FontAwesomeIcon
          className="down-arrow"
          icon={faArrowDown}
        ></FontAwesomeIcon>
      </div>
      <div className="blog-card-list">
        <div className="blog-card">
          <img src="[thumb]purpose of react router.png" alt="" />
          <h1>What is the purpose of React Router</h1>
          <button className="btn-quiz">
            <Link to="/blog1">Read More</Link>
          </button>
        </div>
        <div className="blog-card">
          <img src="[thumb]Context API working.png" alt="" />
          <h1>Complete working of Context API</h1>
          <button className="btn-quiz">
            <Link to="/blog2">Read More</Link>
          </button>
        </div>
        <div className="blog-card">
          <img src="[thumb]useref alt.png" alt="" />
          <h1>useRef React hook At a Glance</h1>
          <button className="btn-quiz">
            <Link to="/blog3">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
