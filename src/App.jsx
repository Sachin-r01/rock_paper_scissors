import React, { useState } from "react";
import "./App.css";

const App = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a Tie! 🤝");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win! 🎉");
    } else {
      setResult("You Lose! 😢");
    }
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>✊✋✌️ Rock Paper Scissors</h1>

      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)} className="choice-btn">
            {choice}
          </button>
        ))}
      </div>

      <div className="results">
        {userChoice && <p>You chose: <strong>{userChoice}</strong></p>}
        {computerChoice && <p>Computer chose: <strong>{computerChoice}</strong></p>}
        {result && <h2>{result}</h2>}
      </div>

      {(userChoice || computerChoice) && (
        <button className="reset-btn" onClick={resetGame}>
          Play Again 🔄
        </button>
      )}
    </div>
  );
};

export default App;
