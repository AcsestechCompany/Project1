import React from "react";
import styles from "./Layout.css";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {Icon} from "react-icons-kit";
import { ic_edit,ic_delete } from 'react-icons-kit/md/';
const people = [
  { id: 1,
    empid:'E321',
    empname: 'Winslet',
    remark:'',
    reason:'',
    action: <div>
         <button className={styles.icon}>
         <Icon icon={ic_edit}/></button>
          <button className={styles.icon}>
        <Icon icon={ic_delete} /></button>
        </div>
  },
  { id: 2,
    empid:'E621',
    empname: 'Kate',
    remark:'',
    reason:'',
    action: <div>
         <button className={styles.icon}>
         <Icon icon={ic_edit}/></button>
          <button className={styles.icon}>
        <Icon icon={ic_delete} /></button>
        </div>
  },
  { id: 3,
    empid:'E321',
    empname: 'David',
    remark:'',
    reason:'',
    action: <div>
         <button className={styles.icon}>
         <Icon icon={ic_edit}/></button>
          <button className={styles.icon}>
        <Icon icon={ic_delete} /></button>
        </div>
  }
]
function searchingFor(term){
  return function(x){
    return x.empid.toLowerCase().includes(term.toLowerCase());
  }
}
export class Attendance extends React.Component{
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
      <div >
      <Header/>
      <div className={styles.displayContainer}>
<p className={styles.pageHeading}>Attendance List</p>
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
      <th>Employee ID </th>
      <th> Employee Name </th>
      <th> Remark </th>
      <th> Reason </th>
      <th> Actions </th>
      </tr>
{
this.state.people.filter(searchingFor(this.state.term)).map(function(person){
    return (
      <tr  key={person.id}>
      <td>{person.empid}</td>
      <td>{person.empname}</td>
      <td> {person.remark} </td>
        <td> {person.reason} </td>
              <td> {person.action} </td>
      </tr>
    )
  })
}
</table>

       </div>
       <Footer/>
       </div>
    );
  }
}
