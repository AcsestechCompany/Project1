
import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,pencil,bin,search } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,activeStyle,orange,floatRight1,exampletable} from "./Layout.css";
import { ic_create ,ic_delete } from 'react-icons-kit/md';
import {Header1} from "./Header1";
import {Footer} from "./Footer";
export class Attendance extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Attendance
<span  className={floatRight1}>
<form >
	<input type="search"  placeholder="Search" />
</form>

</span>
</p>
<hr className={hrStyle}/>

<table class="table table-bordered  table-responsive-md" id={exampletable}>
<thead>
      <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Remark</th>
          <th>Reason for Absence</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E765</td>

         <td style={{textAlign:'center'}}></td>
         <td></td>
         <td></td>
         <td><Icon icon={ic_create} size={20}/>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} />  </td>
     </tr>
     </tbody>
     </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
