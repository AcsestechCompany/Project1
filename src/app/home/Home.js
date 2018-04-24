import React from "react";
import {displayHome} from "../Layout.css";
import {FirstRow} from "./FirstRow";
import {SecondRow} from "./SecondRow";
import {ThirdRow} from "./ThirdRow";
import {FourthRow} from "./FourthRow";
import {Header1}  from "../Header1";
import {Footer} from "../Footer";

export class Home extends React.Component {

  render() {

     return(
       <div>
       <Header1/>
       <div className={displayHome} data-spy="scroll">
        <FirstRow/>
      <SecondRow/>
      <ThirdRow/>
      <FourthRow/>
      </div>
        <Footer/>
   </div>


     );
  }
}
