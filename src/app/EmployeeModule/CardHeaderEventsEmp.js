import React from "react";
import {cardHeaderStyle} from "../Layout.css";
import {anouncementStyle,linkmore} from "../home/Home.css";
import {Link} from "react-router-dom";
import {imgStyle1,inputstyle,dropitem,eventSelect,right} from "../home/CardStyling.css";
const styles = {
  customWidth: {
    width: 110,
  },
};
export class CardHeaderEventsEmp extends React.Component {
  state = {
  value: 1,
};
handleChange = (event, index, value) => this.setState({value});
  render() {
    return(
<p className={cardHeaderStyle}>Events
<span className={right} ><Link to="/EventsListEmp" className={linkmore}>View More ></Link></span>
</p>
);
}
}
