import React from "react";
import {empDesign,empPhone,empId} from "./LayoutEmployee.css";
import {pageHeading,hrStyle,displayContainer,floatRight1} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {Header} from "../Header";
import {Footer} from "../Footer";
const people = [
  { id: 1,
    empname:'Albert Walker',
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
  }

]
function searchingFor(term){
  return function(x){
    return x.empid.toLowerCase().includes(term.toLowerCase()) || x.empdesign.toLowerCase().includes(term.toLowerCase())
    || x.empname.toLowerCase().includes(term.toLowerCase())
     ;
  }
}

export class Leavers extends React.Component{
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
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Leavers</p>
<hr className={hrStyle}/>
<span  className={floatRight1}>
<form >
	<input type="search"  placeholder="Search"   onChange={this.searchHandler}/>
</form>
</span>
<div class="row" style={{marginLeft:'0.4vw',marginTop:'5vw'}}>

      {
      this.state.people.filter(searchingFor(this.state.term)).map(function(person){
          return (

           <div class="row">
            <CardTemplate text={person.empname}
            img={person.empimg}
             key={person.id}>
             <p className={empDesign}>{person.empdesign}</p>
             <p className={empId}>{person.empid}</p>
             <p className={empPhone}>{person.empphone}</p>
            </CardTemplate>
            </div>
          )
        })
      }

</div>  </div>
  <Footer/>
  </div>
    );
  }
}
