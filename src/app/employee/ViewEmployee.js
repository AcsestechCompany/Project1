import React from "react";
import {empDesign,empPhone,empId,pagination} from "./LayoutEmployee.css";
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import { filter } from 'react-icons-kit/fa/filter';
import { smallRight } from 'react-icons-kit/entypo/';
import {pageHeading,hrStyle,arrow,orange,floatRight,buttonStyle,displayContainer} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class ViewEmployee extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>
Employee List<span  className={floatRight}> <Icon icon={search} /><Icon icon={filter} /></span></p>
<hr className={hrStyle}/>
<Link to="/AddEmployee"><button className="btn btn-outline-warning" id={buttonStyle}>
Add </button></Link>
      <div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}}>
      <CardTemplate text={"Albert Walker"}>
       <p className={empDesign}>Test Engineer</p>
       <p className={empId}>E153</p>
       <p className={empPhone}>9786456787</p>
      </CardTemplate>

<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test Engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test Engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"david"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Carol"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
</div>
<div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}}>

<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test Engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>

</div>
<div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}}>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test Engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>

<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"david"}>
<p className={empDesign}>Test engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Carol"}>
<p className={empDesign}>Test engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>

</div>
<p className={pagination}><span className={orange}>1</span> 2 3 4 5 ></p>

  </div>
  <Footer/>
  </div>
    );
  }
}
