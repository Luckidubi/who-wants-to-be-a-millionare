import { useState } from "react";
import { questionAndAnswers } from ".";
import "./App.css";
import Question from "./components/Question/Question";

function App() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [fiftyFifty, setFiftyFifty] = useState(false);
  const [showFiftyFifty, setShowFiftyFifty] = useState(true);

  const totalScore = (score / questionAndAnswers.length) * 100;

  const restart = () => {
    setScore(0);
    setQuestionIndex(0);
    setCompleted(false);
    setGameOver(false);
    setShowFiftyFifty(true);
  };
  const handleSelect = (e) => {
    if (
      e ===
      questionAndAnswers[questionIndex].o[questionAndAnswers[questionIndex].a]
    ) {
      setScore((s) => s + 1);
    }
    if (
      e !=
      questionAndAnswers[questionIndex].o[questionAndAnswers[questionIndex].a]
    ) {
      
      setGameOver(true);
    }
    if (questionIndex === questionAndAnswers.length - 1) {
      setCompleted(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
    setFiftyFifty(false);
  };

  if (gameOver) {
    return (
      <p>
        You have chosen a wrong answer, Game over!!! Your score is{" "}
        {Math.floor(totalScore)}%<br /> <br />
        <button onClick={restart}>Restart</button>
      </p>
    );
  }

  const display5050 = () => {
    setFiftyFifty(true);
    setShowFiftyFifty(false);
  };

  if (completed) {
    return (
      <p>
        Your score is: {Math.floor(totalScore)}% <br /> Congratulation You won.
        You're now a Millionaire
        <br /> <br />
        <button onClick={restart}>Restart</button>
      </p>
    );
  }

  if (fiftyFifty) {
    let options = questionAndAnswers[questionIndex].o;
    let correctAns =
      questionAndAnswers[questionIndex].o[questionAndAnswers[questionIndex].a];
    let incorrectAns = options.filter((option) => option != correctAns);
    let random = Math.floor(Math.random() * incorrectAns.length);

    const randomOptions = [
      questionAndAnswers[questionIndex].o[questionAndAnswers[questionIndex].a],
      incorrectAns[random],
    ];
    return (
      <>
        <h2>Choose your final answer</h2>
        <p>Two wrong options have been removed for you</p>
        <Question
          question={questionAndAnswers[questionIndex].q}
          options={randomOptions}
          onSelect={handleSelect}
        />
      </>
    );
  }

  return (
    <>
      <h1 style={{ fontSize: "5vw" }}>Who Wants To Be A Millionare!!!</h1>

      <div className="fifty">
        <button disabled={!showFiftyFifty} onClick={display5050}>
          50-50
        </button>
      </div>
      <h2>
        Question {questionIndex + 1} of {questionAndAnswers.length}
      </h2>
      <Question
        question={questionAndAnswers[questionIndex].q}
        options={questionAndAnswers[questionIndex].o}
        onSelect={handleSelect}
      />
    </>
  );
}

export default App;
