import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField,SelectField,MenuItem,Slider,DatePicker} from 'material-ui';
import Icon from 'react-icons-kit';
import { arrowRight2, arrowLeft2,plus } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,floatRight,arrowIcon,pageHeading,hrStyle,buttonStyle} from "../Layout.css";
import {inputstyle,formStyle,inputStyle,hyperLinkEmployee,
  inputStyle1,labelStyle1,enableBtn,disableBtn,skipstyle,
  overtimeDiv,slideremp,dateStyle,overtimePay} from "./LayoutEmployee.css";
  import {timeStyle} from "../settings/LayoutSettings.css";
  import {Header1} from "../Header1";
  import {Footer} from "../Footer";
export class ProfessionalDetails extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
       <div className={displayContainer}>
<p className={pageHeading}>Professional Details</p>
<hr className={hrStyle}/>
<Row>
  <Col xs="10">
      <Form className={formStyle}>

      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>First Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Last Name</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <FormGroup>
          <Label className={labelStyle1}>Email ID</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Employee ID</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Designation</label>
          <select id="" class="form-control" id={inputstyle}>
          <option></option>
          </select>
          </div>
          </div>
        <div class="form-row">
        <div class="col-md-3 mb-3">
        <label className={labelStyle1}>Department</label>
        <select id="" class="form-control" id={inputstyle}>
        <option></option>
        </select>
        </div>
        <div class="col-md-3 mb-3">
        <label className={labelStyle1}>Employment Type</label>
        <select id="" class="form-control" id={inputstyle}>
        <option></option>
        </select>
        </div>
          </div>
         <FormGroup>
            <Label className={labelStyle1}>Reporting Mananger</Label>
            <Input className={inputStyle} type="text" name="" id="" placeholder="" />
          </FormGroup>
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Date of Joining</label>
              <MuiThemeProvider>
        <DatePicker hintText="date of joining"
 className={dateStyle}
       style={{border:'1px solid #D0D3D4',height:'2vw',position:'relative'}} />
            </MuiThemeProvider>
            </div>
            <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Location</label>
            <select id="" class="form-control" id={inputstyle}>
            <option></option>
            </select>
            </div>
            </div>
           </Form>

    <Row className={overtimePay}>
    <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Overtime Pay</p>
    <button type="btn btn-outline-primary" className={enableBtn}>Enable</button>
    <button type="btn btn-outline-primary" className={disableBtn}>Disable</button>
 </Row>
 <div className={overtimeDiv}>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
   style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw'}}>
     On Holidays
   </label>
 </div>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw',marginLeft:'1vw'}}>
   On Week Off
   </label>
 </div>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw',marginLeft:'1vw'}}>
    Daily
   </label>
 </div>
 </div>
 <Link to="/ProfessionalDetails">
 <button type="button" class="btn btn-outline-warning"  id={buttonStyle}>Save</button>
 </Link>
 <Link to="/BankDetails" className={hyperLinkEmployee} id={skipstyle}>Skip </Link>
             <span className={floatRight}>

             <Link to="/PersonalDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
               <Icon icon={arrowLeft2} className={arrowIcon} size={14} />Prev </Link>

             <Link to="/BankDetails" className={hyperLinkEmployee}>Next
               <Icon icon={arrowRight2} className={arrowIcon} size={14}/></Link>
             </span>
          </Col>
          <Col>
          <div className={floatRight} style={{fontSize:'0.9vw'}}>
          <p style={{marginTop:'3vw'}}>
          <Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
          <p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
          <p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
          <p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
          <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
          <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
          </div>
          <MuiThemeProvider>
             <Slider style={{height: 164,float:'left'}} className={slideremp} axis="y-reverse" defaultValue={0.24} />
             </MuiThemeProvider>
             </Col>
             </Row>
       </div>
       <Footer/>
       </div>
     );
   }
 }
