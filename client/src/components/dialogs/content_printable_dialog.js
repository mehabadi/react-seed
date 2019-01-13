import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import withMobileDialog from '@material-ui/core/withMobileDialog';
//utils
import { savePDF } from "../../util/public_methods";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ContentPrintableDialog = (props) => {    
    const { children } = props;
    return (
        <div>            
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                scroll="paper"
                aria-labelledby={props.title}
                fullWidth
                TransitionComponent={Transition}   
                maxWidth="md"          
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>                  
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button className="button-field" onClick={props.handleClose} color="primary" autoFocus>انصراف</Button>              
                    <Button className="button-field" onClick={() => savePDF('page', 5)} color="primary">چاپ</Button> 
                </DialogActions>
            </Dialog>
        </div>
    );    
}
ContentPrintableDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};
  
export default withMobileDialog()(ContentPrintableDialog);