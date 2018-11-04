import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'grid',
    minHeight: '100vh',
    gridTemplateAreas: `'sidebar header'
                        'sidebar content'`,
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto 1fr',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 0,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...theme.mixins.toolbar,
    backgroundColor: '#ffa500',
  },
  toolbarIconCollapsed: {
    visibility: 'collapse',
    minHeight: 0,
    height: 0,
    opacity: 0,
  },
  appBar: {
    backgroundColor: '#1e2b22',
    zIndex: theme.zIndex.drawer + 1,
    gridArea: 'header',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    gridArea: 'sidebar',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: '#ccc',
    boxShadow: '-1px 0px 10px 0px #0303037d',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paperAnchorDockedLeft: {
    border: 'none',
  },
  drawer: {
    gridArea: 'sidebar',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    overflow: 'auto',
    gridArea: 'content',
  },
});

export default (WrappedComponent) => {
  class Layout extends Component {

    static propTypes = {
      classes: PropTypes.object.isRequired,
    };
    state = {
      open: true,
    };

    handleDrawerOpen = () => {
      this.setState({ open: true });
    };

    handleDrawerClose = () => {
      this.setState({ open: false });
    };

    render() {
      const { classes, ...rest } = this.props;

      return (
        <div className={classes.root}>
          <AppBar position="static"
                  className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open}
                     className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon/>
              </IconButton>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Layout
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4}
                       color="secondary">
                  <NotificationsIcon/>
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
              paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classNames(classes.toolbarIcon, !this.state.open && classes.toolbarIconCollapsed)}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon/>
              </IconButton>
            </div>
            <Divider/>
            <List>{mainListItems}</List>
            <Divider/>
            <List>{secondaryListItems}</List>
          </Drawer>
          <main className={classes.content}>
            <WrappedComponent {...rest} />
          </main>
        </div>
      );
    }
  }

  return withStyles(styles)(Layout);
}