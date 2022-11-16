import React from 'react';
import Select from './Select';

import '@ds.e/scss/lib/Select.css';

export default {
  title: 'Select'
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
