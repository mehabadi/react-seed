import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({              
    tableContainer: {
      height: 320,
    },
  });

class DashboardContainer extends Component {
    render() {
        const { classes } = this.props;  
        return (
            <div className={classes.tableContainer}>
                Dashboard
            </div>
        )
    }
}

DashboardContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(DashboardContainer);
