import React from "react";
import Topic from "../Topic/Topic";
import "./Topics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Topics = ({ data }) => {
  

  return (
    <div className="topic-container">
      <div className="page-heading">
        <h1>ARE YOU READY?</h1>
        <p>
          Test your web development skill with us. <br /> Here you will get
          interview questions from various compaines. <br /> So, why wait! Let's
          test your skillsets.
        </p>
        <h2>Scroll Down</h2>
        <FontAwesomeIcon className="down-arrow" icon={faArrowDown}></FontAwesomeIcon>
      </div>
      <div className="card-list">
        {data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
