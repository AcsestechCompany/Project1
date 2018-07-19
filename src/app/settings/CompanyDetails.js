import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon';
import {displayContainer,hrStyle,pageHeading,buttonStyle,savebtn,arrowIcon,orange} from "../Layout.css";
import {dateStyle,labelStyle1,hyperLinkEmployee,inputstyletextarea,slidertext,inputstyle} from "../employee/LayoutEmployee.css";
import {formStyle,floatRight} from "./LayoutSettings.css";
import {Header} from  "../Header";
import {Footer} from "../Footer";

 export class CompanyDetails extends React.Component{

   constructor() {
       super();
       this.state = {
         orgname:'',
         webname:'',
         financialyear:'',
         businesstype:'',
         address:'',
         state:'',
         country:'',
         description:'',
         phoneno:'',
         email:'',
         regnumber:'',
         pannumber:'',
         tannumber:'',
         tancircle:'',
         error1:false,
         showError1:false
       };
     }

     handleOrganizationnameChange = (evt) => {
       this.setState({
         orgname: evt.target.value,
         showError1:true
       });
     }
     handleWebsiteChange = (evt) => {
       this.setState({
         webname : evt.target.value

        });
     }
     handleFinacyearChange = (evt) => {
       this.setState({
         financialyear: evt.target.value,
         error1:true
        });
     }
     handleBussinessChange = (evt) => {
       this.setState({
         businesstype: evt.target.value
       });
     }
     handleAddressChange = (evt) => {
       this.setState({
         address: evt.target.value
       });
     }
     handleStateChange = (evt) => {
       this.setState({
         state: evt.target.value

        });
     }
     handleCountryChange = (evt) => {
       this.setState({
         country: evt.target.value
       });
     }
     handleDescriptionChange = (evt) => {
       this.setState({
         description: evt.target.value
        });
     }
     handlePhoneChange = (evt) => {
       this.setState({
          phoneno: evt.target.value

       });
     }
     handleEmailChange = (evt) => {
       this.setState({
         email: evt.target.value,
       });
     }
     handleRegnumberChange = (evt) => {
       this.setState({
         regnumber: evt.target.value,
       });
     }
     handlePannumberChange = (evt) => {
       this.setState({
         pannumber: evt.target.value,
       });
     }
     handleTannumberChange = (evt) => {
       this.setState({
         tannumber: evt.target.value,
       });
     }
     handleTancircleChange = (evt) => {
       this.setState({
         tancircle: evt.target.value,
       });
     }
     // handleSubmit = () => {
     //   const { email, password } = this.state;
     //   alert(`Signed up with email: ${email} password: ${password}`);
     // }
   render() {

     const {orgname,webname,financialyear,businesstype,address,state,country,description,phoneno,email,regnumber,pannumber,tannumber,tancircle  } = this.state;
    var re1 = new RegExp("^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$");
      var re2 = new RegExp("^([a-zA-Z]{2,25}(?: [a-zA-Z]+){0,2})$");
     var re3 = new RegExp("^[6-9]{1}[0-9]{5}[0-9]{4}$");
      var re4 = new RegExp("^([a-zA-Z0-9-/:.]{1,50})$");
      var re5 = new RegExp("^([0-9]{4})([0-9]{5})([0-9]{1})$");
     var re6 = new RegExp("^([A-Za-z]{5}[0-9]{4}[A-Za-z]{1})$");
      var re7 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");

    //   const orgnamencheck = re2.test(orgname);
    //   const  webcheck= re1.test(website);
    //   const addresscheck = re4.test(address);
    //   const phonecheck = re3.test(phoneno);
    //   const regnumbercheck = re5.test(regnumber);
    //   const pancheck = re6.test(pannumber);
    //   const tancheck = re6.test(tannumber);
    //   const tancirclecheck = re6.test(tancircle);


       const isEnabled =




              re2.test(orgname) &&
              re1.test(webname)
              re3.test(phoneno) &&
             re4.test(address) &&
              re5.test(regnumber) &&
              re6.test(pannumber) &&
              re6.test(tannumber)  &&
             re6.test(tancircle)  &&
              re7.test(email) &&
             description.length > 0 &&
             financialyear.length > 0;

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
          <Input type="text"  className={inputstyle} placeholder="" pattern="[a-z]{5,25}"  title="Name must be letters only" value={this.state.orgname} onChange={this.handleOrganizationnameChange} required />
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Website URL</label>
         <Input type="text"  className={inputstyle}
         pattern="^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$"
         value={this.state.webname} onChange={this.handleWebsiteChange} required />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Financial Year Start Month</label>
      <Input type="date"  className={inputstyle} placeholder="" value={this.state.financialyear} onChange={this.handleFinacyearChange} required />
        </div>
      <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Business Type</label>
      <Input type="select" name="select" className={inputstyle} value={this.state.businesstype} onChange={this.handleBussinessChange} required>
             <option></option>
             <option>Farming</option>
             <option>Information Technology</option>

           </Input>
      </div>
      </div>
        <div class="form-row">
        <div class="col-md-12 mb-3">
          <label className={labelStyle1}>Address</label>
        <Input type="text"  className={inputstyletextarea} placeholder="" pattern="[a-zA-Z0-9]{5,25}" value={this.state.address} onChange={this.handleAddressChange} required />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
         <label className={labelStyle1}>State</label>
         <Input type="select" name="select" className={inputstyle} pattern="[a-zA-z]{5,25}" value={this.state.state} onChange={this.handleStateChange} required>
         <option></option>
          <option>Telangana</option>
          <option>Hyderabad</option>
        </Input>
       </div>
     <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Country</label>
      <Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" value={this.state.country} onChange={this.handleCountryChange} required>
           <option></option>
           <option>India</option>
           <option>England</option>
         </Input>
    </div>
  </div>
<FormGroup>
<Label className={labelStyle1}>Description</Label>
<Input type="text"  className={inputstyletextarea} placeholder="" pattern="[a-zA-Z]{5,25}" value={this.state.description} onChange={this.handleDescriptionChange} required/>
 </FormGroup>
  <div class="form-row">
    <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Phone Number</label>
<Input type="tel" pattern="^\d{10}$" className={inputstyle} placeholder="Eg.8978987898" value={this.state.phoneno} onChange={this.handlePhoneChange}  required/>
    </div>
    <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Email ID</label>
<Input type="email"  className={inputstyle} placeholder="" value={this.state.email} onChange={this.handleEmailChange}required/>
    </div>
    </div>
    <p className={pageHeading} style={{marginTop:'2vw'}}>Registration Details</p>
    <hr className={hrStyle}/>
    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label className={labelStyle1}>Registration Number</label>
      <Input type="text"  className={inputstyle} placeholder="register number"

      value={this.state.regnumber}
       onChange={this.handleRegnumberChange}
        required/>
      </div>
      <div class="col-md-4 mb-3">
        <label className={labelStyle1}>PAN</label>
        <Input type="text"  className={inputstyle} placeholder=""
        pattern="^([A-Za-z]{5}\d{4}[A-Za-z]{1})$"

         value={this.state.pannumber} onChange={this.handlePannumberChange} required />
      </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label className={labelStyle1}>TAN</label>
          <Input type="text"  className={inputstyle} placeholder=""
          pattern="^([A-Za-z]{5}\d{4}[A-Za-z]{1})$"
          value={this.state.tannumber} onChange={this.handleTannumberChange} required />
        </div>
        <div class="col-md-4 mb-3">
          <label className={labelStyle1}>TAN Circle Number</label>
    <Input type="text" className={inputstyle} placeholder=""
    pattern="^([A-Za-z]{5}\d{4}[A-Za-z]{1})$"
    value={this.state.tancircle} onChange={this.handleTancircleChange}required />
        </div>
        </div>
        {isEnabled ? <Link to="/AttendanceSettings"> <button  class="btn btn-primary">SAVE</button> </Link> :
        <button class="btn btn-primary">SAVE</button>
          }
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
       </div>
       <Footer/>
       </div>
     );
   }
 }
