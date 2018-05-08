import React from "react";
import {Row,Col,Card,CardText} from "reactstrap";
import {cardTextStyle,linkStyle,cardStyle,firstrowstyle} from "../Layout.css";
import {Link} from "react-router-dom";

import {imgStyle} from "../employee/LayoutSettings.css";
import { users } from 'react-icons-kit/icomoon/users';




export class FirstRow extends React.Component{
  render() {
    return(
      <Row className={firstrowstyle}>
       <Col style={{marginRight:'-1vw'}}><Link to="/ViewEmployee" className={linkStyle}>
        <Card body inverse className={cardStyle} style={{ backgroundColor: '#A992E2'}}>
        <CardText className={cardTextStyle}>TOTAL EMPLOYEES<p><b>14</b></p></CardText>
        </Card></Link>
        </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/NewJoiners" className={linkStyle}>
           <Card body inverse className={cardStyle} style={{ backgroundColor: '#EC6F59' }}>
           <CardText className={cardTextStyle}>NEW JOINERS<p><b>6</b></p></CardText>
         </Card></Link>
         </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/Leavers" className={linkStyle}>
           <Card body inverse className={cardStyle} style={{ backgroundColor: '#54BAE0'}}>
           <CardText className={cardTextStyle}>LEAVERS <p><b>1</b></p></CardText>
         </Card></Link>
         </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/AdminUsers" className={linkStyle}>
         <Card body inverse className={cardStyle} style={{ backgroundColor: '#F7C65F'}}>
         <CardText className={cardTextStyle}>ADMIN USERS<p><b>2</b></p></CardText>
       </Card></Link>
       </Col>

     </Row>
    );
  }
}
