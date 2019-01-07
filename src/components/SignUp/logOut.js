import React from 'react';
import {connect} from 'react-redux';
import { signOutUserAction } from '../../actions/user';
import { Route, Redirect } from 'react-router';
import LoginUser from './../LoginUser';

class LogOut extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      signOut: false
      };
  }

  componentWillMount(){
    let data={data: "logout"};
    this.props.signOutUserAction(data);
  }

  componentWillReceiveProps(nextProps){
    this.setState({signOut: nextProps.message});
  }

  render(){
    return(
      <div>
      {
        this.state.signOut?
        <Redirect to="/login" />
        : <Redirect to="/logout" />
      }
      </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
      message: state.userReducer.success
    }
}
 export default connect(mapStateToProps, {
  signOutUserAction
})(LogOut);
