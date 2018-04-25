import React from "react";
import {containerRegistration,content,rowStyle1,cardStyle,back,imgStyle,imgStyle1} from "./LayoutRegistration.css";
import {Row,Col,Card} from "reactstrap";
import Icon from 'react-icons-kit';
import { thinLeft } from 'react-icons-kit/entypo/thinLeft';
import {Link} from "react-router-dom";
import {LogoHeader} from "./LogoHeader";
import {FooterText} from "./FooterText";



export class ViewFeatures extends React.Component{
  render(){
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
       <LogoHeader/>

      <Row className={rowStyle1}>
      <Col >
      <Link to="/ViewFeature1">
      <img class="animated slideInUp" src={require('../timeandattendance.jpg')} id={imgStyle} />
      </Link>
      </Col>
      <Col>
      <Link to="/ViewFeature2">
      <img class="animated slideInUp" src={require('../lady.jpg')} id={imgStyle1} /></Link></Col>
      <Col >
      <Link to="/ViewFeature3">
      <img class="animated slideInUp" src={require('../leave.jpg')} id={imgStyle} /></Link></Col>
      <Col >
      <Link to="/ViewFeature4">
      <img class="animated slideInUp" src={require('../payroll.jpg')} id={imgStyle} /></Link></Col>

      </Row>

      <Link to="LandingPage"><p className={back}><Icon icon={thinLeft} size={20} style={{position:'relative',top:'0.4vw'}} />Back</p></Link>
      </div>
      </div>
        <FooterText/>
        </div>
    );
  }
}
