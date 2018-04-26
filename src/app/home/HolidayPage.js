import React from "react";
import {Header1} from "../Header1";
import {Footer} from "../Footer";
import {displayContainer,pageHeading,hrStyle,exampletable,orange} from "../Layout.css";

export class HolidayPage extends React.Component{
  render(){
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
      <p className={pageHeading}>List of Holidays</p>
      <hr className={hrStyle}/>
      <table class="table table-bordered  table-responsive-md" id={exampletable}>
      <thead>
      <tr className={orange}>
          <th>Holiday</th>
          <th>Date</th>
          <th>Day</th>

      </tr>
      </thead>
      <tbody>
         <tr>
             <td>Good Friday</td>
             <td>12/04/18</td>
             <td>Friday</td>

         </tr>
         <tr>
             <td>Ambedkar Jayanti</td>
             <td>14/04/18</td>
             <td>Saturday</td>

         </tr>
         <tr>
             <td>Holi</td>
             <td>14/05/18</td>
             <td>Tuesday</td>

         </tr>
         </tbody>
         </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
