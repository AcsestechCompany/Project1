import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import {filter} from "react-icons-kit/fa/filter";
import { search } from 'react-icons-kit/icomoon/search';
import styles from "../Layout.css";
import {inProgress,closed} from "../projects/Projects.css";
import { ic_create,ic_delete  } from 'react-icons-kit/md';
import {Header} from "../Header";
import {Footer} from "../Footer";

export class Payments extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <div className={styles.displayContainer}>
<p className={styles.pageHeading}>Payments</p>
<hr className={styles.hrStyle}/>
<span  className={styles.floatRight1}>
<form class="form-row">

	<input type="search"  placeholder="Search" />
  <div class="dropdown" style={{position:'relative',left:'-1vw'}} >
    <button class="btn  btn-outline-light" type="button" id={styles.btnstyle} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <Icon icon={filter} />
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item">Employee ID</a>
      <a class="dropdown-item">Job Title</a>
      <a class="dropdown-item">CTC</a>
      <a class="dropdown-item">Status</a>
    </div>
  </div>
</form>
</span>

<table class="table table-bordered  table-responsive-md" id={styles.exampletable}>
<thead>
      <tr className={styles.orange}>
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
          <td className={inProgress}>Active</td>
         <td><Icon icon={ic_create} size={20}/>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td>E555</td>
         <td>Arul Prem</td>
         <td >MIS Executive</td>
         <td>2,00,000</td>
         <td>05/02/2018</td>
          <td className={closed}>inActive</td>
         <td><Icon icon={ic_create} size={20}/>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td>E234</td>
         <td>Sachin</td>
         <td >Software Engineer</td>
         <td>5,00,000</td>
         <td>05/02/2018</td>
          <td className={inProgress}>Active</td>
         <td><Icon icon={ic_create} size={20}/>
              <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td>E543</td>
         <td>David</td>
         <td >Product Manager</td>
         <td>2,00,000</td>
         <td>05/02/2018</td>
          <td className={closed}>inActive</td>
         <td><Icon icon={ic_create} size={20}/>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /></td>
     </tr>
     </tbody>
     </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
