import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {Link} from "react-router-dom";
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import {displayContainer,hrStyle,pageHeading} from "../Layout.css";
import {dateStyle} from "../employee/LayoutEmployee.css";
import {inputstyle,formStyle,hyperLink,floatRight,
  labelStyle1,dropDownInputStyle,divStyle,boxText,imageText,imageInput,iconStyle} from "./LayoutSettings.css";
  import {Header} from  "../Header";
  import {Footer} from "../Footer";

 export class CompanyDetails extends React.Component{
   render() {
     return(
       <div>
       <Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Organization Details</p>
<hr className={hrStyle}/>
      <Form className={formStyle}>
      <div className={floatRight} style={{fontSize:'0.9vw'}}>
      <p style={{marginTop:'1.5vw'}}>
      <Link to="/CompanyDetails" className={hyperLink}>Organization Details</Link></p>
      <p><Link to="/AttendanceSettings" className={hyperLink}>Attendance</Link></p>
      <p><Link to="AddLeave" className={hyperLink}>Leave Types</Link></p>
      <p><Link to="/AddComponent" className={hyperLink}>Salary Cmponents</Link></p>
      </div>
      <MuiThemeProvider>
         <Slider style={{height: 115,float:'right'}} axis="y-reverse" defaultValue={0.10} />
         </MuiThemeProvider>
        <FormGroup>
          <Label className={labelStyle}>Organization Name</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label className={labelStyle}>Website URL</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
        <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Financial Year Start Month</label>
          <MuiThemeProvider>
    <DatePicker hintText="date of joining" underlineStyle={{display: 'none'}} className={dateStyle} />
        </MuiThemeProvider>
        </div>
      <div class="col-md-3 mb-3">
      <label className={labelStyle1}>Business Type</label>
      <select id="" class="form-control" id={inputstyle}>
      <option></option>
      </select>
      </div>
      </div>
        <FormGroup>
          <Label className={labelStyle}>Address</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
        <div class="form-row">
        <div class="col-md-3 mb-3">
         <label className={labelStyle1}>State</label>
         <select id="" class="form-control" id={inputstyle}>
         <option></option>
         </select>
       </div>
     <div class="col-md-3 mb-3">
      <label className={labelStyle1}>Country</label>
      <select id="" class="form-control" id={inputstyle}>
      <option></option>
     </select>
    </div>
  </div>
<FormGroup>
<Label className={labelStyle}>Description</Label>
<Input className={textAreaStyle} type="textarea" name="text" id="" style={{width:'50%'}}/>
 </FormGroup>
  <div class="form-row">
    <div class="col-md-3 mb-3">
      <label className={labelStyle1}>Phone Number</label>
      <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
    </div>
    <div class="col-md-3 mb-3">
      <label className={labelStyle1}>Email ID</label>
      <input type="text" class="form-control" id={inputstyle} placeholder="" />
    </div>
    </div>
           </Form>
        <p className={pageHeading} style={{marginTop:'2vw'}}>Registration Details</p>
        <hr className={hrStyle}/>
<Form className={formStyle}>
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Registration Number</label>
              <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

            </div>
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>PAN</label>
              <input type="text" class="form-control" id={inputstyle} placeholder="" />
            </div>
            </div>
            <div class="form-row">
              <div class="col-md-3 mb-3">
                <label className={labelStyle1}>TAN</label>
                <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
              </div>
              <div class="col-md-3 mb-3">
                <label className={labelStyle1}>TAN Circle Number</label>
                <input type="text" class="form-control" id={inputstyle} placeholder="" />
              </div>
              </div>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label className={labelStyle1}>TDS Location</label>
                  <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                </div>
                <div class="col-md-3 mb-3">
                  <label className={labelStyle1}>Form 16 Signatory</label>
                  <input type="text" class="form-control" id={inputstyle} placeholder="" />
                </div>
                </div>
                        <button type="button" class="btn btn-outline-warning waves-effect" >
                        <Link to="/AttendanceSettings" id={hyperLink}>Save</Link></button>
          </Form>
       </div>
       <Footer/>
       </div>
     );
   }
 }
