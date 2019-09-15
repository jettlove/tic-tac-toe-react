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

  const renderSquare = index => {
    return <Square
      value={squares[index]}
      onClick={() => {
        squares[index] = isX ? 'X' : 'O';
        setSquares(prevSquares => ({ ...prevSquares, squares}));
        setIsX(!isX);
      }}
    />;
  }

  const calculateWinner = squares => {
    for (let i = 0; i < linesToWin.length; i++) {
      const [a, b, c] = linesToWin[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const gameWinner = calculateWinner(squares);
  const status = gameWinner
    ? `Winner: ${gameWinner}`
    : `Next player: ${isX ? 'X' : 'O'}`;

  return (
    <>
      <GameInfo status={status} />
      <GameField renderSquare={renderSquare} />
    </>
  )
}

export default Game
