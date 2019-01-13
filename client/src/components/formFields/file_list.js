import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

//components
import ConfrimDialog from '../dialogs/confirm_dialog.js';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },   
    media: {
      height: 140,
    },
    cardContent:{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        position: 'absolute',
        marginTop: -140
    },
    appBar: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'right',
        flexGrow: 1,
        borderBottom: '1px solid #666666'
    },
    title:{
        flexGrow: 1,
        fontSize: 16
    },    
    paragraph: {
        direction: 'rtl',
        textAlign: 'right',
        fontSize: 12
    },
    titleBar: {        
        background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',     
    }, 
    tileTitle: {
        fontSize: 12,
        textAlign: 'right'
    },
    icon: {
        color: 'rgba(255,255,255,0.8)',
    },      
    gridList: {
        backgroundColor: '#eee',
        height: 300,
        padding: theme.spacing.unit * 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'scroll'
    },   
});
  
class FilesList extends Component {
    
    state = {
        showDeleteDialog: false,
        selectedItem: ''
    }

    handleDeleteBtnClicked = () => { 
        this.setState({showDeleteDialog: true});
    }

    handleDeleteBtnSubmit = () => {
        this.setState({showDeleteDialog: false});
        this.props.OnDeleteFile({filename: this.state.selectedItem[0].filename})
    }
    
    renderGridList = () => {     
        const {items, classes, canDelete, customerId, isClientSide} = this.props; 
        
        return !items || items.length === 0 ?                              
                <Typography className={classes.paragraph} variant="caption" color="inherit">
                    هیچ مدرکی پیوست نشده است.
                </Typography>                  
                : 
                items.map((item, i) =>                     
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Card>  
                            <GridListTile component="div" className={classes.gridItem}>
                                <CardMedia
                                    className={classes.media}
                                    image={`/uploads/${item[0].filename}`}                                        
                                />
                                <GridListTileBar 
                                    title={`ایجاد کننده: ${String(item[0].user) === String(customerId) ? 'کاربر' : 'مدیر'}`}                
                                    titlePosition="bottom"   
                                    actionPosition="left"                                        
                                    classes={{ 
                                        root: classes.titleBar,
                                        title: classes.tileTitle
                                     }}                                  
                                    actionIcon={
                                        (isClientSide || canDelete) && <IconButton 
                                            className={classes.icon}
                                            onClick={() => this.setState({selectedItem: item}, this.handleDeleteBtnClicked) }
                                        >
                                            <DeleteOutlinedIcon />
                                        </IconButton>
                                    }                                        
                                />
                            </GridListTile>                                 
                        </Card>
                    </Grid>                    
                )                                        
    }

    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <div className={classes.appBar} >           
                                <Typography className={classes.title} variant="h6" color="inherit">
                                    مدارک پیوست شده
                                </Typography>
                            </div> 
                        </Grid>  
                        <Grid item xs={12} className={classes.gridList} container spacing={16} >                        
                            {this.renderGridList()}
                        </Grid>
                    </Grid>
                </div>
                <ConfrimDialog 
                    open={this.state.showDeleteDialog}
                    title="حذف مدرک"
                    message={'آیا می خواهید مدرک مورد نظر را حذف کنید؟'}
                    handleConfirm={this.handleDeleteBtnSubmit}
                    handleClose={() => this.setState({showDeleteDialog: false})}
                />            
            </React.Fragment>
        )
    }
}
FilesList.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(FilesList);