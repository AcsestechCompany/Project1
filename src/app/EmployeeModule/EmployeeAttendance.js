import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displaycontainer} from "./Employee.css";

import {DatePicker,TextField}  from 'material-ui/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import {filter} from "react-icons-kit/fa/filter";
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {inProgress,closed} from "../projects/Projects.css";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight1,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle,orange,exampletable,btnstyle} from "../Layout.css";
import { ic_create,ic_delete  } from 'react-icons-kit/md';


export class EmployeeAttendance extends React.Component{
  render(){
    return(
      <div>
      <EmployeeHeader/>
<div className={displaycontainer}>

<p className={pageHeading}>Attendance

</p>
<hr className={hrStyle}/>
<span  className={floatRight1}>
<form class="form-row">

	<input type="search"  placeholder="Search" />
  <div class="dropdown" style={{position:'relative',left:'-1vw'}} >
    <button class="btn  btn-outline-light" type="button" id={btnstyle} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <Icon icon={filter} />
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item">Present</a>
      <a class="dropdown-item">Absent</a>
      <a class="dropdown-item">Late Mark After Time</a>
      <a class="dropdown-item">Overtime</a>
    </div>
  </div>
</form>
</span>

<table class="table table-bordered  table-responsive-md" id={exampletable}>
<thead>
      <tr className={orange}>
          <th>Present</th>
          <th>Absent</th>
          <th>Late Mark After Time</th>
          <th>Overtime</th>

      </tr>
  </thead>
  <tbody>
     <tr>
         <td>21</td>
         <td>1</td>
         <td>1</td>
         <td>1</td>

     </tr>


     </tbody>
     </table>




 </div>
 <Footer/>
 </div>

    );
  }
}
