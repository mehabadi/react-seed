import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    button: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        left: theme.spacing.unit * 2,
    },
    secondButton: {
        bottom: theme.spacing.unit * ( 2 + 8 ),        
    },
    thirdButton: {
        bottom: theme.spacing.unit * ( 2 + 16 ),        
    },
    button2:{
        bottom: theme.spacing.unit * ( 2 + 8 ),        
    },
    button3: {
        bottom: theme.spacing.unit * ( 2 + 16 ),        
    },
    button4: {
        bottom: theme.spacing.unit * ( 2 + 24 ),        
    },
    button5: {
        bottom: theme.spacing.unit * ( 2 + 32 ),        
    },
    fabMoveUp: {
        transform: 'translate3d(0, -46px, 0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.enteringScreen,
          easing: theme.transitions.easing.easeOut,
        }),
    },
    fabMoveDown: {
        transform: 'translate3d(0, 0, 0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.leavingScreen,
          easing: theme.transitions.easing.sharp,
        }),
    },
});

class FabButtons extends Component {
    
    render() {
        const { 
            classes, showMoreFabButtons, selectedItems, 
            addButtonClick, editButtonClick, deleteButtonClick,
            showAddButton, showEditButton, showDeleteButton, extraButtons
        } = this.props;  
        let i = 1;
        i = showDeleteButton ? ++i : i; 
        i = showEditButton ? ++i : i; 
        // i = showAddButton ? ++i : i; 
              
        return (                    
            <div className={classNames(classes.button, this.props.moveUp ? classes.fabMoveUp : classes.fabMoveDown)}>
                 {
                     extraButtons && extraButtons.map( (button, key) => 
                        button.show &&  
                        <Grow 
                            key={key}
                            in={showMoreFabButtons}
                            {...(showMoreFabButtons ? { timeout: 500 } : {})}
                        >                        
                            <Fab                                
                                color="primary" 
                                aria-label={button.label}                         
                                className={classNames(classes.button,  classes[`button${++i}`])}                            
                                onClick={button.onClick}
                                disabled={button.disableOnMultiSelect && Boolean(selectedItems && selectedItems.length>1)}
                            >
                            <Tooltip title={button.label} placement="right">
                                <Icon>{button.icon}</Icon>
                            </Tooltip>
                            </Fab>
                        </Grow>
                     )
                }      
                {   showDeleteButton &&
                    <Grow 
                        in={showMoreFabButtons}
                        {...(showMoreFabButtons ? { timeout: 500 } : {})}
                    >
                        <Fab 
                            color="primary" 
                            aria-label="حذف"                         
                            className={classNames(classes.button, showEditButton ? classes.thirdButton : classes.secondButton)}                            
                            onClick={deleteButtonClick}
                        >
                        <Tooltip title="حذف" placement="right">
                            <Icon>delete</Icon>
                        </Tooltip>
                        </Fab>
                    </Grow>
                }
                { showEditButton &&
                    <Grow in={showMoreFabButtons}>
                        <Fab 
                            color="primary" 
                            aria-label="ویرایش"                         
                            className={classNames(classes.button, classes.secondButton)}
                            onClick={editButtonClick}
                            disabled={Boolean(selectedItems && selectedItems.length>1)}
                        >
                            <Tooltip title="ویرایش" placement="right">
                            <Icon>edit</Icon>
                            </Tooltip>
                        </Fab>
                    </Grow>  
                }         
                {showAddButton &&
                    <Fab 
                        color="primary" 
                        aria-label="افزودن" 
                        className={classes.button}
                        onClick={addButtonClick}
                    >
                        <Tooltip title="افزودن" placement="right">
                        <Icon>add</Icon>
                        </Tooltip>
                    </Fab>
                }                
            </div>
        )   
    } 
}


FabButtons.propTypes = {
    classes: PropTypes.object.isRequired   
};

export default withStyles(styles)(FabButtons);
