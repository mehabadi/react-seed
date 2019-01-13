import React from 'react';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import 'react-phone-number-input/style.css';
import 'react-responsive-ui/style.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PhoneInput from 'react-phone-number-input/react-responsive-ui';
import SmartInput from 'react-phone-number-input/smart-input'

const styles = theme => ({
    formControl:{
        marginTop: 0
    },
    error:{
        fontSize: 12
    },
    selectInput: {
        paddingTop: 2
    }
});
let Tel = (props) => {        
    const { classes, id, label, fullWidth, meta, className, placeholder, input, country, countryOptions, countries } = props;
    return(
        <FormControl 
            margin="normal" 
            fullWidth={fullWidth} 
            className={classnames(classes.formControl, "form-field")}
            error={meta.touched && meta.error ? true : false}
        >      
        <div> 
            <InputLabel className="field-label1" htmlFor={id} style={{top: -20, fontSize: 12 }}>{label}</InputLabel>  
            <PhoneInput
                inputComponent={ SmartInput }
                error={meta.touched && meta.error ? meta.error : ''}      
                placeholder={placeholder}    
                {...input}
                className={classnames(className, 'field-input')} 
                country={country} 
                countryOptions={countryOptions} 
                countries={countries}
            />                                                      
            </div>  
         </FormControl>
        
    )
};
Tel = withStyles(styles)(Tel);
export const TelInput = Tel;
