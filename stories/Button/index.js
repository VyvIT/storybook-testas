import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'
import Button from '../../components/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={linkTo('Button', 'button 2')}>
      {text('Label', 'Hello Storybook')}
    </Button>
  ))
  .add('button 2', () => (
    <Button
      onClick={action('clicked')}
    >
      {text('Label', 'Button 2dd')}
    </Button>
  ));
