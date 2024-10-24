import { useState } from "react";

const messages = [
  "learn React *",
  "Apply for jobs *",
  "Invest your new income *",
];

function App() {
  const [step, setstep] = useState(1);

  // function that handles the previous selection button
  function handlePrevious() {
    if (step > 1) {
      setstep((value) => value - 1);
    }
  }

  // function that handles the previous selection button
  function handleNext() {
    if (step < 3) {
      setstep((value) => value + 1);
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step} : {messages[step - 1]}{" "}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
