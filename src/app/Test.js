import React from "react";
import Icon from "react-icons-kit";
import {Card,CardText,Col,Row} from "reactstrap";
import {holidayTextR,holidayTitleR,holidayDayR} from "./home/Home.css";
import {carousel,labelStyle1,inputstyle} from "./Layout.css";
import {imgStyle} from "./employee/LayoutSettings.css";
import { filter } from 'react-icons-kit/fa/filter';


import {displayContainer,orange,item,indicator,exampletable,tableinput} from "./Layout.css";
export class Test extends React.Component{


  render() {

    return(

      <div className={displayContainer}>
      <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
             style={{backgroundColor:'white',color:'grey',border:'1px solid gray',boxShadow:'none'}}
          >
          <Icon icon={filter}/>
          </button>
          <ul class="dropdown-menu">
            <input class="form-control" id="dropdown" type="text" placeholder="Search.."/>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </div>
        <Row><Col>    <img class="card-img-top" src={require('./user1.png')} id={imgStyle}
         /></Col></Row>
        <Row style={{marginTop:'2vw',marginLeft:'1vw'}}>




        <Col>
      <p>  Name</p>
      <p>ID</p>
      <p>Department</p>
        </Col>
<Col xs="2">
<p>:</p>
<p>:</p>
<p>:</p>
</Col>
        <Col>
<p>Farhana</p>
<p>E123</p>
<p>Marketing</p>
        </Col>
        </Row>


      </div>
    );
  }
}
