import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//hoc
import Theme from './theme';
// Components
import Navigation from '../components/admin/navigation/navigation';
import Header from '../components/admin/header/header';
import EnhancedSnackbar from '../components/dialogs/snackbar';
// Constants
import { DRAWERWIDTH } from '../constants/layout_constants';

const styles = theme => ({  
    root: {
      display: 'flex',
      background: '#eee'
    },
    loadingContainer: {
        flexGrow: 1,
        position: 'absolute', 
        zIndex: theme.zIndex.drawer + 2,
        width: '100%'
    },
    
    toolbar: {
      paddingLeft: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBarSpacer: theme.mixins.toolbar,   
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: DRAWERWIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
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
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    }, 
  });

class AdminLayout extends Component{

    state = {
        open: false,
        snackbarShow: false,
        snackbarVariant: 'error',
        snackbarMessage: ''
    };
        
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.user.permissions){
            this.props.handleLoading(false);
        }
    }
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };    
    
    showMessage = (variant, message) => {
        this.setState({ 
            snackbarShow: true,
            snackbarVariant: variant,
            snackbarMessage: message
        });
    }

    render() { 
        const { classes, ComposedComponent, loading } = this.props;     
        const { snackbarShow, snackbarVariant, snackbarMessage } = this.state; 
        return (
          <React.Fragment>
            <Theme>
                <CssBaseline />
                {
                    loading && 
                    <div className={classes.loadingContainer}>
                        <LinearProgress color="secondary" />
                    </div>
                }
                
                <div className={classes.root}>
                    <Header 
                        open={this.state.open} 
                        handleDrawerOpen={this.handleDrawerOpen} 
                        drawerWidth={DRAWERWIDTH}                       
                    />
                    <Drawer
                        variant="permanent"
                        classes={
                            {
                                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                            }
                        }
                        className="no-print"
                        open={this.state.open}                        
                    >
                        <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronRightIcon />
                        </IconButton>
                        </div>
                        <Divider />
                        <Navigation user={this.props.user} drawerOpen={this.state.open} onclick={this.handleDrawerOpen} />
                    </Drawer>
                    <main className={classNames(classes.content, 'main-layout')}>
                        <div className={classNames(classes.appBarSpacer, 'no-print')} />
                        {
                            !loading && 
                            //send empty classes to prevent "the classes property is not implemented..."
                            <ComposedComponent {...{...this.props, classes: null}} handleMessage={this.showMessage} />
                        } 
                    </main>
                    <EnhancedSnackbar
                        show={snackbarShow}
                        onClose={() => this.setState({snackbarShow: false})}
                        variant={snackbarVariant}
                        message={snackbarMessage}
                    />
                </div>
            </Theme>
          </React.Fragment>
        );
      }
}

AdminLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdminLayout));
