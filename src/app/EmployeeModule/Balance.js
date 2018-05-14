import React from "react";
import {exampletable,orange} from "../Layout.css";

export class Balance extends React.Component{
  render(){
    return(
      <div>
      <table class="table table-bordered table-striped table-responsive-md" id={exampletable} style={{overflow:'auto'}}>
      <thead>
          <tr className={orange}>
                <th>SNo</th>
                <th>Leave Type</th>
                <th>Available</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Rejected</th>
                <th>Balance</th>

            </tr>
        </thead>
        <tbody>
           <tr>
               <td>1</td>
               <td>Casual</td>
               <td>11</td>
               <td>1</td>
               <td></td>
               <td></td>
               <td>12</td>

           </tr>
           <tr>
               <td>2</td>
               <td>Medical</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>

           </tr>
           <tr>
               <td>3</td>
               <td>Paid Leaves</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>

           </tr>
           </tbody>
           </table>




      </div>


    );
  }
}
