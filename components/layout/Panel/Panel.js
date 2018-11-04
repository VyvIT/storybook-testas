import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import Typography from "@material-ui/core/Typography/Typography";
import classNames from "classnames";

const Panel = (props) => {
  const { classes, className, title, children, footer = '' } = props;

  return (
    <div className={classNames(classes.root, className)}>
      <Typography className={classes.title}
                  variant="h5">{title}</Typography>
      <div className={classes.content}>{children}</div>
      <div className={classes.footer}>{footer}</div>
    </div>
  );
};

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);
