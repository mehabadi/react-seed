import React from 'react';
import classnames from 'classnames';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export const RadioGroupInput = (props) => {
    const { input, className, label, options, radioValue } = props;      
    return (  
        <RadioGroup
        aria-label={label}
        {...input}
        className={classnames(className, "radioGroup")}
        value={radioValue}
        >
            { options && options.map( (item, i) => 
                <FormControlLabel className="field-label" key={i} value={item.value} control={<Radio />} label={item.label} />
            )}            
        </RadioGroup>           
    )
}

