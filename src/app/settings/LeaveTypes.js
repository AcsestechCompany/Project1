import React from "react";
import {render} from "react-dom";
import { Button, Label, Input, Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import { ic_delete,ic_create  } from 'react-icons-kit/md';
import { plus,search} from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,exampletable} from "../Layout.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {hyperLink,tableDiv,labelStyle1,addNewDepartmentStyle,divStyle,
contentStyle,floatRight} from "./LayoutSettings.css";

export class LeaveTypes extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Leaves<span className={floatRight}><Icon icon={search} /></span></p>
<hr className={hrStyle}/>
<table class="table table-bordered table-responsive-md" id={exampletable}>
<thead>
      <tr>
          <th>Leave Name</th>
          <th>Total Count</th>
          <th>Monthly Limit</th>
          <th>Probation Period</th>
          <th>Half Day</th>
          <th>Unused Leaves</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td>  <Link to="/EditRole" className={hyperLink}><Icon icon={ic_create} /></Link>
         <Icon icon={ic_delete} style={{marginLeft:'1vw'}} /></td>
     </tr>
     </tbody>
</table>
       <Button className="btn btn-outline-primary btn-sm" id={addNewDepartmentStyle}>
       <Icon icon={plus} style={{color:'#FF7F27',marginRight:'0.5vw'}} size={10} />
       <Link to="/AddLeave" className={hyperLink}>Add New Leave</Link></Button>
      </div>
      <Footer/>
      </div>
    );
  }
}
