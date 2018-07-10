import React from "react";
import {EventCard} from "../home/EventCard";
import {CardHeaderEventsEmp} from "./CardHeaderEventsEmp";
import {Col,Card,Row} from "reactstrap";
import {buttonStyle,buttonStyleL,right,eventSelect} from "../home/CardStyling.css";
import {cardStyle1,giftIcon} from "../home/Home.css";
import {orange} from "../Layout.css";
import Icon from 'react-icons-kit';
const styles = {
  customWidth: {
    width: 130,
  },
};
export class EventsEmp extends React.Component{
  state = {
  value: 1,
};
handleChange = (event, index, value) => this.setState({value})
  render(){
    return(
      <Col style={{marginRight:'-1vw'}}>
          <Card body inverse className={cardStyle1} >
          <CardHeaderEventsEmp text={"EVENTS"}/>

          <EventCard title={"David"} text={"Completes 6 years"} time={"27th April 2018"}/>
          <EventCard title={"Carol"} text={"Farewell Party"}  time={"30th April 2018"}/>

        </Card>
        </Col>
    );
  }
}
