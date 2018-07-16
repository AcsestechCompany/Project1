import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2 } from 'react-icons-kit/icomoon/';
import {Link} from "react-router-dom";
import {displayContainer,arrowIconR,arrowIconL,pageHeading,hrStyle,buttonStyle,orange,skip1,bankdiv,floatRight2,savebtn1} from "../Layout.css";
import {hyperLinkEmployee,dateStyle,labelStyle1,inputstyle,slidertext} from "./LayoutEmployee.css";
import {formStyle,floatRight,enableBtn,disableBtn} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class JobHistory extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    value: new Date(),
    companyname:'',
    department:'',
    designation:'',
    reportingmanager:''
  }
}
handlecompanynameChange = (evt) =>{
  this.setState({
    companyname:evt.target.value
  })
}
handledepartmentChange = (evt) =>{
  this.setState({
    department:evt.target.value
  })
}
handledesignationChange = (evt) =>{
  this.setState({
    designation:evt.target.value
  })
}
handlereportingmanagerChange = (evt) =>{
  this.setState({
    reportingmanager:evt.target.value
  })
}
  handleChange = (event, value) => {
   this.setState({value});
 }
  render() {
    var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
    var re2 = new RegExp("^([a-zA-Z]{5,25}(?: [a-zA-Z]+){0,2})$");
    const {companyname,department,designation,reportingmanager } = this.state;
    const isEnabled =
      re2.test(companyname) &&
      re2.test(department) &&
      re2.test(designation) &&
      re2.test(reportingmanager);
    return(
  <div>
  <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Job History</p>
<hr className={hrStyle}/>
<Form className={formStyle}>
<div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
<p style={{marginTop:'1.5vw'}}>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={orange}>Job History</Link></p>
<p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
</div>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Company Name</label>
          <Input type="text"  className={inputstyle} placeholder=""
          value={this.state.companyname}
          onChange={this.handlecompanynameChange}

           required/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Department</label>
  <Input type="text"  className={inputstyle} placeholder=""
  value={this.state.department}
  onChange={this.handledepartmentChange}

   required/>
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Designation</label>
            <Input type="text"  className={inputstyle} placeholder=""
            value={this.state.designation}
            onChange={this.handledesignationChange}

             required/>
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Reporting Mananger</label>
          <Input type="text"  className={inputstyle} placeholder=""
          value={this.state.reportingmanager}
          onChange={this.handlereportingmanagerChange}

          required/>
          </div>
          </div>

        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Date Of Joining</label>
            <Input type="date"  className={inputstyle} placeholder=""


             required/>
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Date of Releiving</label>
          <Input type="date"  className={inputstyle} placeholder=""

          required/>
          </div>
          </div>
              <button disabled={!isEnabled} class="btn btn-primary">SAVE</button>
</Form>
<div className={bankdiv}>
<Link to="/EmpDocs" id={skip1}>Skip </Link>
             <span className={floatRight2}>
             <Link to="/LoginInfo" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
             <button type="button" class="btn btn-light">
             <Icon icon={arrowLeft2} className={arrowIconL} size={14} />Prev </button>
               </Link>
             <Link to="/EmpDocs" className={hyperLinkEmployee}>
             <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIconR} /></button>
             </Link>
                </span>
</div>
       </div>
       <Footer/>
       </div>

     );
   }
 }
