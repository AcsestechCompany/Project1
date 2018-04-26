import React from "react";
import {empDesign,empPhone,empId} from "./LayoutEmployee.css";
import {pageHeading,hrStyle,displayContainer,floatRight1} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class Leavers extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Leavers

<span  className={floatRight1}>
<form >
	<input type="search"  placeholder="Search" />
</form>

</span></p>
<hr className={hrStyle}/>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
  </div>
  <Footer/>
  </div>
    );
  }
}
