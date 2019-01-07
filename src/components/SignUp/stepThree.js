import React from 'react';
import {connect} from 'react-redux';

class StepThree extends React.Component{
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
    this.props.stepThreeSubmit(this.state.formData);
  }

  handleChange(e){
    let formData= this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({formData});
  }

  render(){
    return(
        <div>
          <h3>Step 3</h3>
          <div>
            <form onSubmit={this.registerSubmit}>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" className="form-control" name="address" onChange={(e)=>this.handleChange(e)} placeholder="Enter Address"/>
            </div>

            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text"  className="form-control" name="city" onChange={(e)=>this.handleChange(e)} placeholder="Enter City"/>
            </div>

            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input type="text" className="form-control" name="country" onChange={(e)=>this.handleChange(e)} placeholder="Enter Country"/>
            </div>

          <div className="form-group">
            <label htmlFor="zip">Zip:</label>
            <input type="text" className="form-control" name="zip" onChange={(e)=>this.handleChange(e)} placeholder="Enter Zip"/>
          </div>

          <input type="submit" className="btn btn-success" value="Save & Go To DashBoard" />
          
            </form>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
    }
}
 export default connect(mapStateToProps)(StepThree);
