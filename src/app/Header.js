import React from "react";
import {Link} from "react-router-dom";
import Icon from "react-icons-kit";
import { userCircle,angleDown, bell } from 'react-icons-kit/fa';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import {Card,CardTitle,CardText} from "reactstrap";
import {cardTitle,cardText,cardStyle,imgStyle} from "./NotificationLayout.css";

import {headerstyle,navstyle,dropitem,dropmenu,navitem,navspace,navright,iconcolor,navrightspace,logo,dropmenuright} from "./Header.css";
import {downIcon,cardimgleft} from "./Layout.css";

export class Header extends React.Component{
  render(){
    return(
      <nav class="navbar navbar-expand-sm navbar-light bg-light" id={headerstyle} >
    <a class="navbar-brand" href="Home" id={logo}>H

    <span style={{color:'white'}}>rms</span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsiblecontent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" ></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsiblecontent">

      <ul class="navbar-nav mr-auto" id={navstyle}>
        <li class="nav-item" id={navspace}>

      <Link to="/Home" className={navitem}>
            Home
          </Link>

          <span class="sr-only">(current)</span>
        </li>

        <li class="nav-item dropdown" id={navspace}>
          <a  href="#" id="navbarDropdown" className={navitem} role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            Employees<Icon icon={angleDown} className={downIcon} />
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" id={dropmenu}>

            <Link to="/AddEmployee"  class="dropdown-item" id={dropitem}>Add Employee</Link>
            <Link to="/ViewEmployee" class="dropdown-item" id={dropitem}>
            Employee List
            </Link>
          </div>
        </li>
        <li class="nav-item dropdown" id={navspace}>
          <a  href="#" id="navbarDropdown" className={navitem} role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            Leaves & Time<Icon icon={angleDown} className={downIcon} />
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" id={dropmenu}>
          <Link to="/Leaves" class="dropdown-item" id={dropitem}>  Leave List </Link>
          <Link to="/Attendances" class="dropdown-item" id={dropitem}>Attendance List </Link>


          </div>
        </li>
        <li class="nav-item dropdown" id={navspace}>
          <a  href="#" id="navbarDropdown" className={navitem} role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            Claims<Icon icon={angleDown} className={downIcon} />
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" id={dropmenu}>
            <Link to="/AddClaims"  class="dropdown-item" id={dropitem}>Add Claim</Link>
            <Link to="/ClaimList" id={dropitem} class="dropdown-item">Claim List</Link>

          </div>
        </li>
        <li class="nav-item dropdown">
          <a  href="#" id="navbarDropdown"  className={navitem}  role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            Payroll<Icon icon={angleDown} className={downIcon} />
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" id={dropmenu}>
          <Link to="/Payments" id={dropitem} class="dropdown-item">Payments</Link>
            <Link to="/Process" id={dropitem} class="dropdown-item">Process</Link>

            <Link to="/Statement" id={dropitem} class="dropdown-item">Statement</Link>
          </div>
        </li>

      </ul>
      <ul class="navbar-nav mr-auto" id={navright}>
      <li class="nav-item dropdown" id={navrightspace}>
      <a id="navbarDropdown" role="button" data-toggle="dropdown">
      <Icon icon={bell} size={18} className={iconcolor}/>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <div class="dropdown-item">
      <Card className={cardStyle}>
        <div class="row">
           <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
           <div class="col-md-6" style={{marginTop:'1vw'}}>
           <CardTitle className={cardTitle}>Jane Smith</CardTitle>
          <CardText className={cardText}>Requested for Leave</CardText>
          <CardText className={cardText}>New</CardText> </div>
          </div></Card>
      <Card className={cardStyle}>
      <div class="row">
      <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
      <div class="col-md-6" style={{marginTop:'1vw'}}>
      <CardTitle className={cardTitle}>Jane Smith</CardTitle>
      <CardText className={cardText}>Requested for Leave</CardText>
      <CardText className={cardText}>New</CardText></div>
      </div></Card>
      <Card className={cardStyle}>
      <div class="row">
      <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
      <div class="col-md-6" style={{marginTop:'1vw'}}>
      <CardTitle className={cardTitle}>Jane Smit</CardTitle>
      <CardText className={cardText}>Requested for Leave</CardText>
      <CardText className={cardText}>New</CardText></div>
      </div></Card>
      </div>
      </div>

      </li>

      <li class="nav-item" id={navrightspace}>
      <Link to="/CompanyDetails"><Icon icon={ic_settings} size={21} className={iconcolor}/></Link>
      </li>


      <li class="nav-item dropdown">
      <a href="#" id="navbarDropdown" className={navitem} role="button" data-toggle="dropdown"  aria-haspopup="false" aria-expanded="false">
      <Icon icon={userCircle} size={18} className={iconcolor}/>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown" id={dropmenuright}>

      <Link to="/Profile" id={dropitem} class="dropdown-item">Profile</Link>
      <Link to="/Logout" id={dropitem} class="dropdown-item">Logout</Link>

      </div>
      </li>





      </ul>

</div>
  </nav>
    );
  }
}
