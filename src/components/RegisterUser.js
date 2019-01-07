import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import configureStore from '../../store/configureStore';
import StepOne from './SignUp/stepOne';
import StepTwo from './SignUp/stepTwo';
import StepThree from './SignUp/stepThree';
import DashBoard from './DashBoard';
import { signUpUserAction } from '../actions/user';
import { createProfileAction } from '../actions/profile';
import { createAddressAction } from '../actions/address';
import { Route, Redirect } from 'react-router';
import { message, notification } from 'antd';
import 'antd/dist/antd.css';

let location = window.location.href;
window.addEventListener("beforeunload", (ev) => 
{
  ev.preventDefault();
  debugger
  if(location == "http://localhost:8080/login")
    localStorage.removeItem('authentication');
});

class RegisterUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user:{},
      signupStep: 1,
      };
    this.stepOneSubmit = this.stepOneSubmit.bind(this);
    this.stepTwoSubmit = this.stepTwoSubmit.bind(this);
    this.stepThreeSubmit = this.stepThreeSubmit.bind(this);
  }

  stepOneSubmit(userData){
    this.props.signUpUserAction(userData);
  }

  stepTwoSubmit(profileData){
    profileData['count'] = 2;
    profileData['user_id'] = this.state.user.id;
    this.props.createProfileAction(profileData);
  }

  stepThreeSubmit(addressData){
    addressData['count'] = 3;
    addressData['user_id'] = this.state.user.id;
    this.props.createAddressAction(addressData);
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.userReducer.success){
      this.setState({
        signupStep: 2,
        user: nextProps.userReducer.user
      });
    }

    if (nextProps.userReducer.error && this.state.signupStep == 1) {
      notification.error({
            message: nextProps.userReducer.message,
            duration: 3
          });
    }

    if (nextProps.address.success && this.state.signupStep == 3) {
      // alert(nextProps.address.message);
      notification.success({
            message: nextProps.address.message,
            duration: 3
          });
    }

    if(nextProps.profile.success){
      this.setState({
        signupStep: 3
        // profile: nextProps.profile.profile
      });
    }

    if(nextProps.address.success){
      this.setState({
        signupStep: 4
        // address: nextProps.address.address
      });
    }

  }

  render(){
    return(
        <div className="container">
          {
            this.state.signupStep==1 ?
            <StepOne stepOneSubmit = {this.stepOneSubmit} /> : ''
          }

          {
            this.state.signupStep==2 ?
            <StepTwo stepTwoSubmit = {this.stepTwoSubmit}  /> : ''
          }

          {
            this.state.signupStep==3 ?
            <StepThree stepThreeSubmit = {this.stepThreeSubmit}  /> : ''
          }

          {
            this.state.signupStep==4 ?
            <Redirect to="/dashBoard" /> : ''
          }

        </div>
      )
  }
}

const mapStateToProps = (state) => {
  debugger
    return {
      userReducer: state.userReducer,
      profile: state.profile,
      address: state.address
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       signUpUserAction
//     }
// }


 export default connect(mapStateToProps, {
  signUpUserAction,
  createProfileAction,
  createAddressAction
})(RegisterUser);
