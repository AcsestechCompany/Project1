import React from 'react';
import Icon from 'react-icons-kit';
import {NavLink,Link} from "react-router-dom";
import { userCircle,angleDown, bell } from 'react-icons-kit/fa';
import { arrowLeft2,spinner11 } from 'react-icons-kit/icomoon';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {dropDownStyle,hyperLink,hyperLinkLogo,dropdown,upperNav,dropItem,upperNavIcon,settingsIcon,dropNotify,
  dropDownLeaves,dropDownClaims,dropDownPayroll,
  notificationIcon,dropdownContent,floatRight,cardimgleft,navitemStyle,navitemStyleHome,
  navStyle,downIcon,linkStyle1,dropDownStyleProfile} from "./Layout.css";
import {cardStyle,cardText,cardTitle,imgStyle} from "./NotificationLayout.css";
import {Card,CardTitle,CardText} from "reactstrap";
export class Header1 extends React.Component {
 constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
 toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
render() {
  return (

    <div>
      <Navbar color="faded" light expand="md" style={{backgroundColor:'#2C3E50'}}>
        <NavbarBrand  style={{color:'red',marginTop:'-2.5vw',
          fontSize:'2.5vw',marginLeft:'2vw',fontWeight:'bold',fontFamily:'sanserif'}}>
          <NavLink to="/Home" className={hyperLinkLogo}>
          <span style={{color:'red'}}>H</span>
          <span>rms</span></NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={{backgroundColor:'white'}} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar id={navStyle}>
            <NavItem className={navitemStyleHome}><NavLink to="/Home"  className={linkStyle1}>HOME</NavLink></NavItem>
          <UncontrolledDropdown nav inNavbar className={navitemStyle}>
            <DropdownToggle nav  style={{color:'white'}}>EMPLOYEES<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
              <DropdownMenu className={dropDownStyle}>
                <DropdownItem id={dropItem}><Link to="/AddEmployee" id={hyperLink}>Add Employee</Link></DropdownItem>
                <DropdownItem id={dropItem}><Link to="/ViewEmployee" id={hyperLink}>Employees List</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar className={navitemStyle}>
                <DropdownToggle nav style={{color:'white'}}>LEAVES & TIME<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
              <DropdownMenu className={dropDownLeaves}>
                <DropdownItem id={dropItem}><Link to="/Leaves" id={hyperLink}>Leave List</Link></DropdownItem>
            <DropdownItem id={dropItem}><Link to="/Attendance" id={hyperLink}>Attendance List</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar className={navitemStyle}>
              <DropdownToggle nav  style={{color:'white'}}>CLAIMS<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
              <DropdownMenu className={dropDownClaims} >
                <DropdownItem id={dropItem}><Link to="/AddClaims" id={hyperLink}>Add Claims</Link></DropdownItem>
                <DropdownItem id={dropItem}><Link to="/ClaimList" id={hyperLink}>Claims List</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className={navitemStyle}>
              <DropdownToggle nav style={{color:'white'}}>PAYROLL<Icon icon={angleDown} className={downIcon}/></DropdownToggle>
            <DropdownMenu className={dropDownPayroll}>
              <DropdownItem id={dropItem}><Link to="/Payments" id={hyperLink}>Payments</Link></DropdownItem>
              <DropdownItem id={dropItem}><Link to="/Process" id={hyperLink}>Process</Link></DropdownItem>
              <DropdownItem id={dropItem}><Link to="/Statement" id={hyperLink}>Statement</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav >
          <DropdownToggle nav className={notificationIcon}><Icon icon={bell} size={18} style={{color:'white'}}/></DropdownToggle>
              <DropdownMenu className={dropdownContent} >
              <DropdownItem id={dropNotify}>
                <p> <Icon icon={arrowLeft2}/><span className={floatRight}><Icon icon={spinner11} size={12} style={{color:'black'}}/></span></p>
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
             </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className={settingsIcon}><NavLink to="/CompanyDetails"><Icon icon={ic_settings} size={21} style={{color:'white'}}/></NavLink></NavItem>

            <UncontrolledDropdown nav className={upperNav}>
              <DropdownToggle nav style={{color:'white'}}><Icon icon={userCircle} size={18} style={{color:'white'}} className={upperNavIcon}/></DropdownToggle>
              <DropdownMenu className={dropDownStyleProfile}>
                <DropdownItem  className={dropItem}><NavLink to="/Profile" id={hyperLink}>Profile</NavLink></DropdownItem>
                <DropdownItem  className={dropItem}><NavLink to="/Logout" id={hyperLink}>Logout</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
