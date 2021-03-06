import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';

import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2, plus  } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {hyperLinkEmployee,labelStyle1,inputstyle,slidertext} from "./LayoutEmployee.css";
import {displayContainer,arrowIconR,arrowIconL,skip1,savebtn1,floatRight2,hrStyle,pageHeading,orange,bankdiv,floatRight} from "../Layout.css";
import {inputstylefile,formStyle,enableBtn,disableBtn} from "./LayoutSettings.css";
  import {Header} from "../Header";
  import {Footer} from "../Footer";
  import styles from "./LayoutEmployee.css";

export class EmpDocs extends React.Component{
  render() {
    return(
<div>
<Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Employee Documents</p>
<hr className={hrStyle}/>
<Form className={formStyle}>
<div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
<p style={{marginTop:'1.5vw'}}>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
<p><Link to="/EmpDocs" className={orange}>Employee Documents</Link></p>
</div>
      <Row>
        <div class="col-md-3 mb-3">
        <p className={styles.file}>
        <input type="file" className={styles.file} />
      </p>
        </div>
        </Row>
</Form>
<Link to="/ViewEmployee">
<button type="button" class="btn btn-outline-warning"  id={savebtn1} style={{marginLeft:'1vw'}}>Submit</button>
</Link>


       </div>
       <Footer/>
       </div>
     );
   }
 }
