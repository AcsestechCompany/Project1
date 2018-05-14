import React from "react";
import {exampletable,orange} from "../Layout.css";
import Icon from "react-icons-kit";
import { ic_delete,ic_create  } from 'react-icons-kit/md';
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../admin/LayoutAdmin.css";
import {labelStylepopup,savebtn1,btnstyle} from "../Layout.css";
export class RequestedLeaves extends React.Component{
  render(){
    return(
      <table class="table table-bordered table-striped table-responsive-md" id={exampletable} style={{overflow:'auto'}}>
      <thead>
          <tr className={orange}>
                <th>SNo</th>
                <th>Date</th>
                <th>Leave Type</th>
                <th>Reason</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
           <tr>
               <td>1</td>
               <td>11/05/18</td>
               <td>Medical</td>
               <td>Health Issues</td>
               <td>11/05/18</td>
               <td>11/05/18</td>
               <td>Pending</td>
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
                    <Icon icon={ic_delete} style={{marginLeft:'1vw',position:'relative',top:'0.5vw'}} size={20} /> </td>
           </tr>
           </tbody>
           </table>

    );
  }
}
