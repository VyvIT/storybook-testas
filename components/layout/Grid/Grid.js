import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';


const Grid = ({ classes, layout, className, children }) => {
  return (
    <div className={classNames(classes.root, classes[`layout_${layout}`], className)}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
  layout: PropTypes.oneOf(['dashboard_2x2', 'dashboard_3x3']),
};

export default withStyles(styles)(Grid);
