import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({   
    root: {
        flexGrow: 1,
        justifyItems: 'center',
    },
    progress: {
        margin: theme.spacing.unit * 2,          
    }   
});
const EnhancedCircularProgress = ({classes}) => {    
    return (  
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >    
            <CircularProgress className={classes.progress} color="secondary" /> 
        </Grid> 
    )
}

EnhancedCircularProgress.propTypes = {
    classes: PropTypes.object.isRequired   
}

export default withStyles(styles)(EnhancedCircularProgress);
