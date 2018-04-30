import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import { bin,search  } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import { ic_delete,ic_create  } from 'react-icons-kit/md';
import {displayContainer,pageHeading,hrStyle,activeStyle,orange,floatRight1,exampletable,buttonStyle} from "../Layout.css";
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../admin/LayoutAdmin.css";
import {labelStylepopup,savebtn1} from "../Layout.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class LeaveList extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Leave List
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
          <th>Leave Name</th>
          <th>Leave Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E345</td>
         <td></td>
         <td></td>
          <td></td>
         <td ></td>
         <td></td>
         <td></td>
          <td></td>
          <td>
          <span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter">
            <Icon icon={ic_create} size={20}/>
          </span>
          <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle" className={orange}>Edit Leave</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label className={labelStylepopup}>Employee Name</label>
                    <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label className={labelStylepopup}>Employee ID</label>
                    <input type="text" class="form-control" id={inputstyle} placeholder="" />
                  </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label className={labelStylepopup}>Leave Name</label>
                      <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label className={labelStylepopup}>Leave Type</label>
                      <input type="text" class="form-control" id={inputstyle} placeholder="" />
                    </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-6 mb-3">
                        <label className={labelStylepopup}>Start Date</label>
                        <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label className={labelStylepopup}>End Date</label>
                        <input type="text" class="form-control" id={inputstyle} placeholder="" />
                      </div>
                      </div>
                      <div class="form-row">
                      <div class="col-md-6 mb-3">
                        <label className={labelStylepopup}>Reason</label>
                        <input type="text" class="form-control" id={inputstyle} placeholder="" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label className={labelStylepopup}>Status</label>
                        <select class="form-control" id={inputstyle}>
                        <option>Approved</option>
                        <option>Pending</option>
                        <option>Rejected</option>
                        </select>
                      </div>
                    </div>
                </div>
                  <button type="button" class="btn btn-outline-warning" data-dismiss="modal" style={{marginLeft:'30vw',marginBottom:'3vw',width:'46%'}}>Save</button>

              </div>
            </div>
          </div>

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
