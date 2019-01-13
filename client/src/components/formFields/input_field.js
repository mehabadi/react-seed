import React from 'react';
import classnames from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({ 
    label: {
        fontSize: 14
    },
    description: {
        fontSize: 12
    },
});
let inputField = (props) => {      
    const { 
        fullWidth, classes, id, meta, input, className, 
        placeholder, disabled, type, label, description, 
        maxLength, readOnly 
    } = props;    
    if(maxLength){
        input.maxLength=`${maxLength}`
    }
    return(        
        type === "hidden" ? 
        <Input
            error={meta.touched && meta.error ? true : false}                
            {...input}
            id={id}    
            className={classnames(classes.label, className, 'field-input')}     
            placeholder={placeholder}    
            disabled={disabled}   
            type={type}                
        />
        :
        <FormControl 
            margin="normal" 
            fullWidth={fullWidth} 
            className={classnames("form-field", meta.asyncValidating ? 'async-validating' : '')}
            error={meta.touched && meta.error ? true : false}
        >         
            <InputLabel className="field-label" htmlFor={id}>{label}</InputLabel>                                     
            <Input
                error={meta.touched && meta.error ? true : false}                
                {...input}
                id={id}    
                className={classnames(classes.label, className, 'field-input')}          
                placeholder={placeholder}    
                disabled={disabled}   
                type={type}  
                readOnly={readOnly}              
            />
            {maxLength && 
            <FormHelperText className="field-helper" id={`${id}-text`}>{maxLength - input.value.length}</FormHelperText>   
            }         
            {description && 
            <FormHelperText className={classnames(classes.description, 'field-helper')} id={`${id}-text`}>{description}</FormHelperText>   
            }
            <FormHelperText className={classnames("field-helper", classes.description)} id={`${id}-text`}>{meta.touched ? meta.error : null}</FormHelperText>           
        </FormControl>        
    )
};

inputField.propTypes = {
    classes: PropTypes.object.isRequired,
};
inputField = withStyles(styles)(inputField);
export const InputField = inputField;