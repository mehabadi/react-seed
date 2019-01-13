import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';

const styles = theme => ({    
    menuItem: {
        textDecoration: 'none',
        '&:focus': {
          backgroundColor: theme.palette.primary.main,
        //   '& $primary, & $icon, & $text': {
        //     color: theme.palette.common.white,
        //   },
        },
    },
    activeMenuItem: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    icon: {
        marginRight: 8,
        marginLeft: 8
    },
    nested: {
        paddingRight: theme.spacing.unit * 4,
        textAlign: "right"
    },
    text: {
        textAlign: "right"
    }
});

class NavItem extends PureComponent {
    
    state = { open: false };

    componentWillUpdate(nextProps){        
        if(nextProps.drawerOpen === false){
            this.setState(({ open: false }));               
        }   
    }

    handleClick = () => {        
        this.setState(state => ({ open: !state.open }));
        this.props.onclick();
    };    
    
    showElement = (item, i) => {
        const { classes } = this.props;
        return  item.children && item.children.length > 0 ?                   
                <React.Fragment>
                    <ListItem button onClick={this.handleClick} className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <Icon>{item.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText className={classes.text} primary={item.text} id={item.id} />
                        <Icon>{this.state.open ? "expand_less" : "expand_more" }</Icon>
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {
                                item.children.map( (child, j) => (
                                    <NavLink to={child.link} className={classes.menuItem} activeClassName={classes.activeMenuItem} key={j}>                               
                                        <ListItem  button className={classNames(classes.nested, classes.menuItem)}>                            
                                            <ListItemText inset className={classes.text} primary={child.text} />
                                        </ListItem>
                                    </NavLink>
                                ))
                            }                            
                        </List>
                    </Collapse>
                    <Divider />
                </React.Fragment>
                :
                <React.Fragment>
                    <NavLink to={item.link}  className={classes.menuItem} activeClassName={classes.activeMenuItem}>
                        <ListItem button className={classes.menuItem}>                   
                            <ListItemIcon className={classes.icon}>
                                <Icon>{item.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText className={classes.text} primary={item.text} />
                        </ListItem>
                    </NavLink>
                    <Divider />
                </React.Fragment>
    }

    render(){       
        return (
            <div>
                {this.showElement(this.props.item)}
            </div>
        )
    }    
}

NavItem.propTypes = {
    classes: PropTypes.object.isRequired   
};

export default withStyles(styles)(NavItem);
