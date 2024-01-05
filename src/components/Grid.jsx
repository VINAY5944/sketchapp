
import React, { useState } from 'react';

const Grid = () => {
  const [dicePositions, setDicePositions] = useState(Array.from({ length: 8 }, () => ({ x: 0, y: 0 })));

  const handleGridClick = (index) => {
    const newPositions = dicePositions.map((pos, i) =>
      i === index ? { x: Math.floor(Math.random() * 3), y: Math.floor(Math.random() * 3) } : pos
    );
    setDicePositions(newPositions);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 80px)', gap: '4px' }}>
      {dicePositions.map((pos, index) => (
        <div
          key={index}
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: 'lightblue',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={() => handleGridClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Grid;
