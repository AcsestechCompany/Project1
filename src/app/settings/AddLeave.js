import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle} from "../Layout.css";
import {overtimePay,labelStyle1,hyperLinkEmployee} from "../employee/LayoutEmployee.css";
import {labelStyle,inputstyle1,formStyle,inputStyle,inputstyle,textAreaStyle,
floatRight,radiodiv} from "./LayoutSettings.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class AddLeave extends React.Component{
  render() {

    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Leaves</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
     <div className={floatRight} style={{fontSize:'0.9vw'}}>
     <p style={{marginTop:'1.5vw'}}>
     <Link to="/CompanyDetails" className={hyperLinkEmployee}>Organization Details</Link></p>
     <p><Link to="/AttendanceSettings" className={hyperLinkEmployee}>Attendance</Link></p>
     <p><Link to="/AddLeave" className={hyperLinkEmployee}>Leave Types</Link></p>
     <p><Link to="/AddComponent" className={hyperLinkEmployee}>Salary Cmponents</Link></p>
     </div>
     <MuiThemeProvider>
        <Slider style={{height: 105,float:'right'}} axis="y-reverse" defaultValue={0.70} />
        </MuiThemeProvider>
       <FormGroup>

         <Label className={labelStyle1}>Leave Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>
       <div class="form-row">
         <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Total Count</label>
           <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

         </div>
         <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Maximum Leaves Per Month</label>
           <input type="text" class="form-control" id={inputstyle} placeholder="" />

         </div>
         </div>
       <FormGroup>
            <Label className={labelStyle1}>Description</Label>
            <Input className={textAreaStyle} type="textarea" name="text" id="" />
          </FormGroup>
           <div class="form-row">
           <div class="col-md-3 mb-3">
           <label className={labelStyle1}>In Probation</label>
           <select id="" class="form-control" id={inputstyle}>
           <option></option>
           </select>
           </div>
<div class="col-md-3 mb-3">
<label className={labelStyle1}>Half Day</label>
<select id="" class="form-control" id={inputstyle}>
<option></option>
</select>
</div>
      </div>
      <Row className={overtimePay}>
      <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Status</p>

   </Row>
   <div className={radiodiv}>
   <div class="form-check">
     <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
     style={{marginTop:'0.7vw'}}/>
     <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw'}}>
       Active
     </label>
   </div>
   <div class="form-check">
     <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
     <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw',marginLeft:'1vw'}}>
     InActive
     </label>
   </div>
   </div>
          </Form>

       <Button className="btn btn-outline-primary btn-sm" id={buttonStyle}>
       <Link to="/LeaveTypes">Save</Link></Button>
       <Button className="btn btn-outline-primary btn-sm" id={buttonStyle}>
       <Link to="/AttendanceSettings">Back</Link></Button>
       <Button className="btn btn-outline-primary btn-sm" id={buttonStyle}>
       <Link to="/AddComponent">Next</Link></Button>
       <Button className="btn btn-outline-primary btn-sm" id={buttonStyle} style={{border:'none'}}>
       <Link to="/AddComponent">Skip this</Link></Button>




      </div>
      <Footer/>
      </div>
    );
  }
}
