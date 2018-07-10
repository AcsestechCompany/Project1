import React from "react";
import styles from "./Layout.css";
import {Header} from "./Header";
import {Footer} from "./Footer";

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
export class Test extends React.Component{
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
<p className={styles.pageHeading}>Leave List</p>
<hr className={styles.hrStyle}/>
      <form>
      <span className={styles.floatRight1}>
      <input type="search"
onChange={this.searchHandler}
       />
       </span>
      </form>
          <table class="table" id={styles.example1}>
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
{
this.state.people.filter(searchingFor(this.state.term)).map(function(person){
    return (
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
