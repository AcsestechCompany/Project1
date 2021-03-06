import React from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {iconcolor,dropDownStylesidenav,dropDownLeavessidenav,dropDownClaimssidenav,dropDownPayrollsidenav} from "../Header.css";
import {navitemStyleHome1,navitemStyle1,dropDownLeaves,dropDownClaims,dropDownPayroll,
  downIcon,dropDownStyle,dropItem,hyperLink} from "../Layout.css";
import styles1 from "./Employee.css";
import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import {angleDown } from 'react-icons-kit/fa';
import { fadeInRight } from "react-animations";
import Radium,{StyleRoot} from "radium";

const styles={
  fadeInRight: {
    animation: 'x 3s',
    animationName: 'fadeInRight'

  }
}
export class SideNavEmployee extends React.Component{
  render(){
    return(
      <nav class="navbar navbar-default" role="navigation"  id={styles1.navbar}>


    <ul>
      <Link to="/EmployeeHome">
    <li>
    Home
    </li>
        </Link>
    <li class="dropdown" >
     <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false" id={styles1.navcontenthome}>Employees<span class="caret"></span></a>
    <ul class="dropdown-menu" role="menu" id={styles1.dropdownmenu} >
     <li><Link to="/AddEmployee" id={styles1.navcontentfirst}>Add Employee</Link></li>
     <li><Link to="/ViewEmployee" id={styles1.navcontent}>View Employee</Link></li>
    </ul>
  </li>
    <li class="dropdown" >
     <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false" id={styles1.navcontenthome}>Leaves & Time <span class="caret"></span></a>
    <ul class="dropdown-menu" role="menu" id={styles1.dropdownmenu} >
     <li><Link to="/LeaveList" id={styles1.navcontentfirst}>Leave List</Link></li>
     <li><Link to="/Attendance" id={styles1.navcontent}>Attendance List</Link></li>
    </ul>
  </li>
  <Link to="/EmployeeClaims">
    <li>
   Claims
    </li>
    </Link>
    <Link to="/EmployeePayroll">
    <li>
     Payroll
    </li>
    </Link>
    </ul>
      </nav>
    );
  }
}
