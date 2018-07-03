import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,arrowRight2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,floatRight,arrowIcon,hrStyle,pageHeading,orange} from "../Layout.css";
import {inputstyle,formStyle,skipstyle,inputstyletextarea,
labelStyle1,hyperLinkEmployee,slideremp,sliderline,sliderlineorange,slidertext,dateStyle,errormsg,radiocheck,genderstyle,genderlabel} from "./LayoutEmployee.css";
  import {Header} from "../Header";
  import {Footer} from "../Footer";

export class PersonalDetails extends React.Component{
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


    required
     />


        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>DOB</label>
          <MuiThemeProvider>
    <DatePicker hintText="date of Birth"
    underlineStyle={{display: 'none'}}
    textFieldStyle={{position:'relative',bottom:'0.75vw',color:'red'}}
    className={dateStyle} style={{border:'1px solid #D0D3D4',height:'2vw'}} required/>
        </MuiThemeProvider>
        </div>
        </div>

        <div class="form-row">

<p className={genderlabel}>Gender:</p>
                  <div class="col-md-4 mb-5" id={genderstyle}>
                  <Row>

        <div class="form-check">
         <input class="form-check-input" type="radio"   checked
         style={{marginTop:'0.7vw'}}/>
         <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.4vw',marginLeft:'1vw',color:'grey'}} id={radiocheck}>
          Male
         </label>
       </div>

       <div class="form-check" style={{marginLeft:'2vw'}}>
         <input class="form-check-input" type="radio"   style={{marginTop:'0.7vw'}}/>
         <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw',color:'grey',marginRight:'3vw'}} >
         Female
         </label>
       </div>
       </Row>
</div>

          <div class="col-md-5 mb-3" style={{marginLeft:'1vw'}} >
            <label className={labelStyle1}>Phone</label>
              <Input  type="tel" pattern="^\d{10}$"  className={inputstyle} placeholder="Eg.8794098765" required />
          </div>

          </div>
          <div class="form-group">
      <label className={labelStyle1}>Permanent Address</label>
      <Input type="textarea" className={inputstyletextarea} maxLength={50} required/>
    </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Nationality</label>
    <Input type="text"  className={inputstyle} placeholder="" maxLength={25} required/>

          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Marital Status</label>
          <Input type="text"  className={inputstyle} placeholder="" maxlength={9} required/>
          </div>
          </div>

        <p className={pageHeading}>Emergency Contact Details</p>

          <div class="form-row">
            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Contact Person Name</label>
          <Input type="text"  className={inputstyle} placeholder="" maxlength={25} required/>
            </div>
            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Phone</label>
              <Input type="text" pattern="^\d{10}$" className={inputstyle} placeholder="Eg.8978987898"  maxlength={10} required/>
            </div>
            </div>
              <div class="form-row">
                <div class="col-md-5 mb-3">
                  <label className={labelStyle1}>Relationship</label>
                <Input type="tel"  className={inputstyle} placeholder="" required maxlength={25} required/>
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
