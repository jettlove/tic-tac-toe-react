import React from 'react';
import { Button } from './styled';

const Square = ({ onClick, value }) => {
  return (
    <Button onClick={onClick}>
      {value}
    </Button>
  );
}

export default Square;
