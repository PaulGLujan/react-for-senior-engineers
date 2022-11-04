import React, { FunctionComponent } from 'react';

interface ButtonProps {
  label: string
}

const Button: FunctionComponent<ButtonProps> = ({ label }) => {
  return <button className='des-button-container'>{label}</button>
};

export default Button;