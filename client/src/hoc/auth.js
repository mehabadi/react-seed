import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
// import { auth, authPost } from '../actions';
import Layout from './layout';
import { URLS } from '../constants/routes';
import { withCookies/*, Cookies*/ } from 'react-cookie';

class AuthenticationCheck extends Component {
    
    state = {
        loading: true,
        authCookie: null
    }
    
    // static propTypes = {
    //     cookies: instanceOf(Cookies).isRequired
    // };

    constructor(props) {
        super(props);
        
        const { cookies } = props;
        this.state = {
            authCookie: cookies.get('auth')
        };
    }

    componentWillMount(){   
        this.requestForData();
    }    

    componentWillReceiveProps(nextProps){   
        if(nextProps.user.error){
            nextProps.user.error = null;
            return this.props.history.push(URLS['error']);           
        }else if(this.state.authCookie && nextProps.user.login === null){
            this.requestForData();
        }else if(!nextProps.user.login || !nextProps.user.login.isAuth){            
            return this.props.history.push(URLS['login']);
        }else if(nextProps.user.login.hasPermission === false){            
            return this.props.history.push(URLS['noaccess']);           
        }
    }

    requestForData = () => {        
        const { permission, auth, authPost } =  this.props;
        if(permission){
            // authPost({permission}); 
        }else{
            // auth();          
        } 
    }

    handleLoading = (show) => {             
        this.setState({ loading: show });         
    }
    render() {            
        return  <Layout loading={this.state.loading} handleLoading={this.handleLoading} {...this.props} user={this.props.user} />
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // auth, 
        // authPost
    }, dispatch)
}
AuthenticationCheck = connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck)
export default  withCookies(AuthenticationCheck);