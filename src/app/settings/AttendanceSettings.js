import React  from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import {labelStyle1,hyperLinkEmployee,overtimePay} from "../employee/LayoutEmployee.css";
import {displayContainer,pageHeading,hrStyle,buttonStyle} from "../Layout.css";
import {labelStyle,inputstyle,formStyle,inputStyle,textAreaStyle,hyperLink,floatRight,
  inputStyle1,radiodiv} from "./LayoutSettings.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";
export class AttendanceSettings extends React.Component {
  render() {

    return(
      <div>
      <Header1/>
             <div className={displayContainer}>
      <p className={pageHeading}>Attendance</p>
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
               <Slider style={{height: 105,float:'right'}} axis="y-reverse" defaultValue={0.35} />
               </MuiThemeProvider>
              <FormGroup>
                <Label className={labelStyle1}>Shift Name</Label>
                <Input className={inputStyle} type="text" name="" id="" placeholder="" />
              </FormGroup>
              <div class="form-row">
              <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Work Start Time</label>
             <input type="time" class="form-control" id={inputstyle} value=""/>
             </div>
             <div class="col-md-3 mb-3">
             <label className={labelStyle1}>Work End Time</label>
            <input type="time" class="form-control" id={inputstyle} value=""/>
            </div>
            </div>
              <FormGroup>
                   <Label className={labelStyle1}>Description</Label>
                   <Input className={textAreaStyle} type="textarea" name="text" id="" />
                 </FormGroup>
                 <div class="form-row">
                 <div class="col-md-3 mb-3">
                 <label className={labelStyle1}>Late Mark After Time</label>
                <input type="time" class="form-control" id={inputstyle} value=""/>
                </div>
                <div class="col-md-3 mb-3">
                 <label className={labelStyle1}>Over Time</label>
                 <select id="" class="form-control" id={inputstyle}>
                 <option >Enable</option>
                  <option >Disable</option>
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
              <Link to="/ViewShiftAttendance">
              <button className="btn btn-outline-primary " id={buttonStyle}>
              Save</button></Link>
              <Link to="/CompanyDetails">
              <button className="btn btn-outline-primary " id={buttonStyle}>
              Back</button></Link>
              <Link to="/AddLeave">
              <button className="btn btn-outline-primary " id={buttonStyle}>
              Next</button></Link>
              <Link to="/AddLeave">
              <button className="btn btn-outline-primary " id={buttonStyle} style={{border:'none'}}>
              Skip this</button></Link>
             </div>
             <Footer/>
             </div>


    );
  }
}
