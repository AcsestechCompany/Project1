import React from "react";
import {Row} from "reactstrap";
import {AnnouncementEmp} from "./AnnouncementEmp";
import {EventsEmp} from "./EventsEmp";
import styles from "../Layout.css";

export class SecondRow extends React.Component{
  render(){
    return(
<Row className={styles.rowStyle} id={styles.thirdrowstyle}>
      <AnnouncementEmp/>
      <EventsEmp/>
     </Row>

    );
  }
}
