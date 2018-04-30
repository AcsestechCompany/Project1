import React from "react";
import {imgStyle,cardStyle,cardTitle,cardText} from "./LayoutSettings.css";
import {empName} from "./LayoutEmployee.css";

export class CardTemplate1 extends React.Component{
  render() {
    return(
      <div class="card" id={cardStyle} style={{marginRight:'2vw'}}>
      <img class="card-img-top" src={require('./user.png')} id={imgStyle}
   />
       <div class="card-body">
         <h5 class="card-title" id={cardTitle} className={empName}>
           {this.props.text}
         </h5>
         <div class="card-text" id={cardText}>
          {this.props.children}
          </div>

       </div>
      </div>
    );
  }
}
