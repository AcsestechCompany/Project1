import React from "react";
import {Col,Card,CardText,Row} from "reactstrap";
import {CardHeader} from "./CardHeader";
import styles from "./Home.css";
import Icon from 'react-icons-kit';
import { thinRight,thinLeft } from 'react-icons-kit/entypo';

export class Holidays extends React.Component{
  displayHolidays(){
    if(!this.state.holidays){
    return(
      <Row>
      <div className={transition}>
      <CardText className={styles.holidayTitleR}>30</CardText>
      <CardText className={styles.holidayDayR}>Friday,March</CardText>
      <CardText className={styles.holidayTextR}>Good Friday</CardText>
      <CardText className={styles.holidayIconR}><Icon icon={thinRight} size={35} onClick={this.next.bind(this)}/> </CardText>
      </div>
  </Row>
);
}
else if(this.state.holidays){
  return(
    <div className={styles.transition}>
    <p className={styles.holidayIconL}><Icon icon={thinLeft} size={35} onClick={this.next.bind(this)}/> </p>
    <CardText className={styles.holidayTitleL}>14</CardText>
    <CardText className={styles.holidayDayL}>Saturday,April</CardText>
    <CardText className={styles.holidayTextR}>Ambedkar Jayanthi</CardText>
    </div>
  );
}
}
next(){
  this.setState({
holidays:!this.state.holidays
  });
}
constructor(props) {
  super(props);
  this.next=this.next.bind(this);
  this.state = {
    holidays:false,
    nextholiday:true
  };
}

  render() {
    var holidays=this.displayHolidays();
    var nextholiday=this.displayHolidays();

    return(
      <Col style={{marginRight:'-1vw'}}>
        <Card body inverse className={styles.cardStyle4} >
          <CardHeader text={"HOLIDAYS"}/>
        {holidays}
      </Card>
      </Col>
    );
  }
}
