import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from "../components/theme";

addDecorator(withKnobs);
addDecorator(muiTheme([theme]))

// loads all stories with webpacks require context
const req = require.context('../stories', true, /.jsx?$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
