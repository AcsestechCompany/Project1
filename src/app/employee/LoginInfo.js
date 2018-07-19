import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';

import Icon from 'react-icons-kit';
import {arrowRight2,arrowLeft2,plus } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,arrowIconR,arrowIconL,savebtn1,pageHeading,hrStyle,buttonStyle,orange,floatRight2,skip1,bankdiv} from "../Layout.css";
import {hyperLinkEmployee,slideremp,labelStyle1,inputstyle,slidertext} from "./LayoutEmployee.css";
import {formStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {default as UUID} from "node-uuid";

export class LoginInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email:''
    }
  }
  handlenameChange = (evt) =>{
    this.setState({
      name:evt.target.value
    });
  }
  handleEmailChange = (evt) =>{
    this.setState({
      email:evt.target.value
    })
  }
  componentWillMount() {
     this.id = UUID.v4();
   }
  render()
    {
      var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
      var re2 = new RegExp("^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$");
      const {email,name  } = this.state;
      const isEnabled =
        re1.test(email) &&
        re2.test(name);
    return(
      <div>
      <Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Login Information</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
  <Form className={formStyle}>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Name</label>
      <Input type="text"  className={inputstyle}
      value={this.state.name}
      onChange={this.handlenameChange}
      pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
      title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"

      required />
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Email ID</label>
        <Input type="email"  className={inputstyle} placeholder=""
        value={this.state.email}
        onChange={this.handleEmailChange}

        required />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-10 mb-3">
          <label className={labelStyle1}>Auto Generated Password</label>
      <Input type="text"  className={inputstyle} value={this.id} placeholder="" disabled />
          </div>
          </div>
          {isEnabled ?
            <Link to="/JobHistory">
                <button  class="btn btn-primary">INVITE</button>
                </Link> :
                <button class="btn btn-primary">INVITE</button>
          }
          </Form>

      </Col>
      <Col>
      <div className={floatRight} style={{fontSize:'0.9vw',marginTop:'2.5vw'}} id={slidertext}>
      <p>
      <Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
      <p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
      <p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
      <p><Link to="/LoginInfo" className={orange}>Login Information</Link></p>
      <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
      <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
      </div>
         </Col>
         </Row>

       </div>
       <Footer/>
       </div>
     );
   }
 }
