import React from "react";
import {exampletable,orange} from "../Layout.css";
import Icon from "react-icons-kit";
import { ic_delete,ic_create  } from 'react-icons-kit/md';
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../admin/LayoutAdmin.css";
import {labelStylepopup,savebtn1,btnstyle,example1} from "../Layout.css";
import {divider} from "./Employee.css";
export class RequestedLeaves extends React.Component{
  render(){
    return(
      <table class="table" id={example1}>
      <thead>
      <tr>
        <th>EMP ID </th>
        <th>EMP NAME </th>
        <th>LEAVE TYPE </th>
        <th>START DATE </th>
        <th>END </th>
        <th>DURATION </th>
        <th>DESCRIPTION </th>
        <th>STATUS </th>
        <th>ACTIONS </th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>E086</td>
          <td>Enosh David</td>
          <td>Casual</td>
          <td>01/01/01</td>
          <td>01/01/01</td>
          <td>2</td>
          <td>Leave of Absence which is ea...</td>
          <td style={{color:'orange'}}>PENDING</td>
          <td></td>
        </tr>
        <tr>
          <td>E086</td>
          <td>Enosh David</td>
          <td>Casual</td>
          <td>01/01/01</td>
          <td>01/01/01</td>
          <td>2</td>
          <td>Leave of Absence which is ea...</td>
          <td style={{color:'lime'}}>APPROVED</td>
          <td></td>
        </tr>
        <tr>
          <td>E086</td>
          <td>Enosh David</td>
          <td>Casual</td>
          <td>01/01/01</td>
          <td>01/01/01</td>
          <td>2</td>
          <td>Leave of Absence which is ea...</td>
          <td style={{color:'lime'}}>APPROVED</td>
          <td></td>
        </tr>
        <tr >
          <td>E086</td>
          <td>Enosh David</td>
          <td>Casual</td>
          <td>01/01/01</td>
          <td>01/01/01</td>
          <td>2</td>
          <td>Leave of Absence which is ea...</td>
          <td style={{color:'red'}}>PENDING</td>
          <td></td>
        </tr>


      </tbody>

      </table>

    );
  }
}
