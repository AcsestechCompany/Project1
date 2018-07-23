import React from "react";
import styles from "../Layout.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import { ic_edit,ic_delete } from 'react-icons-kit/md/';

const people = [
  { id: 1,
    empid:'E321',
    empname: 'Sarah',
    jobtitle: 'Product Manager',
    ctc:100000,
    effectivedate:'09/05/2018',
    status:'Active',
    action:     action:    <div>
             <button className={styles.icon}>
             <Icon icon={ic_edit}/></button>
              <button className={styles.icon}>
            <Icon icon={ic_delete} /></button>
            </div>
  },
  { id: 2,
    empid:'E123',
    empname: 'David',
    jobtitle: 'Software Engineer',
    ctc:100000,
    effectivedate:'09/05/2018',
    status:'Active',
    action:     action:    <div>
             <button className={styles.icon}>
             <Icon icon={ic_edit}/></button>
              <button className={styles.icon}>
            <Icon icon={ic_delete} /></button>
            </div>
  },
  { id: 3,
    empid:'E123',
    empname: 'Kate',
    jobtitle: 'MIS Executive',
    ctc:100000,
    effectivedate:'09/05/2018',
    status:'Active',
    action:     action:    <div>
             <button className={styles.icon}>
             <Icon icon={ic_edit}/></button>
              <button className={styles.icon}>
            <Icon icon={ic_delete} /></button>
            </div>
  }

]
function searchingFor(term){
  return function(x){
    return x.empid.toLowerCase().includes(term.toLowerCase()) || x.jobtitle.toLowerCase().includes(term.toLowerCase()) ;
  }
}


export class Payments extends React.Component{
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
<p className={styles.pageHeading}>Payments</p>
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
      <th> Job Title</th>
      <th> CTC </th>
      <th> Effective Date </th>
      <th> Status </th>
      <th> Actions </th>
      </tr>
{
this.state.people.filter(searchingFor(this.state.term)).map(function(person){
    return (
      <tr  key={person.id}>
      <td>{person.empid}</td>
      <td>{person.empname}</td>
      <td> {person.jobtitle} </td>
        <td> {person.ctc} </td>
          <td> {person.effectivedate} </td>
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
