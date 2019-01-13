import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Constants
import { DRAWERWIDTH } from '../../../constants/layout_constants';
import { URLS } from '../../../constants/routes';

const styles = theme => ({    
    toolbar: {
      paddingLeft: 24, // keep right padding when drawer closed
    },   
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: '#2c2c2c'
    },
    appBarShift: {
      marginRight: DRAWERWIDTH,
      width: `calc(100% - ${DRAWERWIDTH}px)`,
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
    }
});

class Header extends Component {

    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    
    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        
        return (
            <AppBar
                position="absolute"                
                className={classNames(classes.appBar, this.props.open && classes.appBarShift, "no-print")}
            >
                <Toolbar disableGutters={!this.props.open} className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.props.handleDrawerOpen}
                    className={classNames(
                    classes.menuButton,
                    this.props.open && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                    پنل مدیریت
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>

                {auth && (
                <div>
                    <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>پروفایل</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <Divider />
                        <MenuItem onClick={this.handleClose}><Link to={URLS['logout']} >خروج</Link></MenuItem>
                    </Menu>
                </div>
                )}
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);
