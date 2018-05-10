import React from "react";
import {Row,Col,Card,CardText} from "reactstrap";
import {cardTextStyle,linkStyle,cardStyle,firstrowstyle} from "../Layout.css";
import {Link} from "react-router-dom";

import {imgStyle} from "../employee/LayoutSettings.css";
import { users } from 'react-icons-kit/icomoon/users';




export class FirstRow extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isStart: false,
      elapsed: 0,
      diff: 0,
      laps: []
    }
  }
  componentWillUnmount() { // clear timer
    clearInterval(this.state.timer);
    this.setState({timer: undefined});
  }
  tick() {
    var elapsed = Date.now() - this.state.start + this.state.diff;
    this.setState({elapsed: elapsed});
  }
  onClick() {
    if(!this.state.isStart) { // start
      var timer = setInterval(this.tick.bind(this), 33);
      this.setState({
        isStart: true,
        timer: timer,
        start: new Date(),
      });
    } else { // pause
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
        isStart: false,
        diff: this.state.elapsed,
      });
    }
  }
  getTimeSpan(elapsed) { // 754567(ms) -> "12:34.567"
    var m = String(Math.floor(elapsed/1000/60)+100).substring(1);
    var s = String(Math.floor((elapsed%(1000*60))/1000)+100).substring(1);
    var ms = String(elapsed % 1000 + 1000).substring(1);
    return m+":"+s;
  }
  reset() {
    clearInterval(this.state.timer);
    this.setState({
      timer: undefined,
      isStart: false,
      elapsed: 0,
      diff: 0,
      laps: [],
    });
  }

  render() {
    return(
      <Row className={firstrowstyle}>
       <Col style={{marginRight:'-1vw'}}>
        <Card body inverse className={cardStyle} style={{ backgroundColor: '#A992E2',cursor:'pointer'}} onClick={this.onClick.bind(this)}>
        <CardText className={cardTextStyle} >
         {this.state.isStart ? "CHECK OUT" : "CHECK IN"} {this.getTimeSpan(this.state.elapsed)}
        </CardText>
        </Card>
        </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/NewJoiners" className={linkStyle}>
           <Card body inverse className={cardStyle} style={{ backgroundColor: '#EC6F59' }}>
           <CardText className={cardTextStyle}>Attendance</CardText>
         </Card></Link>
         </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/Leavers" className={linkStyle}>
           <Card body inverse className={cardStyle} style={{ backgroundColor: '#54BAE0'}}>
           <CardText className={cardTextStyle}>Leaves <p><b>1</b></p></CardText>
         </Card></Link>
         </Col>
       <Col style={{marginRight:'-1vw'}}><Link to="/AdminUsers" className={linkStyle}>
         <Card body inverse className={cardStyle} style={{ backgroundColor: '#F7C65F'}}>
         <CardText className={cardTextStyle}></CardText>
       </Card></Link>
       </Col>

     </Row>
    );
  }
}
