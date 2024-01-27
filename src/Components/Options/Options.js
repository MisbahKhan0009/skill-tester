import React from "react";

const Options = ({ option, correctAnswer }) => {
  const answer = correctAnswer;
  return (
    <div>
      <input type="radio" name="" id="options" />
      <label htmlFor="options">{option}</label>
    </div>
  );
};

export default Options;
