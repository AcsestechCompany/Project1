import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle,savebtn,arrowIcon,orange} from "../Layout.css";
import {overtimePay,labelStyle1,hyperLinkEmployee,inputStyle,inputstyletextarea,skipstyle,inputstyle,slidertext,radiocheck} from "../employee/LayoutEmployee.css";
import {labelStyle,formStyle,
floatRight,radiodiv} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class AddLeave extends React.Component{
  render() {

    return(
      <div>
      <Header/>
      <div className={displayContainer}>

<p className={pageHeading}>Leaves</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
     <Form className={formStyle}>

       <div class="form-row">
       <div class="col-md-10 mb-3">

         <label className={labelStyle1}>Leave Name</label>
           <Input type="text"  className={inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}" required/>
         </div>
         </div>

       <div class="form-row">
         <div class="col-md-5 mb-3">
           <label className={labelStyle1}>Total Count</label>
            <Input type="text"  className={inputstyle} placeholder="" pattern="[0-9]{1,25}" required />

         </div>
         <div class="col-md-5 mb-3">
           <label className={labelStyle1}>Maximum Leaves Per Month</label>
          <Input type="text"  className={inputstyle} placeholder="" pattern="[0-9]{2,25}" required />

         </div>
         </div>
       <FormGroup>
            <Label className={labelStyle1}>Description</Label>
            <Input className={inputstyletextarea} type="textarea" name="text" pattern="[a-zA-Z0-9]{5,25}" required/>
          </FormGroup>
           <div class="form-row">
           <div class="col-md-5 mb-3">
           <label className={labelStyle1}>In Probation</label>
           <Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" required>
           <option></option>
       <option>Yes</option>
       <option>No</option>

     </Input>
           </div>
<div class="col-md-5 mb-3">
<label className={labelStyle1}>Half Day</label>
<Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" required>
       <option></option>
       <option>Approved</option>
       <option>Rejected</option>

     </Input>
</div>
      </div>
      <Row className={overtimePay}>
      <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Status</p>
   <div  style={{marginLeft:'3vw'}}>
   <div class="form-check">
     <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
     <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginLeft:'1vw'}} id={radiocheck}>
       Active
     </label>
   </div>
   <div class="form-check">
     <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
     <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginLeft:'1vw'}} id={radiocheck}>
     InActive
     </label>
   </div>
   </div>
      </Row>
          </Form>
          </Col>
          <Col>
          <div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
          <p style={{marginTop:'3vw'}}>
          <Link to="/CompanyDetails" className={hyperLinkEmployee}>Organization Details</Link></p>
          <p><Link to="/AttendanceSettings" className={hyperLinkEmployee}>Attendance</Link></p>
          <p><Link to="/AddLeave" className={orange}>Leave Types</Link></p>
          <p><Link to="/AddComponent" className={hyperLinkEmployee}>Salary Cmponents</Link></p>
          </div>
          </Col>
          </Row>
<p style={{marginTop:'3vw'}}>
       <Link to="/AddComponent">
       <button className="btn btn-outline-warning" id={savebtn}>
       Save</button></Link>
       <Link to="/AddComponent"  id={skipstyle}>
      Skip
      </Link>

      <span className={floatRight} style={{position:'relative',top:'0.85vw'}}>


      <Link to="/AttendanceSettings" className={hyperLinkEmployee}>
      <button type="button" class="btn btn-light">
      <Icon icon={arrowLeft2} className={arrowIcon} size={14} />Prev </button>
        </Link>

      <Link to="/AddComponent" className={hyperLinkEmployee} >
      <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIcon} /></button>
      </Link>
         </span>
       </p>
      </div>
      <Footer/>
      </div>
    );
  }
}
