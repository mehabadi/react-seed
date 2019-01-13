import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export class PasswordInput extends Component {
    state = {
        showPassword: false
    }
    
    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render(){
        const { id, fullWidth, className, meta, label, input  } = this.props;                     
        return(               
            <FormControl 
                fullWidth={fullWidth} 
                className={className}
                margin="normal"  
                error={meta.touched && meta.error ? true : false}               
            >
                <InputLabel className="field-label" htmlFor="adornment-password">{label}</InputLabel>
                <Input  
                    error={meta.touched && meta.error ? true : false}                 
                    type={this.state.showPassword ? 'text' : 'password'}
                    className="field-input"                                     
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                            >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    {...input}
                />
                <FormHelperText className="field-helper" id={`${id}-text`}>{meta.touched ? meta.error : null}</FormHelperText>           
            </FormControl>
        )
}
};
