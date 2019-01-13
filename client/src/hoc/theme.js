import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({ 
  direction: 'rtl', // Both here and <body dir="rtl">
  palette: {
    primary: { main: '#b33c37' },
    secondary: { main: '#1890ff' },
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  }, 
  typography: {
    useNextVariants: true,// To make an immediate switch to typography v2
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Droid Arabic Naskh',      
      'Tahoma',
      'Arial',
      'sans-serif'      
    ].join(','),
  },  
  overrides:{
    MuiStepConnector: {
      alternativeLabel: {
        left: 'calc(50% + 20px)',
        right: 'calc(-50% + 20px)',
      }
    },
    MuiTab: {
      label: {
        fontSize: 13
      }
    },
    MuiTableCell:{
      root:{
        textAlign: 'right'
      }
    }
  }
});

function Theme(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="rtl" dir="rtl">
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}
export default Theme;