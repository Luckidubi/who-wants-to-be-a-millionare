import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="questions-and-answers__item questions-and-answers__item--collapsed">
        {/* <!-- Heading --> */}
        <h2>Question Number</h2>
        <div className="questions-and-answers__header">
          {/* <!-- Question --> */}
          <div className="questions-and-answers__title">
            <p>which planet is closest to the sun</p>
          </div>
        </div>

        {/* <!-- Answer --> */}
        <div className="questions-and-answers__content">
          <li>Mercury </li>
          <li>Venus</li>
          <li>Mars</li>
          <li>Jupiter</li>
        </div>

        <h2>Question Number</h2>
        <div className="questions-and-answers__header">
          {/* <!-- Question --> */}
          <div className="questions-and-answers__title">
            <p>which planet is closest to the sun</p>
          </div>
        </div>

        {/* <!-- Answer --> */}
        <div className="questions-and-answers__content">
          <li>Mercury </li>
          <li>Venus</li>
          <li>Mars</li>
          <li>Jupiter</li>
        </div>
      </div>
    </>
  );
}

export default App;
