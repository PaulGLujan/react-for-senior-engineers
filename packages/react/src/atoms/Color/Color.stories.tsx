import React from 'react';
import Color from './Color';
import { select, text } from '@storybook/addon-knobs';
import Spacing from '@pterodactylpaultest/foundation/lib/Spacing';

/* CSS */
import '@pterodactylpaultest/scss/lib/Utilities.css';

export default {
  title: 'Atoms|Color'
}

export const Common = () => <Color hexCode={text('Hexcode', 'pink')} />

export const CustomDimenstions = () => (
  <Color
    height={select('Height', Spacing, 'xl')}
    hexCode={text('Hexcode', 'pink')}
    width={select('Width', Spacing, 'xl')}
  />
)
