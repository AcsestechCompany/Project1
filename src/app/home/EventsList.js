import React from "react";
import {displayContainer,orange,exampletable,floatRight} from "../Layout.css";
import {hrStyle,pageHeading,searchfilter} from "../Layout.css";
import {inputstyle1} from "./CardStyling.css";
import Icon from 'react-icons-kit';

  import { filter,search  } from 'react-icons-kit/fa';
import { ic_create,ic_delete  } from 'react-icons-kit/md';
import {Header} from "../Header";
import {Footer} from "../Footer";

export class EventsList extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <div className={displayContainer}>

      <p className={pageHeading}>Events
  </p>
      <hr className={hrStyle}/>
      <table class="table table-bordered table-responsive-md" id={exampletable}>
      <thead className={orange}>
      <tr>
      <th>Event Name</th>
      <th>Description</th>
      <th>Date</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>David</td>
      <td> Completes 6 years</td>
      <td>09/04/2018</td>
      <td><Icon icon={ic_create} size={20}/>
          <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={18} /> </td>
      </tr>
      <tr>
      <td>Carol</td>
      <td>Farewell Party</td>
      <td>09/04/2018</td>
      <td><Icon icon={ic_create} size={20}/>
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
