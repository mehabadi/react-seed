import React from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export const TextareaField = (props) => {      
    const { fullWidth, id, meta, input, className, placeholder, disabled, type, label, description, maxLength, readOnly, multiline } = props;    
    if(maxLength){
        input.maxLength=`${maxLength}`
    }
    return(                
        <FormControl 
            margin="normal" 
            fullWidth={fullWidth} 
            className={classNames("form-field", meta.asyncValidating ? 'async-validating' : '')}
            error={meta.touched && meta.error ? true : false}
        >                     
            <TextField 
                error={meta.touched && meta.error ? true : false}                
                {...input}
                id={id}    
                label={label}
                className={className}     
                placeholder={placeholder}    
                disabled={disabled}   
                type={type}  
                readOnly={readOnly}  
                multiline={multiline ? true: false}            
            />
            {maxLength && 
            <FormHelperText className="field-helper" id={`${id}-text`}>{maxLength - input.value.length}</FormHelperText>   
            }         
            {description && 
            <FormHelperText className="field-helper" id={`${id}-text`}>{description}</FormHelperText>   
            }
            <FormHelperText className="field-helper" id={`${id}-text`}>{meta.touched ? meta.error : null}</FormHelperText>           
        </FormControl>        
    )
};
