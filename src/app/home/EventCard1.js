import React from "react";
import {Card,CardTitle,CardText} from "reactstrap";
import {cardTitle1,cardText1,cardStyle,imgStyle} from "./CardStyling.css";
import {cardimgleft} from "../Layout.css";

export class EventCard1 extends React.Component{
  render(){
    return(
      <Card className={cardStyle}>
        <div class="row">
           <div class="col-md-2"><img className={cardimgleft} src={require('./profile2.png')} id={imgStyle}/></div>
           <div class="col-md-8" >
           <CardTitle className={cardTitle1}>{this.props.title}</CardTitle>
          <CardText className={cardText1}>{this.props.text}</CardText></div>
          </div></Card>
    );
  }
}
