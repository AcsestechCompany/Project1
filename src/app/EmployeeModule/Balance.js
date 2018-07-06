import React from "react";
import {exampletable,orange,example1} from "../Layout.css";
import {divider} from "./Employee.css";

export class Balance extends React.Component{
  render(){
    return(
      <div>
      <table class="table" id={example1}>
      <thead>
      <tr>
        <th>SNo </th>
        <th>LEAVE TYPE </th>
        <th>AVAILABLE </th>
        <th>PENDING </th>
        <th>APPROVED</th>
        <th>REJECTED</th>
        <th>BALANCE</th>

      </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Casual</td>
          <td>11</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>12</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Medical</td>
          <td>5</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>5</td>
        </tr>





      </tbody>

      </table>








      </div>


    );
  }
}
