import React from 'react';
import { Switch, Route } from 'react-router-dom';

//HOC
import Auth from "./hoc/auth";

//Admin Containers
// import AdminLoginContainer from './containers/admin/auth/admin_login_container';
// import AdminLogoutContainer from './containers/admin/auth/logout';

import { ROUTES } from './constants/routes';

const Routes = () => {    
    return (          
        <Switch>                                    
            {/* <Route path={URLS['login']} exact component={AdminLoginContainer} /> */}
            { ROUTES.map((route, key) => {                
                const { component, path, roles, permission } = route;                    
                return (
                    <Route
                        exact
                        path={path}
                        key={key}
                        render={ (props) => <Auth ComposedComponent={component} roles={roles} permission={permission} {...props} /> }
                    />
                )
                })
            }
            {/* <Route path={URLS['logout']} exact component={AdminLogoutContainer} /> */}
            <Route component={ () => <h1>404 not found</h1> } />       
        </Switch>         
    )
}

export default Routes;
