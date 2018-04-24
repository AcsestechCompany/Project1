import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
  import { pencil } from 'react-icons-kit/icomoon/pencil'
import { bin2 } from 'react-icons-kit/icomoon/bin2';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,iconStyle,verticalLine,contentStyle,floatRight} from "./LayoutSettings.css";
  import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
  } from 'material-ui/Table';
  import { search } from 'react-icons-kit/icomoon/search';
export class ViewDepartment extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>Department Details<span className={floatRight}><Icon icon={search} /></span></p>
<hr className={hrStyle}/>
<table class="table table-bordered table-responsive-md" id={contentStyle}>
<thead>
      <tr>
          <th>Department Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td>  <Link to="/EditRole" className={hyperLink}><Icon icon={pencil} /></Link>
         <Icon icon={bin2} style={{marginLeft:'1vw'}} /></td>
     </tr>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td><Icon icon={pencil} /> <Icon icon={bin2} style={{marginLeft:'1vw'}} /></td>
     </tr>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td><Icon icon={pencil} /> <Icon icon={bin2} style={{marginLeft:'1vw'}} /></td>
     </tr>
     </tbody>
</table>
       <Button className="btn btn-outline-primary btn-sm" id={addNewDepartmentStyle}>
       <Icon icon={plus} style={{color:'#FF7F27',marginRight:'0.5vw'}} size={10} />
       <Link to="/Departments" className={hyperLink}>Add New Department</Link></Button>
      </div>
    );
  }
}
