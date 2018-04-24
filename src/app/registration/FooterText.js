import React from "react";
import {copyrighticon} from "../Layout.css";
import {footerLine,footerText,footerSpan} from "./LayoutRegistration.css";
import Icon from 'react-icons-kit';
import { ic_copyright } from 'react-icons-kit/md/ic_copyright';

export class FooterText extends React.Component{
  render(){
    return(
      <div className={footerLine}>
    <p className={footerText}><Icon icon={ic_copyright} className={copyrighticon}/>Acsestech  {' '}|  Privacy Policy
<span className={footerSpan}> Contact Us</span>
     </p>
      </div>
    );
  }
}
