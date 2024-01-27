import React from "react";
import "./Quiz.css";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";
import Success from "../Toast/Success";
import Danger from "../Toast/Danger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const Quiz = () => {
  const quiz = useLoaderData();
  const questions = quiz.data.questions;
  console.log(questions);
  return (
    <div className="quiz">
      {questions.map((question) => (
        <QuizQuestion
          className="question"
          key={question.id}
          question={question}
        ></QuizQuestion>
      ))}

      <Success />
      <Danger />
    </div>
  );
};

export default Quiz;
