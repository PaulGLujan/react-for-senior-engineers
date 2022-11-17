import React from 'react';
import ReactDOM from 'react-dom';

import { Margin, Select, Text } from '@pterodactylpaultest/react';

import '@pterodactylpaultest/scss/lib/global.css';
import '@pterodactylpaultest/scss/lib/Margin.css';
import '@pterodactylpaultest/scss/lib/Select.css';
import '@pterodactylpaultest/scss/lib/Text.css';
import '@pterodactylpaultest/scss/lib/Utilities.css';

const options = [{
  label: 'Strict Black',
  value: 'strict-black'
}, {
  label: 'Heavenly Green',
  value: 'heavenly-green'
}, {
  label: 'Sweet Pink',
  value: 'pink'
}]

ReactDOM.render(
  <div style={{ padding: '40px' }}>
    <Select options={options} />
  </div>,
  document.querySelector('#root')
);
