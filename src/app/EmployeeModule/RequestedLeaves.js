import React from "react";
import {exampletable,orange} from "../Layout.css";
import Icon from "react-icons-kit";
import { ic_delete,ic_create  } from 'react-icons-kit/md';
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../admin/LayoutAdmin.css";
import styles from "../Layout.css";
import {divider} from "./Employee.css";
const people = [
  { id: 1,
    empid:'E321',
    empname: 'Sarah',
    leavetype:'Casual',
    startdate:'09/08/2018',
    enddate:'10/08/2018',
    duartion:'2 Days',
    description:'',
    status:'Pending',
    action: 'Edit/Delete'
  },
  { id: 2,
    empid:'E621',
    empname: 'Kate',
    leavetype:'Casual',
    startdate:'09/08/2018',
    enddate:'10/08/2018',
    duartion:'2 Days',
    description:'',
    status:'Approved',
    action: 'Edit/Delete'
  },
  { id: 3,
    empid:'E921',
    empname: 'Jennifer',
    leavetype:'Medical',
    startdate:'09/08/2018',
    enddate:'10/08/2018',
    duartion:'2 Days',
    description:'',
    status:'Rejected',
    action: 'Edit/Delete'
  }
]
function searchingFor(term){
  return function(x){
    return x.empid.toLowerCase().includes(term.toLowerCase()) || x.status.toLowerCase().includes(term.toLowerCase()) ;
  }
}
export class RequestedLeaves extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        people: people,
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
      <form>
      <span className={styles.floatRight1}>
      <input type="search"
onChange={this.searchHandler}
       />
       </span>
      </form>
      <table class="table" id={styles.example1}>
      <thead>
  <tr>
  <th>EMP ID </th>
  <th>EMP NAME </th>
  <th>LEAVE TYPE </th>
  <th>START DATE </th>
  <th>END DATE </th>
  <th>DURATION </th>
  <th>DESCRIPTION </th>
  <th>STATUS </th>
  <th>ACTIONS </th>
  </tr>
  </thead>
{
this.state.people.filter(searchingFor(this.state.term)).map(function(person){
return (
  <tbody>
  <tr  key={person.id}>
  <td>{person.empid}</td>
  <td>{person.empname}</td>
  <td> {person.leavetype} </td>
    <td> {person.startdate} </td>
      <td> {person.enddate} </td>
        <td> {person.duration} </td>
        <td> {person.description} </td>
        <td> {person.status} </td>
          <td> {person.action} </td>
  </tr>
  </tbody>
)
})
}
</table>
</div>

    );
  }
}
