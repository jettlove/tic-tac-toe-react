import React, { useState } from 'react';
import GameInfo from '../GameInfo';
import GameField from '../GameField/GameField';
import Square from '../Square';

const linesToWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ isX, setIsX ] = useState(true);

  const restartGame = () => setSquares(Array(9).fill(null));

  const handleSquare = index => {
    if (squares[index] !== null || gameWinner !== null) {
      return;
    }
    squares[index] = isX ? 'X' : 'O';
    setSquares(prevSquares => ({ ...prevSquares, squares}));
    setIsX(!isX);
  };

  const renderSquare = index => {
    return <Square
      value={squares[index]}
      onClick={() => handleSquare(index)}
    />;
  };

  const calculateWinner = squares => {
    for (let i = 0; i < linesToWin.length; i++) {
      const [a, b, c] = linesToWin[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const calculateDraw = squares => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] !== null) {
        return true;
      }
      return false;
    }
  };

  const gameWinner = calculateWinner(squares);
  const gameDraw = calculateDraw(squares);

  const status = () => {
    if (gameWinner) {
      return `The winner is: ${gameWinner}`;
    } else if (gameDraw) {
      return "It's draw!";
    } else {
      return `Next player: ${(isX ? "X" : "O")}`;
    }
  };

  const gameStatus = status();

  return (
    <>
      <GameInfo status={gameStatus} restartGame={restartGame} />
      <GameField renderSquare={renderSquare} />
    </>
  )
}

export default Game
