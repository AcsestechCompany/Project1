import React from "react";
import styles from "../Layout.css";
import {hrStyle,pageHeading} from "../Layout.css";
import Icon from 'react-icons-kit';
import { ic_edit,ic_delete  } from 'react-icons-kit/md';
import {Header} from "../Header";
import {Footer} from "../Footer";
import {labelStylepopup,savebtn1,btnstyle} from "../Layout.css";
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../admin/LayoutAdmin.css";

const events = [
  { id: 1,
    eventtitle:'David',
    desc:'Completes 6 Years',
    date:'20/05/18',
    action:    <div>
         <button className={styles.icon}>
         <Icon icon={ic_edit}/></button>
          <button className={styles.icon}>
        <Icon icon={ic_delete} /></button>
        </div>
  },
  { id: 2,
    eventtitle:'Carol',
    desc:'Farewell party',
    date:'03/06/18',
    action:    <div>
         <button className={styles.icon}>
         <Icon icon={ic_edit}/></button>
          <button className={styles.icon}>
        <Icon icon={ic_delete} /></button>
        </div>
  }
]
function searchingFor(term){
  return function(x){
    return x.eventtitle.toLowerCase().includes(term.toLowerCase()) || x.date.toLowerCase().includes(term.toLowerCase()) ;
  }
}
export class EventsList extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        events: events,
        term:''
      }
      this.searchHandler = this.searchHandler.bind(this)
  }
  searchHandler(event){
    this.setState({
      term: event.target.value
    })
  }
  render(){
    return(
      <div>
      <Header/>
      <div className={styles.displayContainer}>
  <p className={styles.pageHeading}>Claim List</p>
  <hr className={styles.hrStyle}/>
      <form>
      <span className={styles.floatRight1}>
      <input type="search"
  onChange={this.searchHandler}
       />
       </span>
      </form>
      <table class="table table-bordered  table-responsive-md" id={styles.exampletable}>
      <tr className={styles.orange}>
      <th>Event Title</th>
      <th>Description</th>
      <th>Date</th>
      <th> Actions </th>
      </tr>
  {
  this.state.events.filter(searchingFor(this.state.term)).map(function(person){
    return (
      <tr  key={person.id}>
              <td>{person.eventtitle}</td>
              <td>{person.desc}</td>
              <td>{person.date}</td>
              <td> {person.action} </td>
      </tr>
    )
  })
  }
  </table>


<span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter" id={styles.modal}>
Add Event
   </span>
   <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLongTitle" className={styles.orange}>Add Event</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
         <div class="form-row">
           <div class="col-md-6 mb-3">
             <label className={labelStylepopup}>Event Name</label>
             <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
           </div>
           <div class="col-md-6 mb-3">
             <label className={labelStylepopup}>Date</label>
             <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
           </div>
           <div class="col-md-12 mb-3">
             <label className={labelStylepopup}>Description</label>
             <input type="textarea" class="form-control" id={inputstyle} placeholder="" />
           </div>
           </div>
           </div>
             <button type="button" class="btn btn-outline-warning" data-dismiss="modal" style={{marginLeft:'30vw',marginBottom:'3vw',width:'46%'}}>Save</button>
           </div>
           </div>
           </div>
      </div>
      <Footer/>
      </div>
    );

  }
}
