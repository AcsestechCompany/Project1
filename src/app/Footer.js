import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import {footerText,footerSpan,copyrighticon} from "./Layout.css";
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
           <p className={footerText}><Icon icon={ic_copyright} className={copyrighticon}/> Acsestech  {' '}|  Privacy Policy<span className={footerSpan}> Contact Us</span></p>
         </Navbar>
      </div>
    );
  }
}
