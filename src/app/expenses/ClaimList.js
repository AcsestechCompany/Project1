import React from "react";
import styles from "../Layout.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Link} from "react-router-dom";

const people = [
  { id: 1,
    empid:'E321',
    empname: 'Sarah',
    claimtitle: 'Product Manager',
    description:'some text',
    amount:500,
    date:'09/05/2018',
    action: 'Edit/Delete'
  },
  { id: 2,
    empid:'E768',
    empname: 'Kate',
    claimtitle: 'Software Engineer',
    description:'some text',
    amount:500,
    date:'09/05/2018',
    action: 'Edit/Delete'
  },
  { id: 3,
    empid:'E456',
    empname: 'Jim',
    claimtitle: 'Operation Manager',
    description:'some text',
    amount:500,
    date:'09/05/2018',
    action: 'Edit/Delete'
  }

]
function searchingFor(term){
  return function(x){
    return x.empid.toLowerCase().includes(term.toLowerCase()) || x.claimtitle.toLowerCase().includes(term.toLowerCase()) ;
  }
}
export class ClaimList extends React.Component{
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
              <td> {person.action} </td>
      </tr>
    )
  })
}
</table>
<div className={styles.bankdiv} style={{marginTop:'7vw',marginLeft:'-0.3vw'}}>
  <Link to="/AddClaims"><button className="btn btn-outline-warning">
  Add New Claim</button></Link>
  </div>
       </div>
       <Footer/>
       </div>
    );
  }
}
