import React from "react";
import "./Question.css";

function Question({ question, options, onSelect }) {
  return (
    <>
      <div className="questions-and-answers__item questions-and-answers__item--collapsed">
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
                  value={option}
                  name={question}
                  onClick={() => onSelect(option)}
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
