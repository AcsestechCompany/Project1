import React from "react";
import { render } from "react-dom";
import {cardHeaderStyle} from "../Layout.css";
import Icon from 'react-icons-kit';
import { bullhorn } from 'react-icons-kit/icomoon/bullhorn';
import {anouncementStyle,linkmore} from "../home/Home.css";
import {inputstyle,right} from "../home/CardStyling.css";
import {Link} from "react-router-dom";


export class CardHeaderAnnounceEmp extends React.Component {
  render() {
    return(
<p className={cardHeaderStyle}>Announcements
<span className={right} ><Link to="/AnnouncementListEmp" className={linkmore}>View More ></Link></span>
</p>

);
}
}
