import React from 'react';
import {connect} from 'react-redux';
import history from './history';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import DashBoard from './../components/DashBoard';
import LogOut from '../components/SignUp/logOut';

class Auth extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // auth: localStorage.getItem('accessToken')!=null ? true : false,
      auth: true
      };
      debugger
  }

  componentWillMount(){
    debugger
    // if(this.state.auth){
    //   history.replace(this.props.location.pathname);
    // }else
    //   history.replace('/login');
    
  }

  render(){
    return(
        <div>
          {
            (this.state.auth && this.props.location.pathname == "/dashBoard")?
              <DashBoard /> :
              <Redirect to="/login"/>
          }
        </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
    }
}
 export default connect(mapStateToProps)(Auth);
