import React from "react";
import styles from "./Layout.css";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";

const people = [
  { id: 1,
    empid:'E521',
    empname: 'Sarah',
    jobtitle: 'Product Manager',
    ctc:'120000',
    effectivedate:'09/05/2018',
    status:'Active',
    action: 'Edit/Delete'
  },

  { id: 2,
    empid:'E221',
    empname: 'Sarah',
    jobtitle: 'Operations Manager',
    ctc:'120000',
    effectivedate:'09/05/2018',
    status:'InActive',
    action: 'Edit/Delete'
  },
  { id: 3,
    empid:'E421',
    empname: 'Sarah',
    jobtitle: 'Product Manager',
    ctc:'120000',
    effectivedate:'09/05/2018',
    status:'Active',
    action: 'Edit/Delete'
  },

]
function searchingFor(term){
  return function(x){
    return x.empid.toLowerCase().includes(term.toLowerCase()) || x.jobtitle.toLowerCase().includes(term.toLowerCase()) ;
  }
}
export class Testing extends React.Component{
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
<p className={styles.pageHeading}>Absent Employees</p>
<hr className={styles.hrStyle}/>
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
      <th>Employee ID </th>
      <th> Employee Name </th>
      <th> Claim Title</th>
      <th> Description </th>
      <th>Amount</th>
      <th> Date</th>
      <th> Actions </th>
      </tr>
      </thead>
{
this.state.people.filter(searchingFor(this.state.term)).map(function(person){
    return (
      <tbody>
      <tr  key={person.id}>
      <td>{person.empid}</td>
      <td>{person.empname}</td>
      <td> {person.jobtitle} </td>
        <td> {person.ctc} </td>
          <td> {person.effectivedate} </td>
            <td> {person.status} </td>
              <td> {person.action} </td>
      </tr>
      </tbody>
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
