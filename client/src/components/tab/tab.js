import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({         
	tabRoot: {
		textTransform: 'initial',
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing.unit * 4,
		'&:hover': {
			color: '#40a9ff',
			opacity: 1,
		},
		'&$tabSelected': {
			color: '#1890ff',
			fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {
			color: '#40a9ff',
		},
	},
	tabSelected: {},
});

const ETab = (props) => {
	const {classes, label, show = true, onChange, indicator, selected, value } = props;	
    return (
		!show ? null :
        <Tab
            disableRipple
			classes={{ 
				root: classes.tabRoot, 
				selected: classes.tabSelected,
			}}
			className="tab-field"
			label={label}
			onChange={onChange}
			indicator={indicator}
			selected={selected}
			value={value}
        />	
    )
}

ETab.propTypes = {
    classes: PropTypes.object.isRequired
};

export const EnhancedTab =  withStyles(styles)(ETab);
