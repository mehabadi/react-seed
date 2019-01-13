import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';

const styles = theme => ({        
	tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
	},
	tabsIndicator: {
		backgroundColor: '#1890ff',
	}	
});


const ETabs = ({classes, activeTab, onChange, children}) => {
    return (        
        <Tabs
            value={activeTab}
            onChange={onChange}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            scrollable
            scrollButtons="on"
            className="tab-container"
        >
            {children}				
        </Tabs>	        
    )
}

ETabs.propTypes = {
    classes: PropTypes.object.isRequired
};

export const EnhancedTabs =  withStyles(styles)(ETabs);
