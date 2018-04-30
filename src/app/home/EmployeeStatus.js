import React from "react";
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { calendar } from 'react-icons-kit/entypo/calendar';
import {CardHeader} from "./CardHeader";
import {Col,Card,CardText,Row} from "reactstrap";
import {cardStyle2,empCalendar,cardStyle,empicons,
  empRow,empTextA,empTextOL,empTextOT,empTextL,empTextP,calendarText,linkDepartment} from "./Home.css";
import {cardtextstyle1} from "../Layout.css";

export class EmployeeStatus extends React.Component{
  render(){
    return(
      <Col xs="6" style={{marginRight:'-1vw'}}>
      <Link to="EmploymentStatus" className={linkDepartment}>
       <Card body inverse className={cardStyle2} >
        <CardHeader text={"Employee Status"}/>
        <CardText  className={empicons}>
        <i aria-hidden="true" class="calendar huge icon" id={empCalendar}></i>{'   '}
        <span className={calendarText}>04-APR-18</span>
        </CardText>
        <Row style={{marginRight:'0.5vw',marginTop:'2vw'}}>
         <Col style={{marginRight:'-1vw',textAlign:'justify'}}>
          <Card body inverse className={cardStyle} style={{ backgroundColor: '#EAE7F5'}}>
          <CardText className={cardtextstyle1}>80 </CardText>
          </Card>

          </Col>
         <Col style={{marginRight:'-1vw'}}>
             <Card body inverse className={cardStyle} style={{ backgroundColor: '#DFDAEF' }}>
             <CardText className={cardtextstyle1}>10</CardText>
           </Card>
           </Col>
         <Col style={{marginRight:'-1vw'}}>
             <Card body inverse className={cardStyle} style={{ backgroundColor: '#D5CDE9'}}>
             <CardText className={cardtextstyle1}>5 </CardText>
           </Card>
           </Col>
         <Col style={{marginRight:'-1vw'}}>
           <Card body inverse className={cardStyle} style={{ backgroundColor: '#CBC1E3'}}>
           <CardText className={cardtextstyle1}>2</CardText>
         </Card>
         </Col>
         <Col style={{marginRight:'-1vw'}}>
           <Card body inverse className={cardStyle} style={{ backgroundColor: '#C7BCE0'}}>
           <CardText className={cardtextstyle1}>3</CardText>
         </Card>
         </Col>
       </Row>
       <Row className={empRow}>
       <p className={empTextP}>Present</p>
        <p className={empTextA}>Absent</p>
          <p className={empTextOL}>On Leave</p>
            <p className={empTextL}>Late</p>
              <p className={empTextOT}>Overtime</p>
       </Row>
        </Card>
        </Link>
        </Col>
    );
  }
}
