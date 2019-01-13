import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
    selectIcon: {       
        left: 0,
        right: 'auto'
    }
});
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//       style: {
//         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//         width: 250,
//       },
//     },
//   };

class MultiSelectInput extends Component { 
    render(){
        const { fullWidth, id, meta, input, label, options, onBlur, description } = this.props;    
        // if(input && typeof input.value === 'object'){
        //     input.value = input.value._id;
        // }
        if(input && (input.value === null || input.value === '')){
            input.value = [];
        }
        
        return(
            <FormControl 
                margin="normal" 
                fullWidth={fullWidth} 
                error={meta && meta.touched && meta.error ? true : false}        
                className={classNames("form-field", meta && meta.asyncValidating ? 'async-validating' : '')}
            >
                <InputLabel className="field-label" htmlFor={id}>{label}</InputLabel> 
                <select multiple={true} onChange={onBlur}>
                    {options.map(item => (
                    <option key={item._id} value={item._id}>
                        {item.title}
                    </option>
                    ))}
                </select>
                {/* <Select
                    multiple
                    value={input.value}
                    onChange={onBlur}
                    input={<Input id={id} />}
                    //MenuProps={MenuProps}
                    //renderValue={selected => selected.join(', ')}
                >
                    {options.map(item => (
                    <MenuItem key={item._id} value={item._id}>
                        {item.title}
                    </MenuItem>
                    ))}
                </Select> */}
                { description && 
                <FormHelperText className="field-helper" id={`${id}-text`}>{description}</FormHelperText>                       
                }
                <FormHelperText className="field-helper" id={`${id}-text`}>{meta && meta.touched ? meta.error : null}</FormHelperText>                       
            </FormControl>       
        )
    }
};

MultiSelectInput = withStyles(styles)(MultiSelectInput);
export {MultiSelectInput};
