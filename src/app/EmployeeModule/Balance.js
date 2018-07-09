import React from "react";
import styles from "../Layout.css";
const people = [
  { id: 1,
    leavetype:'Casual',
    available:'4',
    pending:'2',
    approved:'1',
    rejected:'0',
    balance:'4'
  },
  { id: 2,
    leavetype:'Medical',
    available:'5',
    pending:'2',
    approved:'1',
    rejected:'1',
    balance:'3'
  },
  { id: 3,
    leavetype:'Sick Leave',
    available:'3',
    pending:'4',
    approved:'2',
    rejected:'0',
    balance:'3'
  },
]
function searchingFor(term){
  return function(x){
    return x.leavetype.toLowerCase().includes(term.toLowerCase()) ;
  }
}

export class Balance extends React.Component{
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
        <th>SNo </th>
        <th>LEAVE TYPE </th>
        <th>AVAILABLE </th>
        <th>PENDING </th>
        <th>APPROVED</th>
        <th>REJECTED</th>
        <th>BALANCE</th>

      </tr>
      </thead>
      {
      this.state.people.filter(searchingFor(this.state.term)).map(function(person){
      return (
        <tbody>
        <tr  key={person.id}>
        <td>{person.id}</td>
        <td>{person.leavetype}</td>
        <td> {person.available} </td>
          <td> {person.pending} </td>
            <td> {person.approved} </td>
              <td> {person.rejected} </td>
              <td> {person.balance}</td>

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
