import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import {arrowRight2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import styles from "../Layout.css";
import styles1 from "./LayoutEmployee.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
export class PersonalDetails extends React.Component{
  render() {
    return(
      <div>
      <Header/>
       <div className={styles.displayContainer}>
<p className={styles.pageHeading}>Personal Details</p>
<hr className={styles.hrStyle}/>
<Row>
<Col xs="10">
      <Form className={styles1.formStyle}>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>Fathers Name</label>
    <Input type="text"  className={styles1.inputstyle}
    placeholder="Fathers Name"
pattern="[a-zA-Z]{5,25}"
    required="required"
     /><br/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>DOB</label>
        <Input type="date" className={styles1.inputstyle} required/>
        </div>
        </div>
        <div class="form-row">
               <p className={styles.genderlabel}>Gender:</p>
                  <div class="col-md-4 mb-5" id={styles1.genderstyle}>
                  <Row className={styles1.radiorow}>
                  <FormGroup check>
                       <Label check className={styles1.radioinput}>
                         <Input type="radio" name="radio1" className={styles1.radiostyle}/>
                         Male
                       </Label>
                     </FormGroup>
                     <FormGroup check>
                       <Label check className={styles1.radioinput}>
                         <Input type="radio" name="radio1" className={styles1.radiostyle} />
                         Female
                       </Label>
                     </FormGroup>
                     </Row>
                     </div>
          <div class="col-md-5 mb-3" style={{marginLeft:'1vw'}} >
            <label className={styles1.labelStyle1}>Phone</label>
              <Input  type="tel" pattern="^\d{10}$"  className={styles1.inputstyle} placeholder="Eg.8794098765" required />
          </div>
          </div>
          <div class="form-group">
      <label className={styles1.labelStyle1}>Permanent Address</label>
      <Input type="textarea" className={styles1.inputstyletextarea} pattern="[a-zA-Z0-9]{5,25}" required/>
    </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Nationality</label>
    <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-z]{2,25}"  required/>
          </div>
          <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Marital Status</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}" required/>
          </div>
          </div>

        <p className={styles.pageHeading}>Emergency Contact Details</p>

          <div class="form-row">
            <div class="col-md-5 mb-3">
              <label className={styles1.labelStyle1}>Contact Person Name</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="Contact Person Name" pattern="[a-zA-Z]{5,25}" required/>
            </div>
            <div class="col-md-5 mb-3">
              <label className={styles1.labelStyle1}>Phone</label>
              <Input type="tel" pattern="^\d{10}$" className={styles1.inputstyle} placeholder="Eg.8978987898"   required/>
            </div>
            </div>
              <div class="form-row">
                <div class="col-md-5 mb-3">
                  <label className={styles1.labelStyle1}>Relationship</label>
                <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-z]{5,25}" required />
                </div>
                <div class="col-md-5 mb-3">
                  <label className={styles1.labelStyle1}>Email ID</label>
                <Input type="email"  className={styles1.inputstyle} placeholder="" required />
                </div>
                </div>
              <Input type="submit" value="SAVE" style={{width:'20%'}}/>
          </Form>
          </Col>
          <Col xs="2">  <div  style={{fontSize:'0.9vw',position:'relative',bottom:'-2.5vw'}} id={styles1.slidertext}>
            <p>
            <Link to="/PersonalDetails" className={styles.orange} >
                  Personal Details
            </Link></p>
            <p>
            <Link to="/ProfessionalDetails" className={styles1.hyperLinkEmployee}>
            Professional Details
            </Link>
            </p>
            <p><Link to="/BankDetails" className={styles1.hyperLinkEmployee}>
            Bank Details</Link></p>
            <p><Link to="/LoginInfo" className={styles1.hyperLinkEmployee}>Login Information</Link></p>
            <p><Link to="/JobHistory" className={styles1.hyperLinkEmployee}>Job History</Link></p>
            <p><Link to="/EmpDocs" className={styles1.hyperLinkEmployee}>Employee Documents</Link></p>
            </div>
          </Col>
          </Row>
          <div className={styles.bankdiv}>
          <Link to="/ProfessionalDetails"  id={styles1.skipstyle}>Skip</Link>
          <span className={styles.floatRight}>
   <Link to="/ProfessionalDetails" className={styles1.hyperLinkEmployee}>
            <button type="submit" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={styles.arrowIcon} /></button>
            </Link>
          </span>
          </div>
          <div>
          </div>
       </div>
       <Footer/>
       </div>
     );
   }
 }
