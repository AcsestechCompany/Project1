import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displaycontainer,leavesdiv} from "./Employee.css";
import Icon from 'react-icons-kit';
import { filter } from 'react-icons-kit/fa/filter';
import { bin,search  } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import { ic_delete,ic_create  } from 'react-icons-kit/md';
import {displayContainer,pageHeading,hrStyle,activeStyle,orange,floatRight1,exampletable,buttonStyle} from "../Layout.css";
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../admin/LayoutAdmin.css";
import {labelStylepopup,savebtn1,btnstyle,savebtn} from "../Layout.css";
import {RequestedLeaves} from "./RequestedLeaves";
import {AddNewLeave} from "./AddNewLeave";
import {Balance} from "./Balance";

export class EmployeeLeaves extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      balance:false,
      addnew:false,
      requested:false
    }
  }
  balancefunc(){
    if(this.state.balance){
      return <div><Balance/></div>;
    }
  }
  addnewfunc(){
    if(this.state.addnew){
      return <div><AddNewLeave/></div>;

    }
  }

  requestedfunc(){
    if(this.state.requested){
      return <div><RequestedLeaves/></div>;
    }
  }
  balanceState(){
    this.setState({
      balance:true,
      addnew:false,
      requested:false
    });

  }
  addnewState(){
    this.setState({
      addnew:true,
      balance:false,
      requested:false
    });
  }
  requestedState(){
    this.setState({
      requested:true,
      balance:false,
      addnew:false
    })
  }
  render(){
    var balance = this.balancefunc();
    var requested = this.requestedfunc();
    var addnew = this.addnewfunc();
    return(
      <div>
      <EmployeeHeader/>
<div className={displaycontainer}>
<p className={pageHeading}>Leave List
</p>
<hr className={hrStyle}/>

     <div >
     <button class="btn btn-outline-warning" onClick={this.balanceState.bind(this)} id={savebtn}>Balance</button>
     <button class="btn btn-outline-warning" onClick={this.addnewState.bind(this)} id={savebtn}>Add New</button>
     <button class="btn btn-outline-warning" onClick={this.requestedState.bind(this)} id={savebtn}>Requested</button>
     </div>
     {balance}
     {addnew}
     {requested}
 </div>
 <Footer/>
 </div>


    );
  }
}
