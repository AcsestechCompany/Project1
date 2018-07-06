import React from "react";
import styles from "../Layout.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Link} from "react-router-dom";
import {Icon} from "react-icons-kit";
import {  eye } from 'react-icons-kit/icomoon/';
import { ic_mail,ic_delete } from 'react-icons-kit/md/';

const people = [
  { id: 1,
    empid:'E321',
    empname: 'Winslet',
   jobtitle:'Product',
   panno:'',
   ctc:'',
   earnings:'',
   deductions:'',
   netsalary:'',
   ban:''

  },
  { id: 2,
    empid:'E421',
    empname: 'Winslet',
   jobtitle:'Product',
   panno:'',
   ctc:'',
   earnings:'',
   deductions:'',
   netsalary:'',
   ban:''

  },
  { id: 3,
    empid:'E621',
    empname: 'Winslet',
   jobtitle:'Product',
   panno:'',
   ctc:'',
   earnings:'',
   deductions:'',
   netsalary:'',
   ban:''
  },
]
function searchingFor(term){
  return function(x){
    return x.empid.toLowerCase().includes(term.toLowerCase());
  }
}
export class Statement extends React.Component{
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
<p className={styles.pageHeading}>Statement</p>
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
      <th> Claim Title</th>
      <th> Description </th>
      <th>Amount</th>
      <th> Date</th>
      <th> Actions </th>
      </tr>
{
this.state.people.filter(searchingFor(this.state.term)).map(function(person){
    return (
      <tr  key={person.id}>
      <td>{person.empid}</td>
      <td>{person.empname}</td>
      <td> {person.claimtitle} </td>
        <td> {person.description} </td>
          <td> {person.amount} </td>
            <td> {person.date} </td>
            <td><Icon icon={ic_mail}/>
             <Icon icon={ic_delete}/>
            <Icon icon={eye} /></td>
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
