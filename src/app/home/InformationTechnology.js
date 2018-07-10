import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import styles from "../Layout.css";
import { ic_create,ic_delete  } from 'react-icons-kit/md';


export class InformationTechnology extends React.Component{
  render() {
    return(
      <div style={{marginTop:'3vw'}}>
<p className={styles.pageHeading}>Information Technology<span className={styles.floatRight}><Icon icon={search}/></span></p>
<hr className={styles.hrStyle}/>

<table class="table table-bordered table-striped table-responsive-md" id={styles.contentStyle}>
<thead>
      <tr style={{color:'orange'}}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>JOb Title</th>
          <th>CTC</th>
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
          <td >Active</td>
         <td><Icon icon={ic_create} size={20}/>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /> </td>
     </tr>
     <tr>
         <td>E555</td>
         <td>Arul Prem</td>
         <td >MIS Executive</td>
         <td>2,00,000</td>
         <td>05/02/2018</td>
          <td >inActive</td>
         <td><Icon icon={ic_create} size={20}/>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /> </td>
     </tr>
     <tr>
         <td>E234</td>
         <td>Sachin</td>
         <td >Software Engineer</td>
         <td>5,00,000</td>
         <td>05/02/2018</td>
          <td >Active</td>
         <td><Icon icon={ic_create} size={20}/>
              <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /> </td>
     </tr>
     <tr>
         <td>E543</td>
         <td>David</td>
         <td >Product Manager</td>
         <td>2,00,000</td>
         <td>05/02/2018</td>
          <td >inActive</td>
         <td><Icon icon={ic_create} size={20}/>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /> </td>
     </tr>
     </tbody>
     </table>
      </div>
    );
  }
}
