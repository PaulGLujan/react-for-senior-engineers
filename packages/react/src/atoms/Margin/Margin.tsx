import React, { PropsWithChildren } from 'react';
import { Spacing } from '@ds.e/foundation'

interface MarginProps {
  children: React.ReactNode
  space?: keyof typeof Spacing
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
}

const Margin: React.FC<PropsWithChildren<MarginProps>> = ({ children, space = 'xxxs', left, right, top, bottom }) => {
  let className = '';

  if (!left && !right && !top && !bottom) {
    className = `dse-margin-${space}`;
  }

  if (left) {
    className = `${className} dse-margin-left-${space}`;
  }

  if (right) {
    className = `${className} dse-margin-right-${space}`;
  }

  if (bottom) {
    className = `${className} dse-margin-bottom-${space}`;
  }

  if (top) {
    className = `${className} dse-margin-top-${space}`;
  }

  return <div className={className}>
    {children}
  </div>
};

export default Margin;