import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import { arrowRight2, arrowLeft2} from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import styles from "../Layout.css";
import styles1 from "./LayoutEmployee.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
export class ProfessionalDetails extends React.Component{
  constructor(props){
    super(props);
  this.enabletest = this.enabletest.bind(this);
  this.disabletest =this.disabletest.bind(this);
    this.state={
      enable:false,
      disable:false
    };
  }
  enabletest(){
    this.setState({
      enable:true,
      disable:false
    })
  }
  disabletest(){
    this.setState({
      disable:true,
      enable:false
    })
  }
  enablefunc(){
    if(this.state.enable){
      return <div><div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
        style={{marginTop:'0.7vw'}}/>
        <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.4vw',marginLeft:'1vw'}} id={radiocheck}>
          On Holidays
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
        <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw'}} id={radiocheck}>
        On Week Off
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
        <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.4vw',marginLeft:'1vw'}} id={radiocheck}>
         Daily
        </label>
      </div></div>;
    }
  }
  disablefunc(){
    if(this.state.disable){
      return <div></div>;
    }
  }
  render() {
    var enable = this.enablefunc();
    var disable =this.disablefunc();
    return(
      <div>
      <Header/>
       <div className={styles.displayContainer}>
<p className={styles.pageHeading}>Professional Details</p>
<hr className={styles.hrStyle}/>
<Row>
  <Col xs="10">
      <Form className={styles1.formStyle}>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>First Name</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}" required/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>Last Name</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}"  required/>
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-10 mb-3">
        <label className={styles1.labelStyle1}>Email ID</label>
        <Input type="email"  className={styles1.inputstyle} placeholder="" required />
        </div>
        </div>

        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Employee ID</label>
              <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-Z0-9]{5,25}" required />
          </div>
          <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>Designation</label>
          <Input type="select" className={styles1.inputstyle} pattern="[a-zA-Z]{5,25}" required>
          <option></option>
          <option>Manager</option>
          <option>Team Lead</option>
        </Input>
          </div>
          </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
        <label className={styles1.labelStyle1}>Department</label>
        <Input type="select" className={styles1.inputstyle} pattern="[a-zA-Z]{5,25}" required>
        <option></option>
        <option>Marketing</option>
        <option>Finance</option>
      </Input>
        </div>
        <div class="col-md-5 mb-3">
        <label className={styles1.labelStyle1}>Employment Type</label>
        <Input type="select" className={styles1.inputstyle} pattern="[a-zA-Z]{5,25}" required>
        <option></option>
        <option>Full Time</option>
        <option>Part Time</option>
      </Input>
        </div>
          </div>
          <div class="form-row">
          <div class="col-md-10 mb-3">
          <label className={styles1.labelStyle1}>Reporting Manager</label>
            <Input type="text"  className={styles1.inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}" required/>
          </div>
          </div>
          <div class="form-row">
          <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>Date Of Joining</label>
            <Input type="date"  className={styles1.inputstyle} placeholder=""  required/>
          </div>
            <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Location</label>
            <Input type="select" className={styles1.inputstyle} pattern="[a-zA-Z]{5,25}" required>
            <option></option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
          </Input>
            </div>
            </div>

    <Row className={styles.overtimePay}>
    <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Overtime Pay</p>
    <span onClick={this.enabletest.bind(this)}>
   {this.state.enable?
    <span><button type="btn btn-light" className={styles1.enableBtnactive} >Enable</button></span>:
    <span><button type="btn btn-light" className={styles1.enableBtn} >Enable</button></span>
   }
    </span>
    <span onClick={this.disabletest.bind(this)}>
   {this.state.disable?
    <span><button type="button" className={styles1.disableBtnactive}>Disable</button></span>:
    <span><button type="btn btn-light" className={styles1.disableBtn}>Disable</button></span>
   }
    </span>
 </Row>
 <div className={styles1.overtimeDiv}>
{enable}
{disable}
<Input type="submit" value="SAVE" style={{width:'20%',marginLeft:'-8vw',marginTop:'2vw'}}/>
<div className={styles.bankdiv}>

<Link to="/BankDetails" id={styles.skip1}>Skip </Link>

             <span className={styles.floatRight2}>


             <Link to="/PersonalDetails" className={styles1.hyperLinkEmployee}>
             <button type="button" class="btn btn-light">
             <Icon icon={arrowLeft2} className={styles1.arrowIconL} size={14} />Prev </button>
               </Link>
             <Link to="/BankDetails" className={styles1.hyperLinkEmployee} >
             <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={styles1.arrowIconR} /></button>
             </Link>
                </span>
                </div>
 </div>
 </Form>
          </Col>
          <Col>
          <div className={styles.floatRight} style={{fontSize:'0.9vw'}} id={styles1.slidertext}>
          <p style={{marginTop:'3vw'}}>
          <Link to="/PersonalDetails" className={styles1.hyperLinkEmployee}>Personal Details</Link></p>
          <p><Link to="/ProfessionalDetails" className={styles.orange}>Professional Details</Link></p>
          <p><Link to="/BankDetails" className={styles1.hyperLinkEmployee}>Bank Details</Link></p>
          <p><Link to="/LoginInfo" className={styles1.hyperLinkEmployee}>Login Information</Link></p>
          <p><Link to="/JobHistory" className={styles1.hyperLinkEmployee}>Job History</Link></p>
          <p><Link to="/EmpDocs" className={styles1.hyperLinkEmployee}>Employee Documents</Link></p>
          </div>
             </Col>
             </Row>
       </div>
       <Footer/>
       </div>
     );
   }
 }
