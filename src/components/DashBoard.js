import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createAddressAction } from '../actions/address';

class DashBoard extends React.Component{
  constructor(props){
    super(props);
    this.state={
       
    }
  }

  componentWillMount(){
    
  }

  render(){
    return(
        <div className="container">
          <h1>WelCome...</h1>
          <br/>
          <NavLink to="/logOut" >LogOut </NavLink>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(DashBoard);
