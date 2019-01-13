import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
// import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
// import IconButton from '@material-ui/core/IconButton';
// import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import withStyles from '@material-ui/core/styles/withStyles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginLeft: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 13
  },
  action: {
    marginRight: 24,
    paddingLeft: -8
  },
  container: {
    marginTop: 20
  }
});

const MessageDialog = (props) => {

    const { show, classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (            
      <SnackbarContent
          className={classNames(classes[variant], className, classes.container)}
          aria-describedby="message-dialog"
          message={
              <span id="message-dialog" className={classes.message}>
              <Icon className={classNames(classes.icon, classes.iconVariant)} />
              {message}
              </span>
          }
          {...other}
      />     
    );
    
}
MessageDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default withStyles(styles)(MessageDialog);