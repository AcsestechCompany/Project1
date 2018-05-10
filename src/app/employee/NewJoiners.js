import React from "react";
import Icon from "react-icons-kit";
import {filter} from "react-icons-kit/fa/filter";
import {empDesign,empPhone,empId} from "./LayoutEmployee.css";
import {buttonStyle,hrStyle,pageHeading,displayContainer,floatRight1,btnstyle} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class NewJoiners extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>New Joiners

</p>
<hr className={hrStyle}/>
<span  className={floatRight1}>
<form class="form-row">

	<input type="search"  placeholder="Search" />
  <div class="dropdown" style={{position:'relative',left:'-1vw'}} >
    <button class="btn  btn-outline-light" type="button" id={btnstyle} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <Icon icon={filter} />
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item">New Joinees</a>
      <a class="dropdown-item">Based on Department</a>
      <a class="dropdown-item">Based on ID</a>
      <a class="dropdown-item">Based on Designation</a>
    </div>
  </div>
</form>
</span>

      <div class="row" style={{marginLeft:'0.4vw',marginTop:'5vw'}}>

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
