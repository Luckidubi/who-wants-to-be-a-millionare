import React from "react";
import "./Question.css";
import { questionAndAnswers } from "../..";

function Question({ question, options, onSelect, questionIndex }) {
  return (
    <>
    <h1 style={{fontSize:"5vw"}}>Who Wants To Be A Millionare!!!</h1>
      <div className="questions-and-answers__item questions-and-answers__item--collapsed">
        <h2>Question {questionIndex + 1} of {questionAndAnswers.length - 1}</h2>
        <div className="questions-and-answers__header">
          <div className="questions-and-answers__title">
            <p>{question}</p>
          </div>
        </div>

        <div className="questions-and-answers__content">
          {options.map((option, index) => (
            <>
              {index + 1} {". "}{" "}
              <label key={index + "sdfs4"}>
                <input
                  type="radio"
                  name={question}

                  onClick={() => onSelect(index)}
                />
                {option}

              </label>
              <br />
              <br />

            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Question;
