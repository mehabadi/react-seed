import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const FormDialog = (props) => {    
    return (
        <div>            
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                fullScreen={props.fullScreen}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
                <DialogContent>                    
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button className="button-field" onClick={props.handleClose} color="default">انصراف</Button>
                    <Button 
                        className="button-field"
                        disable={props.disableConfirm}
                        onClick={props.handleConfirm} 
                        disabled={props.disabledConfirm}
                        color="primary"
                        autoFocus
                    >{props.confirmBtnLabel}</Button> 
                </DialogActions>
            </Dialog>
        </div>
    );    
}

export default withMobileDialog()(FormDialog);