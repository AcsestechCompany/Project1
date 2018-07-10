import React from "react";
import {Row,Col,Card,CardText,CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import {imgStyle} from "../employee/LayoutSettings.css";
import { users } from 'react-icons-kit/icomoon/users';
import styles from "../Layout.css";

export class FirstRow extends React.Component{
  render() {
    return(
      <Row className={styles.firstrowstyle}>
       <Col style={{marginRight:'-1vw'}}><Link to="/ViewEmployee" className={styles.linkStyle}>
        <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#A992E2'}}>
        <p class="card-title" id={styles.cardTextStyle}>TOTAL EMPLOYEES<br/><b>14</b></p>
        </Card></Link>
        </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/NewJoiners" className={styles.linkStyle}>
           <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#EC6F59' }}>
           <p class="card-title" id={styles.cardTextStyle}>NEW JOINERS<br/><b>6</b></p>
         </Card></Link>
         </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/Leavers" className={styles.linkStyle}>
           <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#54BAE0'}}>
           <p class="card-title" id={styles.cardTextStyle}>LEAVERS<br/> <b>1</b></p>
         </Card></Link>
         </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/AdminUsers" className={styles.linkStyle}>
         <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#F7C65F'}}>
         <p class="card-title" id={styles.cardTextStyle}>ADMIN USERS<br/><b>2</b></p>
       </Card></Link>
       </Col>

     </Row>
    );
  }
}
