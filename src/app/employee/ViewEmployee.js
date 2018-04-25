import React from "react";
import {empDesign,empPhone,empId,pagination} from "./LayoutEmployee.css";
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import { filter } from 'react-icons-kit/fa/filter';
import { smallRight } from 'react-icons-kit/entypo/';
import {pageHeading,hrStyle,arrow,orange,floatRight,buttonStyle,displayContainer} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {EmployeeList} from "./EmployeeList";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class ViewEmployee extends React.Component{
  constructor(props){
    super(props);
    this.second = this.second.bind(this);
    this.state={
      employees:true,
      second:false
    };
  }

  second(){
    this.setState({
      employees:false,
      second:true

    });
  }
  displayEmployees(){
    if(this.state.employees){
      return <EmployeeList/>;
    }
  }
  displaySecond(){
    if(this.state.second){
      return <EmployeeList1/>;
    }
  }
  render() {
    var employees=this.displayEmployees();
    var second = this.displaySecond();
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>
Employee List<span  className={floatRight}> <Icon icon={search} /><Icon icon={filter} /></span></p>
<hr className={hrStyle}/>
<Link to="/AddEmployee"><button className="btn btn-outline-warning" id={buttonStyle}>
Add </button></Link>

{employees}
<p className={pagination}>1<span onClick={this.second.bind(this)} style={{cursor:'pointer'}}> 2 </span> 3 4 5 ></p>
  </div>
  <Footer/>
  </div>
    );
  }
}
