import React from "react";
import {Row} from "reactstrap";
import {Announcement} from "./Announcement";
import {Events} from "./Events";
import {Approvals} from "./Approvals";
import {rowStyle} from "../Layout.css";
export class ThirdRow extends React.Component{
  render(){
    return(
      <Row className={rowStyle}>
       <Announcement/>
       <Events/>

     </Row>
    );
  }
}
