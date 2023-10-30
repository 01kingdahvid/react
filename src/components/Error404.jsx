import React, { useState } from "react";


function Error404() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleButtonClick = () => {
    if (!gameOver) {
      const randomValue = Math.floor(Math.random() * 10);
      if (randomValue === 4) {
        setGameOver(true);
      } else {
        setScore(score + 1);
      }
    }
  };

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Error 404</h1>
        <p>Your Score: {score}</p>
        {gameOver ? (
          <div>
            <p>404 Error! Game Over!</p>
            <button onClick={restartGame}>Restart</button>
          </div>
        ) : (
          <button onClick={handleButtonClick}>Click Me!</button>
        )}
      </header>
    </div>
  );
}

export default Error404;
