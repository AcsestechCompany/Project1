import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,glass2,search } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle} from "../Layout.css";
import {dateStyle,labelStyle1} from "../employee/LayoutEmployee.css";
import {labelStyle,inputstyle1,formStyle,inputStyle,textAreaStyle,hyperLink} from "../settings/LayoutSettings.css";
import {inputstyle,addBtn,cancelBtn} from "../projects/Projects.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class AddClaims extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Add Claims</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
       <FormGroup>
         <Label className={labelStyle1}>Expense Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>
            <div class="form-row">
            <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Amount</label>
            <input type="text" class="form-control" id={inputstyle}/>
            </div>
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Date</label>
              <MuiThemeProvider>
        <DatePicker hintText="date of joining" underlineStyle={{display: 'none'}} className={dateStyle} />
            </MuiThemeProvider>
            </div>
            </div>
            <FormGroup>
                 <Label className={labelStyle1}>Description</Label>
                 <Input className={textAreaStyle} type="textarea" name="text" id="" />
               </FormGroup>

           <Link to="/ExpenseList"><button className="btn btn-outline-primary btn-sm" id={buttonStyle}>
           Submit</button></Link>
          </Form>
      </div>
      <Footer/>
      </div>
    );
  }
}
