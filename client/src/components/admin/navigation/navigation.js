import React from 'react';
import List from '@material-ui/core/List';
import NavItem from './nav_item';

// Constants
import { SIDENAV } from '../../../constants/navigation';

const Navigation = (props) => {
    
    const isAllowed = item => props.user.permissions.some(r =>item.id === r.name);    
    
    const getData = () => {
        let filtered = [];
        SIDENAV.forEach( item => {
            if(isAllowed(item)){
                filtered.push(item);
            }else if(item.children && item.children.length>0){
                let children = [];
                item.children.forEach( child => {
                    if(isAllowed(child)){
                        children.push(child);
                    }
                });
                if(children.length > 0){
                    item.children = children;
                    filtered.push(item);
                }                
            }
        });

        return filtered;
    }
    
    return (
        <React.Fragment>                
            {props.user && props.user.permissions && props.user.permissions.length > 0 ? (
                <List>
                    {                    
                        getData().map( (item, i) => <NavItem item={item} key={i} drawerOpen={props.drawerOpen} onclick={props.onclick} /> )
                    }
                </List>
            ): null}               
        </React.Fragment>
    )
}

export default Navigation;
