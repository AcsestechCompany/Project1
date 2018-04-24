import React from "react";
import {displayContainer,pageHeading,hrStyle} from "../Layout.css";
import {
  formStyle,labelStyle1,inputstyle,inputStyle,labelStyle,buttonstyle} from "../settings/LayoutSettings.css";
import {Form,FormGroup, Label, Input,Button} from "reactstrap";
import {Header1} from "../Header1";
import {Footer} from "../Footer";
export class Profile extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
  <div className={displayContainer}>
  <p className={pageHeading}>Profile Settings</p>
  <hr className={hrStyle}/>
<Form className={formStyle}>
  <div class="form-row">
  <div class="col-md-3 mb-3">
  <label className={labelStyle1}>First Name</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  <div class="col-md-3 mb-3">
  <label className={labelStyle1}>Last Name</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  </div>
  <FormGroup>
    <Label className={labelStyle}>Designation</Label>
    <Input className={inputStyle} type="text" name="" id="" placeholder="" />
  </FormGroup>
  <div class="form-row">
  <div class="col-md-3 mb-3">
  <label className={labelStyle1}>Location</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  <div class="col-md-3 mb-3">
  <label className={labelStyle1}>Phone</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  </div>
  <FormGroup>
    <Label className={labelStyle}>Email ID</Label>
    <Input className={inputStyle} type="text" name="" id="" placeholder="" />
  </FormGroup>
  <Button className="btn btn-outline-warning btn-sm" id={buttonstyle}>
  Save</Button>
  <p style={{marginTop:'1vw',fontWeight:'bold'}}>Change Password</p>
  <div class="form-row">
  <div class="col-md-3 mb-3">
  <label className={labelStyle1}>Enter New Password</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  <div class="col-md-3 mb-3">
  <label className={labelStyle1}>Confirm Password</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  </div>
  <Button className="btn btn-outline-warning btn-sm" id={buttonstyle}>
  Save</Button>
</Form>

  </div>
  <Footer/>
  </div>
    );

  }
}
