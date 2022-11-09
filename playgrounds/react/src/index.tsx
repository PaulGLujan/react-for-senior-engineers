import React from 'react';
import ReactDOM from 'react-dom';

import { Margin, Select, Text } from '@ds.e/react';

import '@ds.e/scss/lib/global.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Utilities.css';

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
  <div>
    <Margin left right space='md'>
      <Text size='xs'>This is some text</Text>
    </Margin>
    <Select label='Select Component ehh' options={options} />
  </div>,
  document.querySelector('#root')
);
