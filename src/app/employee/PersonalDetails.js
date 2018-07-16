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
        relationship:'',
        errors:false,
        showErrors:false
      };
    }
    handleFathersnameChange = (evt) => {
      this.setState({
        fathersname: evt.target.value ,
        errors:true,
        showErrors:false
      });
    }
    handleEmailChange = (evt) => {
      this.setState({
        email: evt.target.value,
        showErrors:true
       });
    }
    handleDOBChange = (evt) => {
      this.setState({
        dob: evt.target.value,
        showErrors:true
       });
    }
    handlephoneno1Change = (evt) => {
      this.setState({
        phoneno1: evt.target.value,
        errors:true,
        showErrors:true
      });
    }
    handlephoneno2Change = (evt) => {
      this.setState({
        phoneno2: evt.target.value,
        errors:true,
        showErrors:true
      });
    }
    handlepermanentadressChange = (evt) => {
      this.setState({
        permanentadress: evt.target.value,
        errors:true,
        showErrors:true
       });
    }
    handlenationalityChange = (evt) => {
      this.setState({
        nationality: evt.target.value,
        errors:true,
        showErrors:true
       });
    }
    handlemaritalChange = (evt) => {
      this.setState({
        maritalstatus: evt.target.value,
        errors:true,
        showErrors:true
       });
    }
    handlecontactpersonChange = (evt) => {
      this.setState({
         contactperson: evt.target.value,
         errors:true,
         showErrors:true
      });
    }
    handlerelationshipChange = (evt) => {
      this.setState({
        relationship: evt.target.value ,
        errors:true,
        showErrors:true
      });
    }
    handleSubmit = () => {
      const { email, password } = this.state;
      alert(`Signed up with email: ${email} password: ${password}`);
    }
  render() {
  const { fathersname,email,dob,phoneno1,phoneno2,nationality,permanentadress,maritalstatus,contactperson,relationship  } = this.state;
  var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
  var re2 = new RegExp("^([a-zA-Z]{0,25}(?: [a-zA-Z]+){0,2})$");
  var re3 = new RegExp("^([0-9]{10})$");
  var re4 = new RegExp("^([a-zA-Z0-9-/:.]{0,50})$");

  const fncheck = re2.test(fathersname);
  const natinalitycheck = re2.test(nationality);
  const maritalcheck = re2.test(maritalstatus);
  const cpcheck = re2.test(contactperson);
  const relationshipcheck = re2.test(relationship);
  const addresscheck = re4.test(permanentadress);
  const phone1check = re3.test(phoneno1);
  const phone2check = re3.test(phoneno2);

    const isEnabled =
          re1.test(email) &&
          re2.test(fathersname) &&
          re3.test(phoneno1) &&
          re3.test(phoneno2) &&
          re2.test(nationality) &&
          re4.test(permanentadress) &&
          re2.test(maritalstatus) &&
          re2.test(contactperson)  &&
          re2.test(relationship)  &&
          dob.length > 0;
    return(
      <div>
      <Header/>
       <div className={styles.displayContainer}>
<p className={styles.pageHeading}>Personal Details * All fields are mandatory</p>
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
    value={this.state.fathersname}
    onChange={this.handleFathersnameChange}
    required
     />
       {this.state.errors ?
         <span> {fncheck ? '' :
          <span className={styles.errortext}> *Fathers Name cannot contain letters or special characters   & cannnot exceed 25 characters </span> } </span> : ''}
     {this.state.showErrors ? <span>{this.state.fathersname == '' ? <span className={styles.errortext}>*This field is required </span>: ''}</span> :''}
        </div>
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>DOB</label>
        <Input type="date" className={styles1.inputstyle}
        value={this.state.dob}
        onChange={this.handleDOBChange}
        required/>
         {this.state.showErrors ?
            <span>
            {this.state.dob == '' ?
              <span className={styles.errortext}>*This field is required</span>
              :
              ''
            }

            </span>
           :
           ''
         }
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
              {this.state.errors ?
                <span> {phone1check ? '' :
                 <span className={styles.errortext}> *Phone Number should be 10 digits </span> } </span> : ''}
              {this.state.showErrors ?
                 <span>
                 {this.state.phoneno1 == '' ?
                   <span className={styles.errortext}>*This field is required</span>
                   :
                   ''
                 }

                 </span>
                :
                ''
              }
          </div>
          </div>
          <div class="form-group">
      <label className={styles1.labelStyle1}>Permanent Address</label>
      <Input type="textarea" className={styles1.inputstyletextarea} pattern="[a-zA-Z0-9]{5,25}"
       value={this.state.permanentadress}
       onChange={this.handlepermanentadressChange}
      required/>
      {this.state.errors ? <span> {addresscheck ? '' :
       <span className={styles.errortext}> *Address  cannnot exceed 50 characters </span> } </span> : ''}
      {this.state.showErrors ?
         <span>
         {this.state.permanentadress == '' ?
           <span className={styles.errortext}>*This field is required</span>
           :
           ''
         }
         </span>
        :
        ''
      }
    </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Nationality</label>
    <Input type="text" className={styles1.inputstyle} placeholder="" pattern="[a-zA-z]{2,25}"
       value={this.state.nationality}
       onChange={this.handlenationalityChange}
     required/>
     {this.state.errors ? <span> {natinalitycheck ? '' :
      <span className={styles.errortext}> *Nationality cannot contain letters or special characters   & cannnot exceed 25 characters </span> } </span> : ''}
      {this.state.showErrors ?
         <span>
         {this.state.nationality == '' ?
           <span className={styles.errortext}>*This field is required</span>
           :
           ''
         }
         </span>
        :
        ''
      }
          </div>
          <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Marital Status</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}"
          value={this.state.maritalstatus}
          onChange={this.handlemaritalChange}
          required/>
          {this.state.errors ? <span> {maritalcheck ? '' :
          <span className={styles.errortext}> *Marital Status cannot contain letters or special characters & cannnot exceed 25 characters </span> } </span> : ''}
          {this.state.showErrors ?
             <span>
             {this.state.maritalstatus == '' ?
               <span className={styles.errortext}>*This field is required</span>
               :
               ''
             }
             </span>
            :
            ''
          }
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
           {this.state.errors ? <span> {cpcheck ? '' :
            <span className={styles.errortext}> *Nationality cannot contain letters or special characters   & cannnot exceed 25 characters</span> } </span> : ''}
            {this.state.showErrors ?
               <span>
               {this.state.contactperson == '' ?
                 <span className={styles.errortext}>*This field is required</span>
                 :
                 ''
               }
               </span>
              :
              ''
            }
            </div>
            <div class="col-md-5 mb-3">
              <label className={styles1.labelStyle1}>Phone</label>
              <Input type="tel" pattern="^\d{10}$" className={styles1.inputstyle} placeholder="Eg.8978987898"
              value={this.state.phoneno2}
              onChange={this.handlephoneno2Change}
                required/>
                {this.state.errors ?
                  <span>
                  {
                    phone2check ? '' :
                   <span className={styles.errortext}> *Phone Number should be 10 digits </span>
                  }
                   </span>
                   : ''}

                {this.state.showErrors ?
                   <span>
                   {this.state.phoneno2 == '' ?
                     <span className={styles.errortext}>*This field is required</span>
                     :
                     ''
                   }
                   </span>
                  :
                  ''
                }
            </div>
            </div>
              <div class="form-row">
                <div class="col-md-5 mb-3">
                  <label className={styles1.labelStyle1}>Relationship</label>
                <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-z]{5,25}"
                value={this.state.relationship}
                onChange={this.handlerelationshipChange}
                required />
                {this.state.errors ? <span> {relationshipcheck ? '' :
                <span className={styles.errortext}> *Relationship cannot contain letters or special characters  & cannnot exceed 25 characters  </span> } </span>
                : ''}
                {this.state.showErrors ?
                   <span>
                   {this.state.relationship == '' ?
                     <span className={styles.errortext}>*This field is required</span>
                     :
                     ''
                   }
                   </span>
                  :
                  ''
                }
                </div>
                <div class="col-md-5 mb-3">
                  <label className={styles1.labelStyle1}>Email ID</label>
                <Input type="email"  className={styles1.inputstyle} placeholder=""
                value={this.state.email}
                onChange={this.handleEmailChange}
                required />
                </div>
                </div>
                {isEnabled ?
                  <Link to="/ProfessionalDetails">
                        <button  class="btn btn-primary">SAVE</button>
                        </Link>
                  :
 <button class="btn btn-light" id={styles1.savebtnstyle} disabled>SAVE</button>
                      }
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
