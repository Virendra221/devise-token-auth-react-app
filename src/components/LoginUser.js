import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import configureStore from '../../store/configureStore';
import { signInUserAction } from '../actions/user';
import StepTwo from './SignUp/stepTwo';
import StepThree from './SignUp/stepThree';
import DashBoard from './DashBoard'
import { createProfileAction } from '../actions/profile';
import { createAddressAction } from '../actions/address';
import { Route, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import history from '../routes/history';
import { message, notification } from 'antd';
import 'antd/dist/antd.css';

class LoginUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formData:{},
      user:{},
      count: 0
    };
    this.loginSubmit = this.loginSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.stepTwoSubmit = this.stepTwoSubmit.bind(this);
    this.stepThreeSubmit = this.stepThreeSubmit.bind(this);
  }

   loginSubmit(event){
    event.preventDefault();
    this.props.signInUserAction(this.state.formData);
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

  handleChange(e){
    let formData = this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({formData});
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      user: nextProps.user.user,
      count: nextProps.user.user.count
    });
    
    if (this.state.count+1 < nextProps.profile.user.count) 
          this.setState({count: nextProps.profile.user.count});
    
    if (this.state.count+1 < nextProps.address.user.count)
      this.setState({count: nextProps.address.user.count});

    if (nextProps.user.error) {
      notification.error({
            message: nextProps.user.message,
            duration: 3
          });
    }
    if (nextProps.user.success) {
      notification.success({
            message: nextProps.user.message,
            duration: 3
          });
    }
  }

    render(){
      return(
        <div className="container">
          {
            this.state.count==0 || this.state.count==undefined?
              <div>
                <h1>Login Here...</h1>
                <form onSubmit={this.loginSubmit}>
                
                <div className="form-group">
                  <label  htmlFor="father_name">Email:</label>
                  <input type="text" className="form-control" name="email" onChange={(e)=>this.handleChange(e)} placeholder="Enter Email here"/>
                </div>

                <div className="form-group">
                  <label htmlFor="father_name">Password:</label>
                  <input type="password" className="form-control" name="password" onChange={(e)=>this.handleChange(e)} placeholder="Enter Password here"/>
                </div>

                <input type="submit" className="btn btn-success" value="Login User" />
                </form>
                <br/>
                <NavLink to="/registraction">Sign Up</NavLink>
              </div>
              :
              ''
          }

          {
            this.state.count==1?
            <StepTwo stepTwoSubmit = {this.stepTwoSubmit} /> : ''
          }

          {
            this.state.count==2?
            <StepThree stepThreeSubmit = {this.stepThreeSubmit}  /> : ''
          }

          {
            this.state.count==3 ?
             <Redirect to="/DashBoard" /> : ''
          }

        </div>          
      )
    }
  }

const mapStateToProps = (state) => {
  debugger
  return {
    user: state.userReducer,
    profile: state.profile,
    address: state.address
  }
}
export default connect(mapStateToProps, {
  signInUserAction,
  createProfileAction,
  createAddressAction
})(LoginUser);
