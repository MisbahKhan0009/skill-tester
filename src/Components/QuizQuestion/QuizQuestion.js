import React from "react";
import "./QuizQuestion.css";
import Options from "../Options/Options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const QuizQuestion = ({ question }) => {
  // console.log(question);
  const sanitizedHTML = question.question.replace(/<\/?p>/g, "");
  const options = question.options;
  const correctAnswer = question.correctAnswer;
  
  return (
    <section className="question-container">
      <div className="question-text">
        <div
          className="single-question"
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        ></div>
        <FontAwesomeIcon icon={faEye} />
      </div>
      {options.map((option) => (
        <Options
          key={option.id}
          option={option}
          correctAnswer={correctAnswer}
        ></Options>
      ))}
    </section>
  );
};

export default QuizQuestion;
