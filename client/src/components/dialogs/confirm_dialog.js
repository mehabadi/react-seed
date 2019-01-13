import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    title: {
        fontSize: 15
    },
    description: {
        fontSize: 13
    },
    buttons: {
        fontSize: 12
    }
});
const ConfirmDialog = (props) => {   
    const { classes } = props;
    return (
        <div>            
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby={props.title}
                aria-describedby={props.message}
            >
                <DialogTitle id="alert-dialog-title" className={classes.title}>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className={classes.description}>
                    {props.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} className={classes.buttons} color="primary" autoFocus>انصراف</Button>              
                    <Button onClick={props.handleConfirm} className={classes.buttons} color="primary">تایید</Button> 
                </DialogActions>
            </Dialog>
        </div>
    );    
}
ConfirmDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmDialog);