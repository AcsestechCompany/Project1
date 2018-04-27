import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { ic_mail } from 'react-icons-kit/md/ic_mail';
import { plus } from 'react-icons-kit/icomoon/plus';
import { bin } from 'react-icons-kit/icomoon/bin';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {inProgress,closed} from "../projects/Projects.css";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight1,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle,orange,exampletable} from "../Layout.css";
import { bin2 } from 'react-icons-kit/icomoon/bin2';
import { glass2 } from 'react-icons-kit/icomoon/glass2';
import { ic_delete } from 'react-icons-kit/md/ic_delete';
import { eye } from 'react-icons-kit/icomoon/eye';
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class Statement extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Statement
</p>
<hr className={hrStyle}/>
<span  className={floatRight1}>
<form >
	<input type="search"  placeholder="Search" />
</form>

</span>

<table class="table table-bordered table-striped table-responsive-md" id={exampletable}>
<thead>
      <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Job Title</th>
          <th>PAN Number</th>
          <th>CTC</th>
          <th>Earnings</th>
          <th>Deductions</th>
          <th>Net salary</th>
          <th>Bank Account Number</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E123</td>
         <td>Enosh David</td>
         <td >Product Manager</td>
         <td>AWKPD86348</td>
         <td>1,00,000</td>
         <td>67585</td>
         <td>7585</td>
         <td>60000</td>
         <td>6574874312</td>
         <td><Icon icon={ic_mail}/>
          <Icon icon={ic_delete}/>
         <Icon icon={eye} /></td>
     </tr>
     <tr>
         <td>E321</td>
         <td>Carol</td>
         <td>Reporting Manager</td>
         <td>AWHPD86596</td>
         <td>1,00,000</td>
         <td>77585</td>
         <td>7585</td>
         <td>70000</td>
         <td>5474877698</td>
         <td><Icon icon={ic_mail}/>
          <Icon icon={ic_delete}/>
         <Icon icon={eye} /></td>
     </tr>
     </tbody>
     </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
