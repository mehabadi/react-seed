import React, { PureComponent } from 'react';
import classnames from "classnames";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import "imrc-datetime-picker/dist/imrc-datetime-picker.css";
import {DatetimePickerTrigger} from 'imrc-datetime-picker';
import jmoment from 'moment-jalaali';
import tzmoment from 'moment-timezone';
import { TIME_ZONE } from '../../constants/layout_constants';

export class EnhancedDatePicker extends PureComponent { 
    state = {
        selectedDate: jmoment(tzmoment().tz(TIME_ZONE)),
    }

    componentWillMount(){  
        const { isSolar, input } = this.props;     
        if(input && input.value){ 
            let date;
            if(typeof input.value === 'string'){
                date = jmoment(input.value, 'YYYY/MM/DD').locale(isSolar ? 'fa' : 'en');
            }else{
                date = input.value;
            }
            this.setState({
                selectedDate: date
            });
        }else{
            this.props.input.onChange(this.state.selectedDate);
        }
    }

    handleDateChange = (value) => {
        this.setState({ selectedDate: value });      
        this.props.input.onChange(value);
    }
    render(){        
        const { id, label, fullWidth, description, meta, className, isSolar } = this.props;          
        const { selectedDate } = this.state; 
        const dateFormat = isSolar ? "jYYYY/jMM/jDD" : "YYYY/MM/DD";
        
        return (  
        <div className={`date-time-picker ${isSolar ? "persian" : ""}`}>
        <FormControl
            margin="normal" 
            fullWidth={fullWidth} 
            className={classnames("form-field", meta.asyncValidating ? 'async-validating' : '')}
            error={meta.touched && meta.error ? true : false}
        >         
            <DatetimePickerTrigger
                moment={selectedDate}
                onChange={this.handleDateChange}
                className="fullwidth ltr datepicker"
                showTimePicker={false}
                isSolar={isSolar}
                lang={isSolar ? "fa" : "en"}
                closeOnSelectDay={true}
                >
                <InputLabel className="field-label" htmlFor={id}>{label}</InputLabel>
                <Input
                    error={meta.touched && meta.error ? true : false}
                    id={id}    
                    className={classnames(className, 'marginT15', 'field-input')}    
                    value={selectedDate && selectedDate.format(dateFormat)} 
                    readOnly={true}
                    type="text"               
                />
            </DatetimePickerTrigger>    
            {description && 
            <FormHelperText className="field-helper" id={`${id}-text`}>{description}</FormHelperText>   
            }
            <FormHelperText className="field-helper" id={`${id}-text`}>{meta.touched ? meta.error : null}</FormHelperText>           
        </FormControl>  
        </div>
        )
    }    
}
