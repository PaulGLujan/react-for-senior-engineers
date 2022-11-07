import React from 'react';

interface ColorProps {
  height: string
  hexCode: string
  width: string
}

const Color: React.FC<ColorProps> = ({ height, hexCode, width }) => {
  return <div style={{
    backgroundColor: hexCode,
    height,
    width,
  }}>
  </div >
};

export default Color;
