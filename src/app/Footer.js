import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import {Link} from "react-router-dom";
import {footerText,footerSpan,copyrighticon,link} from "./Layout.css";
import Icon from 'react-icons-kit';
import { ic_copyright } from 'react-icons-kit/md/ic_copyright';



export class Footer extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    return (
      <div >
         <Navbar style={{backgroundColor:'#2C3E50',height:'5vw',marginBottom:'0vw',marginLeft:'0vw'}}>
           <p className={footerText}>
           <Icon icon={ic_copyright} className={copyrighticon}/>
            <a href="http://www.acsestech.com" id={link}>
           Acsestech
            </a>
            {' '}|  Privacy Policy<span className={footerSpan}>
           <Link to="Contactus" id={link}>Contact Us</Link></span></p>
         </Navbar>
      </div>
    );
  }
}
