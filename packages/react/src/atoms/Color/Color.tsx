import React from 'react';
import { Spacing } from '@ds.e/foundation';

interface ColorProps {
  height?: keyof typeof Spacing
  hexCode: string
  width?: keyof typeof Spacing
}

const Color: React.FC<ColorProps> = ({ height = Spacing.sm, hexCode, width = Spacing.sm }) => {
  const className = `dse-width-${width} dse-height-${height}`;

  return <div
    className={className}
    style={{
      backgroundColor: hexCode,
    }}>
  </div >
};

export default Color;
