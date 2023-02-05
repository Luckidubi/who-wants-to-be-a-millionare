import { useState } from "react";
import { questionAndAnswers } from ".";
import "./App.css";
import Question from "./components/Question/Question";

function App() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const totalScore = (score / questionAndAnswers.length) * 100;

  const restart = () => {
    setScore(0);
    setQuestionIndex(0);
    setCompleted(false);
    setGameOver(false);
  };
  const handleSelect = (e) => {
    if (e === questionAndAnswers[questionIndex].a) {
      setScore((s) => s + 1);
    }
    if (e != questionAndAnswers[questionIndex].a) {
      setGameOver(true);
    }
    if (questionIndex === questionAndAnswers.length - 1) {
      setCompleted(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
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

  return (
    <>
      <Question
        questionIndex={questionIndex}
        question={questionAndAnswers[questionIndex].q}
        options={questionAndAnswers[questionIndex].o}
        onSelect={handleSelect}
      />
    </>
  );
}

export default App;
