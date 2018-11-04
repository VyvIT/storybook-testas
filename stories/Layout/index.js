import React from 'react';
import { compose } from "redux";
import { storiesOf } from '@storybook/react';
import { withStyles } from "@material-ui/core";
// import { text } from '@storybook/addon-knobs/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links'
import Grid from "../../components/layout/Grid/Grid";
import Panel from "../../components/layout/Panel/Panel";
import withParent from "../../.storybook/withParent2";
import styles from "./styles";
import Typography from "@material-ui/core/Typography/Typography";

const Component = ({ classes }) => {
  return (
    <Grid className={classes.grid}
          layout="dashboard_2x2">
      <Panel
        className={classes.firstPanel}
        title="Simple panel title 1"
      >
        <Typography>
          some content 1
        </Typography>
      </Panel>
      <Panel
        className={classes.secondPanel}
        title="Simple panel title 2"
      >
        <Typography>
          some content 2
        </Typography>
      </Panel>
      <Panel
        className={classes.thirdPanel}
        title="Simple panel title 3"
      >
        <Typography>
          some content 3
        </Typography>
      </Panel>
    </Grid>
  );
};

const WithParent = compose(
  withParent,
  withStyles(styles),
)(Component);

storiesOf('Layout', module)
  .add('with css grid', () => (
    <WithParent/>
  ));
