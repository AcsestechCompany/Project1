import React from "react";
import {empDesign,empPhone,empId,pagination} from "./LayoutEmployee.css";
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import { filter } from 'react-icons-kit/fa/filter';
import { smallRight } from 'react-icons-kit/entypo/';
import {arrow,orange,floatRight} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class EmployeeList1 extends React.Component{
  render() {
    return(
      <div>
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
<CardTemplate text={"David"}>
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
</div>



    );
  }
}
