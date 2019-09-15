import styled from 'styled-components';

export const GameInfoContainer = styled.div`

`;

export const RestartButton = styled.button`
  border: transparent;
  background: royalblue;
  color: white;
  padding: 8px 12px;
  font-size: 16px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;

export const Status = styled.h3`
  color: palevioletred;
  font-size: 22px;
  margin: 0;
`;