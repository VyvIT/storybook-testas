const styles = theme => ({
  grid: {
    gridGap: `${theme.spacing.unit * 2}px`,
  },
  firstPanel: {
    gridArea: 'top-left',
  },
  secondPanel: {
    gridArea: 'top-right',
  },
  thirdPanel: {
    gridColumnStart: 'top-left',
    gridColumnEnd: 'top-right',
    [theme.breakpoints.down('sm')]: {
      gridRowStart: 'bottom-left',
      gridRowEnd: 'bottom-right',
    },
  },
});

export default styles;
