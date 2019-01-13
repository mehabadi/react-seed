import { DASHBOARD } from "../constants/pages";
//Containers
import DashboardContainer from '../containers/dashboard_container';
const ADMIN_BASE_ROUTE = '/'

// #region URLS
const URLS = [];
URLS[DASHBOARD] = `${ADMIN_BASE_ROUTE}`;

URLS['login'] = `${ADMIN_BASE_ROUTE}/login`;
URLS['logout'] = `${ADMIN_BASE_ROUTE}/logout`;
URLS['noaccess'] = `${ADMIN_BASE_ROUTE}/noaccess`;
URLS['error'] = `${ADMIN_BASE_ROUTE}/error`;
// #endregion

// #region ROUTES
const ROUTES = [    
    // {
    //     id: 'noaccess',
    //     path: URLS['noaccess'],
    //     component: AdminNoAccess,
    //     roles: [],
    //     permission: ''
    // },    
    // {
    //     id: 'error',
    //     path: URLS['error'],
    //     component: AdminError,
    //     roles: [],
    //     permission: ''
    // },        
    {
        id: DASHBOARD,
        path: URLS[DASHBOARD],
        component: DashboardContainer,
        roles: [],
        permission: DASHBOARD
    },        
];  

export { ROUTES, URLS };