import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({               
  formlabel:{
      color: theme.palette.secondary.main,
      width: '100%'
  },  
  divider:{   
    backgroundColor: theme.palette.secondary.main,       
    marginTop: 20,
    marginBottom: 20,
    width: 80
  }
});

const FormSectionHeader = (props) => {
  const { classes, children } = props;
  return (
    <React.Fragment>
      <FormLabel className={classes.formlabel}>
        {children}
      </FormLabel>
      <Divider className={classes.divider}/>
    </React.Fragment>    
  )
}
export default withStyles(styles)(FormSectionHeader);