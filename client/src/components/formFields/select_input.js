import React, { Component } from 'react';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    selectIcon: {       
        left: 0,
        right: 'auto'
    },
    label: {
        fontSize: 16
    },
    description: {
        fontSize: 12
    },
    select:{
        fontSize: 14
    }
});

class SelectInput extends Component { 
    render(){
        const { fullWidth, id, meta, input, className, label, options, onChange, description, classes, disabled } = this.props;    
        if(input && typeof input.value === 'object'){
            input.value = input.value._id;
        }
        const selectTemplate = onChange ? 
                <Select
                    native
                    error={meta && meta.touched && meta.error ? true : false}
                    {...input}
                    id={id}
                    className={className}  
                    onChange={onChange}   
                    classes={{
                        icon: classes.selectIcon,
                        root: classes.select
                    }}             
                >
                    <option value="" />                         
                    {
                        options && options.map( (item, i) =>
                            <option key={i} value={item._id}>{item.title}</option> 
                        )
                    }                
                </Select>
                :
                <Select
                        native
                        error={meta && meta.touched && meta.error ? true : false}
                        {...input}
                        id={id}
                        className={className}  
                        classes={{
                            icon: classes.selectIcon,
                            root: classes.select
                        }}                                   
                    >
                        <option value="" />                         
                        {
                            options && options.map( (item, i) =>
                                <option key={i} value={item._id}>{item.title}</option> 
                            )
                        }                
                    </Select>
        return(
            <FormControl 
                margin="normal" 
                fullWidth={fullWidth} 
                error={meta && meta.touched && meta.error ? true : false}        
                className={classnames("form-field", meta && meta.asyncValidating ? 'async-validating' : '')}
                disabled={disabled}
            >
                <InputLabel className={classnames(classes.label, "field-label")} htmlFor={id}>{label}</InputLabel> 
                {selectTemplate}
                { description && 
                <FormHelperText className={classnames(classes.description, "field-helper")} id={`${id}-text`}>{description}</FormHelperText>                       
                }
                <FormHelperText className={classnames(classes.description, "field-helper")} id={`${id}-text`}>{meta && meta.touched ? meta.error : null}</FormHelperText>                       
            </FormControl>       
        )
    }
};

SelectInput = withStyles(styles)(SelectInput);
export {SelectInput};
