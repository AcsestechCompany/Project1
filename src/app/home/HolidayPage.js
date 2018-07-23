import React from "react";
import styles from "../Layout.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import { ic_edit,ic_delete } from 'react-icons-kit/md/';


const holidays = [
  { id: 1,
    holiday:'Good Friday',
    day:'Friday',
    date:'09/05/2018',
    action:    <div>
         <button className={styles.icon}>
         <Icon icon={ic_edit}/></button>
          <button className={styles.icon}>
        <Icon icon={ic_delete} /></button>
        </div>
  },
  { id: 2,
    holiday:'Ambedkar Jayanti',
    day:'Wednesday',
    date:'03/05/2018',
    action:
         <div>
         <button className={styles.icon}>
         <Icon icon={ic_edit}/></button>
          <button className={styles.icon}>
        <Icon icon={ic_delete} /></button>
        </div>
  },
  { id: 3,
    holiday:'Holi',
    day:'Tuesday',
    date:'12/05/2018',
    action:
        <div>
         <button className={styles.icon}>
         <Icon icon={ic_edit}/></button>
          <button className={styles.icon}>
        <Icon icon={ic_delete}/></button>
        </div>
  }
]
function searchingFor(term){
  return function(x){
    return x.holiday.toLowerCase().includes(term.toLowerCase()) || x.day.toLowerCase().includes(term.toLowerCase()) ;
  }
}

export class HolidayPage extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        holidays: holidays,
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
      <p className={styles.pageHeading}>List of Holidays</p>
      <hr className={styles.hrStyle}/>
      <form>
      <span className={styles.floatRight1}>
      <input type="search"
onChange={this.searchHandler}
       />
       </span>
      </form>
      <table class="table table-bordered table-responsive-md" id={styles.exampletable}>
      <thead>
      <tr className={styles.orange}>
          <th>Holiday</th>
          <th>Date</th>
          <th>Day</th>
          <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {
      this.state.holidays.filter(searchingFor(this.state.term)).map(function(holiday){
          return (
            <tr  key={holiday.id}>
                <td>{holiday.holiday}</td>
                  <td>{holiday.date}</td>
                   <td>{holiday.day}</td>
                    <td> {holidays.action} </td>
            </tr>
          )
        })
      }
         </tbody>
         </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
