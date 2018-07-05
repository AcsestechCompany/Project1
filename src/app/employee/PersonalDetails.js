import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,arrowRight2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,floatRight,arrowIcon,hrStyle,pageHeading,orange,radiostyle,radioinput,radiorow} from "../Layout.css";
import {inputstyle,formStyle,skipstyle,inputstyletextarea,inputstylename,inputstyle1,
labelStyle1,hyperLinkEmployee,slideremp,sliderline,sliderlineorange,slidertext,dateStyle,errormsg,radiocheck,genderstyle,genderlabel} from "./LayoutEmployee.css";
  import {Header} from "../Header";
  import {Footer} from "../Footer";

export class PersonalDetails extends React.Component{
  handleClick(){

  }
  render() {

    return(
      <div>
      <Header/>

       <div className={displayContainer}>
<p className={pageHeading}>Personal Details</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
      <Form className={formStyle}>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Fathers Name</label>
    <Input type="text"  className={inputstyle}
    placeholder="Fathers Name"
pattern="[a-z]{5,25}"
    required="required"
     /><br/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>DOB</label>
          <MuiThemeProvider>
    <DatePicker hintText="date of Birth"
    underlineStyle={{display: 'none'}}
    textFieldStyle={{position:'relative',bottom:'0.5vw'}}
    className={dateStyle}  required/>
        </MuiThemeProvider>
        </div>
        </div>
        <div class="form-row">
<p className={genderlabel}>Gender:</p>
                  <div class="col-md-4 mb-5" id={genderstyle}>
                  <Row className={radiorow}>
                  <FormGroup check>
                       <Label check className={radioinput}>
                         <Input type="radio" name="radio1" className={radiostyle}/>
                         Male
                       </Label>
                     </FormGroup>
                     <FormGroup check>
                       <Label check className={radioinput}>
                         <Input type="radio" name="radio1" className={radiostyle} />
                         Female
                       </Label>
                     </FormGroup>
                     </Row>
                     </div>
          <div class="col-md-5 mb-3" style={{marginLeft:'1vw'}} >
            <label className={labelStyle1}>Phone</label>
              <Input  type="tel" pattern="^\d{10}$"  className={inputstyle} placeholder="Eg.8794098765" required />
          </div>
          </div>
          <div class="form-group">
      <label className={labelStyle1}>Permanent Address</label>
      <Input type="textarea" className={inputstyletextarea} pattern="[a-z]{3,25}" required/>
    </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Nationality</label>
    <Input type="text"  className={inputstyle} placeholder="" pattern="[a-z]{2,25}"  required/>
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Marital Status</label>
          <Input type="text"  className={inputstyle} placeholder="" pattern="[a-z]{5,25}" required/>
          </div>
          </div>

        <p className={pageHeading}>Emergency Contact Details</p>

          <div class="form-row">
            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Contact Person Name</label>
          <Input type="text"  className={inputstylename} placeholder="Contact Person Name" pattern="[a-z]{5,25}" required/>
            </div>
            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Phone</label>
              <Input type="text" pattern="^\d{10}$" className={inputstyle} placeholder="Eg.8978987898"  maxlength={10} required/>
            </div>
            </div>
              <div class="form-row">
                <div class="col-md-5 mb-3">
                  <label className={labelStyle1}>Relationship</label>
                <Input type="text"  className={inputstylename} placeholder="" pattern="[a-z]{5,25}" required />
                </div>
                <div class="col-md-5 mb-3">
                  <label className={labelStyle1}>Email ID</label>
                <Input type="email"  className={inputstyle} placeholder="" required />
                </div>
                </div>
              <Input type="submit" value="SAVE" style={{width:'20%'}}/>
          </Form>
          </Col>
          <Col xs="2">  <div  style={{fontSize:'0.9vw',position:'relative',bottom:'-2.5vw'}} id={slidertext}>
            <p>
            <Link to="/PersonalDetails" className={orange} >
                  Personal Details
            </Link></p>
            <p>
            <Link to="/ProfessionalDetails" className={hyperLinkEmployee}>
            Professional Details
            </Link>
            </p>
            <p><Link to="/BankDetails" className={hyperLinkEmployee}>
            Bank Details</Link></p>
            <p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
            <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
            <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
            </div>
          </Col>
          </Row>
          <Link to="/ProfessionalDetails"  id={skipstyle}>Skip</Link>
          <span className={floatRight}>
   <Link to="/ProfessionalDetails" className={hyperLinkEmployee}>
            <button type="submit" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIcon} /></button>
            </Link>
          </span>
          <div>
          </div>
       </div>
       <Footer/>
       </div>
     );
   }
 }
