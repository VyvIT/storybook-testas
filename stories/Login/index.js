import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'
import Login from '../../components/Login';
import { muiTheme } from 'storybook-addon-material-ui';
import withMuiRoot from "../../.storybook/withMuiRoot";
import withParent from "../../.storybook/withParent2";

const WithMuiRoot = withMuiRoot(Login);
const WithParent = withMuiRoot(withParent(Login));

storiesOf('Login', module)
  .addDecorator(muiTheme())
  .add('plain', () => (
    <Login/>
  ))
  .add('with MUI Root wrapper', () => (
    <WithMuiRoot/>
  ))
  .add('with MUI Root wrapper and Layout', () => (
    <WithParent/>
  ))
