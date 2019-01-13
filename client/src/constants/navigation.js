import { URLS } from './routes';
import { DASHBOARD } from "./pages";
export const SIDENAV = [    
    {
        text: "داشبورد",
        icon: 'dashboard',
        id: DASHBOARD,
        link: URLS[DASHBOARD],
    },    
    // {        
    //     text: "گزارش ها",
    //     icon: 'equalizer',
    //     id: '',
    //     link: '#',       
    //     children: [
    //         {                
    //             text: "گزارش کلی پرداخت",
    //             id: REPORT_DAILY,
    //             link: URLS[REPORT_DAILY],               
    //         },                                     
    //     ]
    // },
    
];