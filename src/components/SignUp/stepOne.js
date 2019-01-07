import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';


class StepOne extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      formData: {}
      };
    this.registerSubmit = this.registerSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  registerSubmit(event){
    event.preventDefault();
    this.props.stepOneSubmit(this.state.formData);
  }

  handleChange(e){
    let formData = this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({formData});
  }

  render(){
    return(
        <div>
          <h3>Step 1</h3>
          <div>
            <form onSubmit={this.registerSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" name="name" onChange={(e)=>this.handleChange(e)} placeholder="Enter User Name here"/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" className="form-control" name="email" onChange={(e)=>this.handleChange(e)} placeholder="Enter Email here"/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" name="password" onChange={(e)=>this.handleChange(e)} placeholder="Enter Password here"/>
            </div>

              <input type="submit" className="btn btn-success" value="Next Step" />
            </form>
            <br/>
            <NavLink to="/login">Sign In</NavLink>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
    }
}
 export default connect(mapStateToProps)(StepOne);
