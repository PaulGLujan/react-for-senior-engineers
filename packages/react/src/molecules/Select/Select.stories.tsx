import React from 'react';
import Select from './Select';

import '@pterodactylpaultest/scss/lib/Select.css';
import '@pterodactylpaultest/scss/lib/Text.css'

interface RenderOptionProps {
  getOptionRecommendedProps: (overrideProps?: Object) => Object
  isSelected: boolean
  option: SelectOption
}

interface SelectOption {
  label: string
  value: string
}

export default {
  title: 'Molecules|Select'
}

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];


export const Common = () => <Select options={options} />

export const RenderOption = () => {
  const renderOption = ({ getOptionRecommendedProps, isSelected, option }: RenderOptionProps) => {
    return <p {...getOptionRecommendedProps()}>LABEL-{option.label} {isSelected ? 'SELECTED!' : ''}</p>
  };

  return <Select options={options} renderOption={renderOption} />
};

export const CustomLabel = () => {
  return <Select label='Choose a color' options={options} />
};