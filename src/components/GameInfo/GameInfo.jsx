import React from 'react';
import { GameInfoContainer, RestartButton, Status } from './styled';

const GameInfo = ({ status, restartGame }) => {
  return (
    <GameInfoContainer>
      <RestartButton onClick={restartGame}>Restart</RestartButton>
      <Status>{status}</Status>
    </GameInfoContainer>
  )
}

export default GameInfo
