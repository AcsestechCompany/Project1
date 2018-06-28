import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import {displayContainer,pageHeading,hrStyle,buttonStyle} from "../Layout.css";
import {labelStyle1,formStyle,inputstyle} from "../employee/LayoutEmployee.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class Process extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Process</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
       <div class="form-row">
       <div class="col-md-5 mb-3">
       <label className={labelStyle1}>Payment Type</label>
       <Input type="select" className={inputstyle}>
                  <option>Monthly</option>
                  <option>Yearly</option>
                  <option>Quarterly</option>
                  <option>HalfYearly</option>

                </Input>
       </div>
<div class="col-md-5 mb-3">
<label className={labelStyle1}>Select Period</label>
<Input type="select" className={inputstyle}>
           <option>6 Months</option>
           <option>1 Year</option>

         </Input>
</div>
  </div>
  <div class="form-row">
  <div class="col-sm-5">
  <label className={labelStyle1}>Select Employees</label>
  <Input type="select" name="select" id="exampleSelect">
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
           </Input>
  </div>
  </div>
          </Form>
    <button className="btn btn-outline-warning" style={{marginRight:'0.5vw'}}>Process</button>
    <button className="btn btn-outline-warning">Cancel</button>
      </div>
      <Footer/>
      </div>
    );
  }
}
