import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import { search,plus  } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {contentHeading} from "../projects/Projects.css";
import { ic_delete,ic_create  } from 'react-icons-kit/md';
import {displayContainer,pageHeading,hrStyle,hyperLink,
addNewDepartmentStyle,floatRight,buttonstyle,contentStyle,activeStyle} from "../Layout.css";

export class ViewShiftAttendance extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>View Shift & Attendance</p>
<hr className={hrStyle}/>

<table class="table table-bordered table-responsive-md" id={contentStyle}>
<thead>
      <tr style={{backgroundColor:'#D6D6D6'}}>
          <th>Shift Name</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Late Mark After Time</th>
          <th>Overtime Pay</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td></td>
         <td></td>
         <td style={{textAlign:'center'}}></td>
         <td></td>
         <td>Enable</td>
         <td></td>
         <td className={activeStyle}></td>
         <td>  <Icon icon={ic_create} size={20}/>
<Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     </tbody>
     </table>

       <Button className="btn btn-outline-primary btn-sm" id={addNewDepartmentStyle}>
       <Icon icon={plus} style={{color:'#FF7F27',marginRight:'0.5vw'}} size={10} />
       <Link to="/AttendanceSettings" className={hyperLink}>Add New Shift</Link></Button>




      </div>
    );
  }
}
