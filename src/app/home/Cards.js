import React from "react";
import { Container,Row,Col, Card, CardTitle,CardText,Button } from "reactstrap";
import {cardTextStyle,cardStyle} from "../Layout.css";

export class Cards extends React.Component {
 render() {
   return(
     <Col style={{marginRight:'-1vw'}}>
        <Card body className={cardStyle}>
         <CardText className={cardTextStyle}>{this.props.text}</CardText>
         </Card>
         </Col>

   );
 }
}
