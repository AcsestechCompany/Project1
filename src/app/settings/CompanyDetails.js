import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {Link} from "react-router-dom";
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon';
import {displayContainer,hrStyle,pageHeading,buttonStyle,savebtn,arrowIcon,orange} from "../Layout.css";
import {dateStyle,labelStyle1,hyperLinkEmployee,inputstyletextarea,slidertext,inputstyle} from "../employee/LayoutEmployee.css";
import {formStyle,floatRight} from "./LayoutSettings.css";
  import {Header} from  "../Header";
  import {Footer} from "../Footer";

 export class CompanyDetails extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       controlledDate:null
     };
   }
   handleChange = (event,date) => {
     this.setState({
       controlledDate: date,
     });
   };
   render() {
     return(
       <div>
       <Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Organization Details</p>
<hr className={hrStyle}/>
<Row>
<Col>
      <Form className={formStyle}>

        <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Organization Name</label>
          <Input type="text"  className={inputstyle} placeholder="" pattern="[a-z]{5,25}" required />
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Website URL</label>
         <Input type="text"  className={inputstyle} placeholder="" pattern="^(http?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" required />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Financial Year Start Month</label>
      <Input type="date"  className={inputstyle} placeholder="" required />
        </div>
      <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Business Type</label>
      <Input type="select" name="select" className={inputstyle} required>
             <option></option>
             <option>1</option>
             <option>2</option>

           </Input>
      </div>
      </div>
        <div class="form-row">
        <div class="col-md-12 mb-3">
          <label className={labelStyle1}>Address</label>
        <Input type="text"  className={inputstyletextarea} placeholder="" pattern="[a-z]{5,25}" required />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
         <label className={labelStyle1}>State</label>
         <Input type="select" name="select" className={inputstyle} pattern="[a-z]{5,25}" required>
         <option></option>
          <option>Telangana</option>
          <option>Hyderabad</option>
        </Input>
       </div>
     <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Country</label>
      <Input type="select" name="select" className={inputstyle} pattern="[a-z]{5,25}" required>
           <option></option>
           <option>India</option>
           <option>England</option>
         </Input>
    </div>
  </div>
<FormGroup>
<Label className={labelStyle1}>Description</Label>
<Input type="text"  className={inputstyletextarea} placeholder="" pattern="[a-z]{5,25}" required/>
 </FormGroup>
  <div class="form-row">
    <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Phone Number</label>
    <Input type="text"  className={inputstyle} placeholder="" required/>
    </div>
    <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Email ID</label>
<Input type="email"  className={inputstyle} placeholder="" required/>
    </div>
    </div>
           </Form>
           </Col>
           <Col xs="2">
           <div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
           <p style={{marginTop:'3vw'}}>
           <Link to="/CompanyDetails" className={orange}>Organization Details</Link></p>
           <p><Link to="/AttendanceSettings" className={hyperLinkEmployee}>Attendance</Link></p>
           <p><Link to="/AddLeave" className={hyperLinkEmployee}>Leave Types</Link></p>
           <p><Link to="/AddComponent" className={hyperLinkEmployee}>Salary Cmponents</Link></p>
           </div>

              </Col>
              </Row>

        <p className={pageHeading} style={{marginTop:'2vw'}}>Registration Details</p>
        <hr className={hrStyle}/>
<Form className={formStyle}>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label className={labelStyle1}>Registration Number</label>
            <Input type="text"  className={inputstyle} placeholder="" pattern="[a-zA-Z0-9]{5,25}" required/>

            </div>
            <div class="col-md-4 mb-3">
              <label className={labelStyle1}>PAN</label>
    <Input type="text"  className={inputstyle} placeholder="" pattern="[a-zA-Z0-9]{5,25}" required />
            </div>
            </div>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label className={labelStyle1}>TAN</label>
                <Input type="text"  className={inputstyle} placeholder="" pattern="[a-zA-Z0-9]{5,25}" required />
              </div>
              <div class="col-md-4 mb-3">
                <label className={labelStyle1}>TAN Circle Number</label>
          <Input type="text"  className={inputstyle} placeholder="" pattern="[a-zA-Z0-9]{5,25}" required />
              </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label className={labelStyle1}>TDS Location</label>
      <Input type="text"  className={inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}" required />
                </div>
                <div class="col-md-4 mb-3">
                  <label className={labelStyle1}>Form 16 Signatory</label>
              <Input type="text"  className={inputstyle} placeholder="" pattern="[a-z]{5,25}" required />
                </div>
                </div>
                        <p><Link to="/AttendanceSettings"><button type="button" class="btn btn-outline-warning" id={savebtn} >
                        Save</button></Link>
                        <span className={floatRight} style={{position:'relative',top:'0.85vw'}}>
                        <Link to="/AttendanceSettings" className={hyperLinkEmployee}>
                        <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIcon} /></button>
                        </Link>
                        </span>

                        </p>

          </Form>
       </div>
       <Footer/>
       </div>
     );
   }
 }
