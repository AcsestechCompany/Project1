import React from "react";
import {Row} from "reactstrap";
import {Announcement} from "./Announcement";
import {Events} from "./Events";
import {Approvals} from "./Approvals";
import {rowStyle,thirdrowstyle} from "../Layout.css";
export class ThirdRow extends React.Component{
  render(){
    return(
      <Row className={rowStyle} id={thirdrowstyle}>
       <Announcement/>
       <Events/>

     </Row>
    );
  }
}
