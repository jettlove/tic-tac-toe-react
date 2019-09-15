import React, { useState } from 'react';
import Square from '../Square';
import { FieldContainer, GameRow } from './styled';

const GameField = () => {
  const [ squares, setSquares ] = useState(Array(9).fill(null));

  const renderSquare = index => {
    return <Square
      value={squares[index]}
      onClick={() => {
        squares[index] = 'X';
        setSquares(prevSquares => ({ ...prevSquares, squares}));
      }}
    />;
  }

  return (
    <FieldContainer>
      <GameRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </GameRow>
      <GameRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </GameRow>
      <GameRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </GameRow>
    </FieldContainer>
  );
}

export default GameField
