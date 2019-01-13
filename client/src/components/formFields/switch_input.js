import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import classnames from 'classnames';

export const SwitchInput = ({ input, label, className }) => { 
    return (    
    <FormControlLabel
        className={classnames(className, "ltr", 'switch-input')}
        control={
        <Switch
            {...input}
            checked={input.value}           
            value={`${input.value}`}
            //color="primary"
            //onChange={field.input.onChange}            
        />
        }
        label={label}
    />    
  )
}
