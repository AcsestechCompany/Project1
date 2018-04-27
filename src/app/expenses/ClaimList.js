import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { pencil,bin,search } from 'react-icons-kit/icomoon';
import { ic_delete, ic_create  } from 'react-icons-kit/md';
import {Link} from "react-router-dom";
import {activeStyle} from "../projects/Projects.css";
import {orange,contentStyle,displayContainer,pageHeading,hrStyle,buttonStyle,floatRight1,exampletable,savebtn1,bankdiv} from "../Layout.css";
import {hyperLink} from "../settings/LayoutSettings.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";
export class ClaimList extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Claims
</p>
<hr className={hrStyle}/>
<span  className={floatRight1}>
<form>
	<input type="search"  placeholder="Search" />
</form>

</span>

<table class="table table-bordered table-striped table-responsive-md" id={exampletable}>
<thead>
    <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Expense Title</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E253</td>
         <td>David</td>
         <td></td>
         <td></td>
         <td></td>
         <td className={activeStyle}></td>
         <td>  <Link to="/AddExpenses" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
<Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td className={activeStyle}></td>

         <td>  <Link to="/AddClaims" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
<Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /></td>
     </tr>

     </tbody>
     </table>
     <div className={bankdiv} style={{marginTop:'2vw'}}>
       <Link to="/AddClaims"><button className="btn btn-outline-warning" id={savebtn1}>

       Add New Claim</button></Link>
       </div>
      </div>
      <Footer/>
      </div>
    );
  }
}
