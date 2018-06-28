import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,glass2,search } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle,savebtn1} from "../Layout.css";
import {dateStyle,labelStyle1,inputstyle,inputstyletextarea} from "../employee/LayoutEmployee.css";
import {labelStyle,inputstyle1,formStyle,inputStyle,hyperLink} from "../settings/LayoutSettings.css";
import {addBtn,cancelBtn} from "../projects/Projects.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class AddClaims extends React.Component{
  constructor(){
    super();
    this.state = {value: ''};
    this.onChange = this.onChange.bind(this);
 }

 onChange(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value == '' || re.test(e.target.value)) {
       this.setState({value: e.target.value})
    }
 }
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Add Claims</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
       <div class="form-row">
       <div class="col-md-10 mb-3">
         <label className={labelStyle1}>Expense Name</label>
         <Input className={inputstyle} type="text"   onChange={this.onChange}  />
         </div>
         </div>
            <div class="form-row">
            <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Amount</label>
            <Input type="text"  className={inputstyle}/>
            </div>

            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Date</label>
              <MuiThemeProvider>
        <DatePicker hintText="date of joining"
        underlineStyle={{display: 'none'}}
        textFieldStyle={{position:'relative',bottom:'0.75vw',color:'lightgray'}}
        className={dateStyle} style={{border:'1px solid #D0D3D4',height:'2vw',width:'96%'}} />
            </MuiThemeProvider>

            </div>
            </div>
            <div class="form-row">
            <div class="col-md-12 mb-3">
                 <label className={labelStyle1}>Description</label>
                 <Input className={inputstyletextarea} type="textarea"  rows="3" name="text" />
              </div>
              </div>

           <Link to="/ClaimList"><button className="btn btn-outline-warning" >
           Submit</button></Link>
          </Form>
      </div>
      <Footer/>
      </div>
    );
  }
}
