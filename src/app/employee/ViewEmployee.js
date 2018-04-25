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
import {EmployeeList1} from "./EmployeeList1";
import {EmployeeList2} from "./EmployeeList2";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class ViewEmployee extends React.Component{
  constructor(props){
    super(props);
    this.second = this.second.bind(this);
    this.first = this.first.bind(this);
    this.third = this.third.bind(this);
    this.state={
      first:true,
      second:false,
      third:false
    };
  }
  second(){
    this.setState({
    first:false,
      second:true,
      third:false

    });
  }
  first(){
    this.setState({

      first:true,
      second:false,
      third:false
    })
  }
  third(){
    this.setState({
      first:false,
      second:false,
      third:true
    })
  }
  displayEmployees(){
    if(this.state.first){
      return <EmployeeList/>;
    }
  }
  displaySecond(){
    if(this.state.second){
      return <EmployeeList1/>;
    }
  }
  displayThird(){
    if(this.state.third){
      return <EmployeeList2/>;
    }
  }
  render() {
    var first=this.displayEmployees();
    var second = this.displaySecond();
    var third = this.displayThird();
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>
Employee List<span  className={floatRight}> <Icon icon={search} style={{position:'relative',right:'3vw'}}/><Icon icon={filter} /></span></p>
<hr className={hrStyle}/>
<Link to="/AddEmployee"><button className="btn btn-outline-warning" id={buttonStyle}>
Add New Employee</button></Link>

{first}
{second}
{third}
<p className={pagination}>
<span onClick={this.first.bind(this)} style={{cursor:'pointer',border:'1px solid red'}}> 1 </span>
<span onClick={this.second.bind(this)} style={{cursor:'pointer'}}> 2 </span>
<span onClick={this.third.bind(this)} style={{cursor:'pointer'}}> 3 </span>
></p>
  </div>
  <Footer/>
  </div>
    );
  }
}
