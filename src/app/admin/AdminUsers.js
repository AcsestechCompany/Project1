import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {inProgress,closed} from "../projects/Projects.css";
import { ic_create,ic_delete } from 'react-icons-kit/md';
import {pageHeading,hrStyle,contentStyle,floatRight,hyperLink,orange,displayContainer,exampletable,buttonStyle} from "../Layout.css";
import {labelStyle2,inputstyle,modalbutton,savebtn,labelStyle1} from "./LayoutAdmin.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class AdminUsers extends React.Component{
  render() {
    return(
      <div>
      <Header1/>

      <div className={displayContainer}>
<p><span className={pageHeading}>Admin Users</span><span className={floatRight}><Icon icon={search}/></span></p>
<hr className={hrStyle}/>

<table class="table table-bordered table-responsive-md" id={exampletable}>
<thead>
      <tr className={orange}>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email ID</th>
          <th>Effective Date</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E123</td>
         <td>Enosh David</td>
         <td >Product Manager</td>
         <td>1,00,000</td>
         <td>01/01/2018</td>
          <td className={inProgress}>Active</td>
         <td>
         <span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter">
           <Icon icon={ic_create} size={20}/>
         </span>
         <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div class="modal-content">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLongTitle" className={orange}>Edit Admin User</h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
               <div class="modal-body">
               <div class="form-row">
                 <div class="col-md-6 mb-3">
                   <label className={labelStyle1}>First Name</label>
                   <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                 </div>
                 <div class="col-md-6 mb-3">
                   <label className={labelStyle1}>Last Name</label>
                   <input type="text" class="form-control" id={inputstyle} placeholder="" />
                 </div>
                 </div>
                 <div class="form-row">
                   <div class="col-md-6 mb-3">
                     <label className={labelStyle1}>Phone</label>
                     <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                   </div>
                   <div class="col-md-6 mb-3">
                     <label className={labelStyle1}>Email ID</label>
                     <input type="text" class="form-control" id={inputstyle} placeholder="" />
                   </div>
                   </div>
                   <div class="form-row">
                     <div class="col-md-6 mb-3">
                       <label className={labelStyle2}>Effective Date</label>
                       <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                     </div>
                     <div class="col-md-6 mb-3">
                       <label className={labelStyle1}>Status</label>
                       <input type="text" class="form-control" id={inputstyle} placeholder="" />
                     </div>
                     </div>
               </div>
                 <button type="button" class="btn btn-outline-warning" data-dismiss="modal" id={buttonStyle}>Save</button>

             </div>
           </div>
         </div>

             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td>E555</td>
         <td>Arul Prem</td>
         <td >MIS Executive</td>
         <td>2,00,000</td>
         <td>05/02/2018</td>
          <td className={closed}>inActive</td>
         <td><span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter">
           <Icon icon={ic_create} size={20}/>
         </span>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>


     </tbody>
     </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
