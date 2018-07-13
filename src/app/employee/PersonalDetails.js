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
  constructor() {
      super();
      this.state = {
        fathersname:'',
        email: '',
        dob: '',
        phoneno1: '',
        phoneno2:'',
        permanentadress:'',
        nationality:'',
        maritalstatus:'',
        contactperson:'',
        relationship:''
      };
    }
    handleFathersnameChange = (evt) => {
      this.setState({ fathersname: evt.target.value });
    }
    handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value });
    }
    handleDOBChange = (evt) => {
      this.setState({ dob: evt.target.value });
    }
    handlephoneno1Change = (evt) => {
      this.setState({ phoneno1: evt.target.value });
    }
    handlephoneno2Change = (evt) => {
      this.setState({ phoneno2: evt.target.value });
    }
    handlepermanentadressChange = (evt) => {
      this.setState({ permanentadress: evt.target.value });
    }
    handlenationalityChange = (evt) => {
      this.setState({ nationality: evt.target.value });
    }
    handlemaritalChange = (evt) => {
      this.setState({ maritalstatus: evt.target.value });
    }
    handlecontactpersonChange = (evt) => {
      this.setState({ contactperson: evt.target.value});
    }
    handlerelationshipChange = (evt) => {
      this.setState({ relationship: evt.target.value });
    }
    handleSubmit = () => {
      const { email, password } = this.state;
      alert(`Signed up with email: ${email} password: ${password}`);
    }
  render() {
    const { fathersname,email,dob,phoneno1,phoneno2,nationality,permanentadress,maritalstatus,contactperson,relationship  } = this.state;
    const isEnabled =
          email.length > 10 &&
          fathersname.length > 0 &&
          phoneno1.length > 9 &&
          phoneno2.length > 9 &&
          nationality.length > 0 &&
          permanentadress.length > 0 &&
          maritalstatus.length > 0 &&
          contactperson.length > 0 &&
          relationship.length > 0
          dob.length > 0;


    return(
      <div>
      <Header/>
       <div className={styles.displayContainer}>
<p className={styles.pageHeading}>Personal Details</p>
<hr className={styles.hrStyle}/>
<Row>
<Col xs="10">
      <Form className={styles1.formStyle}>
      <p>* All fields are mandatory</p>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>Fathers Name</label>
    <Input type="text"  className={styles1.inputstyle}
    placeholder="Fathers Name"
    pattern="[a-zA-Z]{5,25}"
    value={this.state.fathersname}
    onChange={this.handleFathersnameChange}
    required
     /><br/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>DOB</label>
        <Input type="date" className={styles1.inputstyle}
        value={this.state.dob}
        onChange={this.handleDOBChange}
        required/>
        </div>
        </div>
        <div class="form-row">
               <p className={styles.genderlabel}>Gender:</p>
                  <div class="col-md-4 mb-5" id={styles1.genderstyle}>
                  <Row className={styles1.radiorow}>
                  <FormGroup check>
                       <Label check className={styles.radioinput}>
                         <Input type="radio" name="radio1" className={styles.radiostyle}/>
                         Male
                       </Label>
                     </FormGroup>
                     <FormGroup check>
                       <Label check className={styles.radioinput}>
                         <Input type="radio" name="radio1" className={styles.radiostyle} />
                           Female
                       </Label>
                     </FormGroup>
                     </Row>
                     </div>
          <div class="col-md-5 mb-3" style={{marginLeft:'1vw'}} >
            <label className={styles1.labelStyle1}>Phone</label>
              <Input  type="tel" pattern="^\d{10}$"  className={styles1.inputstyle} placeholder="Eg.8794098765"
              value={this.state.phoneno1}
              onChange={this.handlephoneno1Change}
              required />
          </div>
          </div>
          <div class="form-group">
      <label className={styles1.labelStyle1}>Permanent Address</label>
      <Input type="textarea" className={styles1.inputstyletextarea} pattern="[a-zA-Z0-9]{5,25}"
       value={this.state.permanentadress}
       onChange={this.handlepermanentadressChange}
      required/>
    </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Nationality</label>
    <Input type="text" className={styles1.inputstyle} placeholder="" pattern="[a-zA-z]{2,25}"
       value={this.state.nationality}
       onChange={this.handlenationalityChange}
     required/>
          </div>
          <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Marital Status</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}"
          value={this.state.maritalstatus}
          onChange={this.handlemaritalChange}
          required/>
          </div>
          </div>
        <p className={styles.pageHeading}>Emergency Contact Details</p>
          <div class="form-row">
            <div class="col-md-5 mb-3">
              <label className={styles1.labelStyle1}>Contact Person Name</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="Contact Person Name" pattern="[a-zA-Z]{5,25}"
           value={this.state.contactperson}
           onChange={this.handlecontactpersonChange}
           required/>
            </div>
            <div class="col-md-5 mb-3">
              <label className={styles1.labelStyle1}>Phone</label>
              <Input type="tel" pattern="^\d{10}$" className={styles1.inputstyle} placeholder="Eg.8978987898"
              value={this.state.phoneno2}
              onChange={this.handlephoneno2Change}
                required/>
            </div>
            </div>
              <div class="form-row">
                <div class="col-md-5 mb-3">
                  <label className={styles1.labelStyle1}>Relationship</label>
                <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-z]{5,25}"
                value={this.state.relationship}
                onChange={this.handlerelationshipChange}
                required />
                </div>
                <div class="col-md-5 mb-3">
                  <label className={styles1.labelStyle1}>Email ID</label>
                <Input type="email"  className={styles1.inputstyle} placeholder=""
                value={this.state.email}
                onChange={this.handleEmailChange}
                required />

                </div>
                </div>
                    <button disabled={!isEnabled} class="btn btn-primary">SAVE</button>
          </Form>
          </Col>
          <Col xs="2">
          <div  style={{fontSize:'0.9vw',position:'relative',bottom:'-2.5vw'}} id={styles1.slidertext}>
            <p>
            <Link to="/PersonalDetails" className={styles.orange} >
                  Personal Details
            </Link>
            </p>
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
            <button type="submit" class="btn btn-light" >Next <Icon icon={arrowRight2} size={14} className={styles.arrowIcon} /></button>
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
