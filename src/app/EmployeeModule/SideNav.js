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
export class SideNav extends React.Component{
  render(){
    return(
      <nav class="navbar navbar-default" role="navigation"  id={styles1.navbar}>


      <ul class="nav navbar-nav">

            <li><Link to="/EmployeeHome" id={styles1.navcontenthome}>Home</Link></li>

            <li class="dropdown">

             <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false" id={styles1.navcontenthome}>Employees <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu" id={styles1.dropdownmenu}  >
             <li><Link to="/AddEmployee" id={styles1.navcontentfirst} >Add Employee</Link></li>
             <li><Link to="/ViewEmployee" id={styles1.navcontent}>Employee List</Link></li>
            </ul>
          </li>

          <li class="dropdown" >
           <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false" id={styles1.navcontenthome}>Leaves & Time <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu" id={styles1.dropdownmenu} >
           <li><Link to="/EmployeeLeaves" id={styles1.navcontentfirst}>Leave List</Link></li>
           <li><Link to="/EmployeeAttendance" id={styles1.navcontent}>Attendance List</Link></li>
          </ul>
        </li>
       <Link to="/EmployeeClaims" id={styles1.links}>
           <li id={styles1.navcontenthome}>Claims
         </li>
         </Link>
      <Link to="/EmployeePayroll" id={styles1.links}>
         <li  id={styles1.navcontenthome}>Payroll

       </li>
       </Link>
      </ul>



      </nav>
    );
  }
}
