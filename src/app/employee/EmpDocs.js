import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2, plus  } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {hyperLinkEmployee,labelStyle1} from "./LayoutEmployee.css";
import {displayContainer,arrowIcon,hrStyle,pageHeading,buttonStyle} from "../Layout.css";
import {inputstylefile,formStyle,inputStyle,floatRight,enableBtn,disableBtn,
  inputstyle,}
  from "./LayoutSettings.css";
  import {Header1} from "../Header1";
  import {Footer} from "../Footer";

export class EmpDocs extends React.Component{
  render() {
    return(
<div>
<Header1/>
       <div className={displayContainer}>
<p className={pageHeading}>Employee Documents</p>
<hr className={hrStyle}/>
<Form className={formStyle}>

<div className={floatRight} style={{fontSize:'0.9vw'}}>
<p style={{marginTop:'1.5vw'}}>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
<p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
</div>
<MuiThemeProvider>
   <Slider style={{height: 164,float:'right'}} axis="y-reverse" defaultValue={1} />
   </MuiThemeProvider>
      <Row>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Document Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
        <label className={labelStyle1}></label>
        <input type="file" class="form-control" id={inputstyle} placeholder="" />
        </div>

        </Row>
        <button class="btn btn-outline-warning"  id={buttonStyle}>Submit</button>

</Form>

<div style={{marginTop:'10vw'}}>
<Link to="/JobHistory" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>
     <span className={floatRight}>
     <Link to="/JobHistory" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
       <Icon icon={arrowLeft2} className={arrowIcon} size={14}  />Previous</Link>
  </span>
          </div>
       </div>
       <Footer/>
       </div>
     );
   }
 }
