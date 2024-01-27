import React from "react";
import "./Topic.css";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { logo, id, name, total } = topic;

  return (
    <div className="card">
      <img src={logo} alt={name} />
      <h1>{name}</h1>
      <p>Total Questions: {total}</p>
      <button className="btn-quiz">
        <Link to={`/quiz/${id}`}>Take Quiz</Link>
      </button>
    </div>
  );
};

export default Topic;
