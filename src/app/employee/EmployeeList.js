import React from "react";
import styles from "./LayoutEmployee.css";
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import { filter } from 'react-icons-kit/fa/filter';
import { smallRight } from 'react-icons-kit/entypo/';
import {arrow,orange,floatRight} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {CardTemplateTab} from "./CardTemplateTab";


export class EmployeeList extends React.Component{
  render() {
    return(
      <div>
      <div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}} id={styles.listfortab}>
      <CardTemplateTab text={"Albert Walker"}>
       <p className={styles.empDesign}>Test Engineer</p>
       <p className={styles.empId}>E153</p>
       <p className={styles.empPhone}>9786456787</p>
      </CardTemplateTab>
      <CardTemplateTab text={"Albert Walker"}>
      <p className={styles.empDesign}>Test Engineer</p>
      <p className={styles.empId}>E153</p>
      <p className={styles.empPhone}>9786456787</p>
      </CardTemplateTab>
      <CardTemplateTab text={"Albert Walker"}>
      <p className={styles.empDesign}>Test Engineer</p>
      <p className={styles.empId}>E153</p>
      <p className={styles.empPhone}>9786456787</p>
      </CardTemplateTab>
      <CardTemplateTab text={"Albert Walker"}>
      <p className={styles.empDesign}>Test Engineer</p>
      <p className={styles.empId}>E153</p>
      <p className={styles.empPhone}>9786456787</p>
      </CardTemplateTab>

      </div>
      <div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}} id={styles.listfortab}>


      <CardTemplateTab text={"Rahul"}>
       <p className={styles.empDesign}>Test Engineer</p>
       <p className={styles.empId}>E153</p>
       <p className={styles.empPhone}>9786456787</p>
      </CardTemplateTab>
      <CardTemplateTab text={"Albert Walker"}>
      <p className={styles.empDesign}>Test Engineer</p>
      <p className={styles.empId}>E153</p>
      <p className={styles.empPhone}>9786456787</p>
      </CardTemplateTab>
      <CardTemplateTab text={"Albert Walker"}>
      <p className={styles.empDesign}>Test Engineer</p>
      <p className={styles.empId}>E153</p>
      <p className={styles.empPhone}>9786456787</p>
      </CardTemplateTab>
      <CardTemplateTab text={"Albert Walker"}>
      <p className={styles.empDesign}>Test Engineer</p>
      <p className={styles.empId}>E153</p>
      <p className={styles.empPhone}>9786456787</p>
      </CardTemplateTab>
      </div>

      <div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}} id={styles.listforlaptop}>
      <CardTemplate text={"Albert Walker"}>
      <p className={styles.empDesign}>Test Engineer</p>
      <p className={styles.empId}>E153</p>
      <p className={styles.empPhone}>9786456787</p>
      </CardTemplate>

<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"david"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Carol"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
</div>
<div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}} id={styles.listforlaptop}>

<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>

</div>
<div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}} id={styles.listforlaptop}>
<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>

<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"david"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Carol"}>
<p className={styles.empDesign}>Test Engineer</p>
<p className={styles.empId}>E153</p>
<p className={styles.empPhone}>9786456787</p>
</CardTemplate>
</div>
</div>
    );
  }
}
