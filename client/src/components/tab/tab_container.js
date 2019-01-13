import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({      
    content:{
        padding: theme.spacing.unit * 4,        
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing.unit * 1,                   
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing.unit * 1,
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing.unit * 4,
        },
        
	},
});

const TabC = ({ classes, children, tabValue, index }) => {
    return tabValue === index ? 
			<div className={classes.content}>										
				{children}
			</div>
			: null
}

TabC.propTypes = {
    classes: PropTypes.object.isRequired
};

export const TabContainer =  withStyles(styles)(TabC);
