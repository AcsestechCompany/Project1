import React from "react";
import {Holidays} from "./Holidays";
import {Row,Col,Card,CardText} from "reactstrap";
import {RowStyle,cardstyle1,imgstyle} from "./Employee.css";
import {imgStyle} from "../employee/LayoutSettings.css";
import {CardHeader} from "../home/CardHeader";
import {Link} from "react-router-dom";

export class ThirdRow1 extends React.Component{
  render(){
    return(
      <Row id={RowStyle}>

<Col xs="4">
<Holidays/>
</Col>

      <Col xs="8" className={cardstyle1}>
      <CardHeader text="My Team"/>
      <Row>


      <div class="card" style={{width:'14.24rem',border:'none'}}>
      <img class="card-img-top" src={require('../employee/user1.png')} id={imgStyle}
      style={{borderRadius:'80%'}}
   />
  <div class="card-body">
    <h5 class="card-title" style={{color:'orange'}}>Niha</h5>
    <p class="card-text" style={{color:'blue'}}>Reporting Manager</p>
  </div>
</div>

<div class="card" style={{width:'14.24rem',border:'none'}}>
<img class="card-img-top" src={require('../employee/user.png')} id={imgStyle}
style={{borderRadius:'50%'}}
/>
<div class="card-body">
<h5 class="card-title">Tom</h5>
<p class="card-text">Team Mate</p>
</div>
</div>

<div class="card" style={{width:'14.24rem',border:'none'}}>
<img class="card-img-top" src={require('../employee/user1.png')} id={imgStyle}
style={{borderRadius:'50%'}}
/>
<div class="card-body">
<h5 class="card-title">Niha</h5>
<p class="card-text">Reporting Manager</p>
</div>
</div>

      </Row>
      </Col>
      </Row>
    );
  }
}
