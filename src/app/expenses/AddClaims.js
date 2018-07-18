import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import { plus,glass2,search } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle,savebtn1} from "../Layout.css";
import {dateStyle,labelStyle1,inputstyle,inputstyletextarea} from "../employee/LayoutEmployee.css";
import {labelStyle,inputstyle1,formStyle,inputStyle,hyperLink} from "../settings/LayoutSettings.css";
import {addBtn,cancelBtn} from "../projects/Projects.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class AddClaims extends React.Component{
  constructor(props){
    super(props);
    this.state =
    {
      expense:'',
      amount:'',
      dob:''
    }
 }
handledobchange = (evt) =>{
  this.setState({
    dob:evt.target.value
  })
}
handleExpensechange = (evt) =>{
  this.setState({
    expense:evt.target.value
  })
}
handleAmountchange = (evt) =>{
  this.setState({
    amount:evt.target.value
  })
}
  render() {
    var re1 = new RegExp("^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$");
    var re2 = new RegExp("^[0-9]{3,7}$");
    const {expense,amount,dob} = this.state;
    const isEnabled =
      re1.test(expense) &&
      re2.test(amount) &&
      dob.length > 0;

    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Add Claims</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
       <div class="form-row">
       <div class="col-md-10 mb-3">
         <label className={labelStyle1}>Expense Name</label>
         <Input className={inputstyle} type="text"
         value={this.state.expense}
          onChange={this.handleExpensechange}
          title="Expense cannot be letters,symbols or special characters < 4 or > 25"
           required/>
         </div>
         </div>
            <div class="form-row">
            <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Amount</label>
            <Input type="text"  className={inputstyle}
            value={this.state.amount}
            onChange={this.handleAmountchange}
            required
            title="Amount can be only digits neither <3 or >7"
            />
            </div>
            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Date</label>
              <Input type="date" className={inputstyle}
              required
              value={this.state.dob}
              onChange={this.handledobchange}


              />
            </div>
            </div>
            <div class="form-row">
            <div class="col-md-12 mb-3">
                 <label className={labelStyle1}>Description</label>
                 <Input className={inputstyletextarea} type="textarea"  rows="3" name="text" />
              </div>
              </div>
{isEnabled?
  <Link to="/ClaimList"><button className="btn btn-outline-warning" >
  Submit</button></Link> :
  <button className="btn btn-outline-warning">Submit</button>
}

          </Form>
      </div>
      <Footer/>
      </div>
    );
  }
}
