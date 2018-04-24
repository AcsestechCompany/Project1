import React from "react";
import Icon from "react-icons-kit";
import {Card,CardText} from "reactstrap";
import {holidayTextR,holidayTitleR,holidayDayR} from "./home/Home.css";
import {carousel,labelStyle1,inputstyle} from "./Layout.css";
import {imgStyle} from "./registration/LayoutRegistration.css";


import {displayContainer,orange,item,indicator,exampletable,tableinput} from "./Layout.css";
export class Test extends React.Component{


  render() {

    return(

      <div className={displayContainer}>
<img class="animated slideInDown" src={require('./gogles.jpg')} id={imgStyle} />

      </div>
    );
  }
}
