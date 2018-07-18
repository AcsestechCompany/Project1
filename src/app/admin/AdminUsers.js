import React from "react";
import {CardTemplate} from "../employee/CardTemplate";
import {empDesign,empPhone,empId} from "../employee/LayoutEmployee.css";
import {pageHeading,hrStyle,displayContainer} from "../Layout.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class AdminUsers extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p><span className={pageHeading}>Admin Users</span></p>
<hr className={hrStyle}/>
      <div class="row" style={{marginLeft:'0.4vw',marginTop:'5vw'}}>
 <CardTemplate text={"Kate"} img={require('../images/user1.png')}>
  <p className={empDesign}>HR Admin</p>
  <p className={empId}>E153</p>
  <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"David"} img={require('../images/user.png')}>
 <p className={empDesign}>Product Admin</p>
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
