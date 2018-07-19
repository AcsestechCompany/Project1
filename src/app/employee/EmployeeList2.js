import React from "react";
import styles from "./LayoutEmployee.css";
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import { filter } from 'react-icons-kit/fa/filter';
import { smallRight } from 'react-icons-kit/entypo/';
import {arrow,orange,floatRight1} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";


const people = [
  { id: 1,
    empname:'Anjali Walker',
    empdesign:'Test Engineer',
    empid:'E543',
    empphone:'9089098098',
    empimg:require('../images/user.png')
  },
  { id: 2,
    empname:'Jennifer Hudson',
    empdesign:'Product Manager',
    empid:'E653',
    empphone:'9089009098',
    empimg:require('../images/user1.png')
  },
  { id: 3,
    empname:'David Milton',
    empdesign:'Software Engineer',
    empid:'E987',
    empphone:'9088998098',
    empimg:require('../images/user.png')
  },

  { id: 4,
    empname:'Kate Winsten',
    empdesign:'Product Manager',
    empid:'E453',
    empphone:'9009009098',
    empimg:require('../images/user1.png')
  }

]


function searchingFor(term){
  return function(x){
    return x.empid.toLowerCase().includes(term.toLowerCase()) || x.empdesign.toLowerCase().includes(term.toLowerCase())
    || x.empname.toLowerCase().includes(term.toLowerCase())
     ;
  }
}

export class EmployeeList2 extends React.Component{
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
  render() {
    return(
      <div>
      <span  className={floatRight1} style={{position:'relative',bottom:'3.4vw'}}>
      <form class="form-row" >
      	<input type="search"  placeholder="Search"   onChange={this.searchHandler} />
      </form>
      </span>



      <div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}} id={styles.listforlaptop}>
      {
      this.state.people.filter(searchingFor(this.state.term)).map(function(person){
          return (

           <div class="row" >
            <CardTemplate text={person.empname}
            img={person.empimg}
             key={person.id}>
             <p className={styles.empDesign}>{person.empdesign}</p>
             <p className={styles.empId}>{person.empid}</p>
             <p className={styles.empPhone}>{person.empphone}</p>
            </CardTemplate>
            </div>
          )
        })
      }
</div>


</div>
    );
  }
}
