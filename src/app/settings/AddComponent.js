import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle,savebtn,arrowIcon,orange} from "../Layout.css";
import {labelStyle,inputstyle1,formStyle,inputstyle,
dropDownInputStyle,buttonstyle,checkboxDiv,divStyle,radioStyle1,boxText,imageText,radioStyle,hyperLink,floatRight,
} from "./LayoutSettings.css";
import {labelStyle1,hyperLinkEmployee,inputStyle,inputstyletextarea} from "../employee/LayoutEmployee.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";
export class AddComponent extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Salary Components</p>
<hr className={hrStyle}/>
<Row>
<Col>
     <Form className={formStyle}>

       <FormGroup>
         <Label className={labelStyle1}>Component Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>
       <div class="form-row">
       <div class="col-md-5 mb-3">
       <label className={labelStyle1}>Calculation On</label>
       <select id="" class="form-control" id={inputstyle}>
       <option>Basic Pay </option>
       </select>
       </div>
<div class="col-md-5 mb-3">
<label className={labelStyle1}>Taxable</label>
<select id="" class="form-control" id={inputstyle}>
<option>Yes</option>
<option>No</option>
</select>
</div>
  </div>
       <FormGroup>
            <Label className={labelStyle1}>Description</Label>
            <Input id={inputstyletextarea} type="textarea" name="text" />
          </FormGroup>
           <div class="form-row">
           <div class="col-md-5 mb-3">
           <label className={labelStyle1}>Component Type</label>
           <select id="" class="form-control" id={inputstyle}>
           <option></option>
           </select>
           </div>
<div class="col-md-5 mb-3">
<label className={labelStyle1}>Amount Type</label>
<select id="" class="form-control" id={inputstyle}>
<option>Monthly</option>
<option>Weekly</option>
</select>
</div>
      </div>
          <FormGroup>
    <div class="row">
      <p class="col-form-label  col-sm-2 pt-0" style={{fontSize:'0.8vw'}}>Status</p>
      <div class="col-sm-4" style={{marginLeft:'-8vw',marginTop:'-0.4vw'}}>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
          style={{marginTop:'0.7vw'}}/>
          <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw'}}>
            Active
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
          <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw',marginLeft:'1vw'}}>
          inActive
          </label>
        </div>
        </div>

        <div class="col-sm-4" style={{marginLeft:'-10vw',marginTop:'-0.15vw'}}>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  style={{marginTop:'0.7vw'}}/>
  <label class="form-check-label" for="defaultCheck1" id={inputstyle} style={{marginTop:'0.4vw',marginLeft:'1vw'}}>
    Show in Payslip
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" style={{marginTop:'0.7vw'}}/>
  <label class="form-check-label" for="defaultCheck2" id={inputstyle} style={{marginTop:'0.4vw',marginLeft:'1vw'}}>
  Show in CTC
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" style={{marginTop:'0.7vw'}}/ >
  <label class="form-check-label" for="defaultCheck2" id={inputstyle} style={{marginTop:'0.4vw',marginLeft:'1vw'}}>
  Loss of Pay due to Employee Attendance will affect this component
  </label>
</div>
</div>
        </div>
        </FormGroup>
          </Form>
          </Col>
          <Col xs="2">
          <div className={floatRight} style={{fontSize:'0.9vw'}}>
          <p style={{marginTop:'3vw'}}>
          <Link to="/CompanyDetails" className={hyperLinkEmployee}>Organization Details</Link></p>
          <p><Link to="/AttendanceSettings" className={hyperLinkEmployee}>Attendance</Link></p>
          <p><Link to="/AddLeave" className={hyperLinkEmployee}>Leave Types</Link></p>
          <p><Link to="/AddComponent" className={orange}>Salary Cmponents</Link></p>
          </div>

             </Col>
             </Row>
       <Button className="btn btn-outline-warning" id={savebtn}>
       <Link to="/ViewSalaryComponents" className={hyperLink}>Save</Link></Button>
<span className={floatRight}>
       <Link to="/AddLeave" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
        <Icon icon={arrowLeft2} size={14} className={arrowIcon} />
       Prev
      </Link>
      </span>
      </div>
      <Footer/>
      </div>
    );
  }
}
