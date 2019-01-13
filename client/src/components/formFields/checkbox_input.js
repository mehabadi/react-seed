import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const CheckboxInput = (props) => {
    const { input, label, checked } = props;      
    return ( 
        <FormControlLabel
          control={
            <Checkbox
                onChange={input.onChange}               
                defaultChecked={checked}
            />
          }
          label={label}
        /> 
                   
    )
}

