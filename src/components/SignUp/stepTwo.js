  import React from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';


class StepTwo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formData: {},
      optionMarried: [{"value":true,"label":"Married"}, {"value":false,"label":"Un married"}],
      selectBox:{}
      };
    this.registerSubmit = this.registerSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

  registerSubmit(event){
    event.preventDefault();
    this.props.stepTwoSubmit(this.state.formData);
  }

  handleChange(e){
    let formData= this.state.formData;
    if(e.target.name =="father_name") 
      formData[e.target.name] = e.target.value;

    if(e.target.name =="age")
      formData[e.target.name] = parseInt(e.target.value);

    this.setState({formData});
  }

  handleChangeStatus(married){
    let formData= this.state.formData;
    let selectBox= this.state.selectBox;
    formData["married"]  = married.value;
    selectBox["married"]  = married;
    this.setState({
      formData:formData
    });
  }

  render(){
    return(
        <div>
          <h3>Step 2 </h3>
          <div>
            <form onSubmit={this.registerSubmit}>

            <div className="form-group">
              <label htmlFor="father_name">Father Name:</label>
              <input type="text" className="form-control" name="father_name" onChange={(e)=>this.handleChange(e)} placeholder="Enter Father Name here"/>
            </div>

            <div className="form-group">
              <label htmlFor="father_name">Married Status:</label>
              <Select name="married"
                components={makeAnimated()}
                value={this.state.selectBox.married}
                onChange ={this.handleChangeStatus} 
                options={this.state.optionMarried}
                />
            </div>

            <div className="form-group">
              <label htmlFor="father_name">Age:</label>
              <input type="number" className="form-control" name="age" onChange={(e)=>this.handleChange(e)}   placeholder="Enter Age here"/>
            </div>

              <input type="submit" className="btn btn-success" value="Next Step" />
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
 export default connect(mapStateToProps)(StepTwo);
