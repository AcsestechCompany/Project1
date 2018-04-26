import React from "react";

import {empDesign,empPhone,empId} from "./LayoutEmployee.css";
import {buttonStyle,hrStyle,pageHeading,displayContainer,floatRight1} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class NewJoiners extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>New Joiners
<span  className={floatRight1}>
<form >
	<input type="search"  placeholder="Search" />
</form>

</span>
</p>
<hr className={hrStyle}/>

      <div class="row" style={{marginLeft:'0.4vw',marginTop:'3vw'}}>

 <CardTemplate text={"Albert Walker"}>
  <p className={empDesign}>Test engineer</p>
  <p className={empId}>E153</p>
  <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
</div>
  </div>
  <Footer/>
  </div>
    );
  }
}
