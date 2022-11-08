import React from 'react';
import ReactDOM from 'react-dom';

import { Margin, Text } from '@ds.e/react';

import '@ds.e/scss/lib/global.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Utilities.css';

ReactDOM.render(
  <div>
    <Margin left right space='md'>
      <Text size='xs'>This is some text</Text>
    </Margin>
  </div>,
  document.querySelector('#root')
);
