import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {ArrowBack} from '@material-ui/icons';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
      textAlign: 'right'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

const EnhancedAppBar = (props) => {
    const { classes, title, handleBackButton } = props;
    return (    
        <AppBar position="static">
            <Toolbar>                
                <Typography variant="h3" color="inherit" className={classes.flex}>
                    {title}
                </Typography>  
                <IconButton onClick={handleBackButton} color="inherit"><ArrowBack /></IconButton>              
            </Toolbar>
        </AppBar>
    )
}

EnhancedAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedAppBar);
    