import React from 'react';
import { FieldContainer, GameRow } from './styled';

const GameField = ({ renderSquare }) => {
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

export default GameField;
