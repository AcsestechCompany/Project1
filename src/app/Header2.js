import React from "react";
import {Icon} from "react-icons-kit";
import {menu} from 'react-icons-kit/entypo/';
import { userCircle,angleDown, bell } from 'react-icons-kit/fa';
import {ic_settings} from "react-icons-kit/md";
import {Link} from "react-router-dom";
import {navbar,sidenav,mainmenu,sidemenu,openslide,btnclose,mainmenuicon,iconcolor} from "./Header.css";
import {downIcon,dropDownStyle,navitemStyle,navitemStyleHome,navspace,dropDownClaims,
  dropDownLeaves,dropDownPayroll,dropItem,hyperLink,linkStyle1
} from "./Layout.css";
import {DelayInput} from "react-delay-input";
import {NavLink} from "react-router-dom";
import {UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu,NavItem} from "reactstrap";
export class Header2 extends React.Component{
  constructor(props){
    super(props);
      this.state={
        open:false

      }

  }
  openfunc(){
    if(this.state.open){
      return <div className={sidenav}>
      <a id={btnclose} class="btn-close" onClick={this.closestate.bind(this)} >&times;</a>
      <a href="#">HOME</a>
      <a href="#">EMPLOYEES<Icon icon={angleDown} className={downIcon} /></a>
      <a href="#">LEAVES & TIME<Icon icon={angleDown} className={downIcon} /></a>
      <a href="#">CLAIMS<Icon icon={angleDown} className={downIcon} /></a>
      <a href="#">PAYROLL<Icon icon={angleDown} className={downIcon} /></a>
      </div>;
    }

  }

  openstate(){
    this.setState({
      open:true
    })
  }
  closestate(){
    this.setState({
      open:false
    })
  }

  render(){
var open = this.openfunc()

  return(
<div>
<nav className={navbar}>
  <span class={openslide}>
  <Icon icon={menu}  size={25} style={{color:'white'}} onClick={this.openstate.bind(this)}/>
  </span>


<ul id={mainmenuicon}>
<li><Icon icon={bell}/></li>
<li><Link to="/CompanyDetails"><Icon icon={ic_settings} className={iconcolor}/></Link></li>
<li><Link to="/Profile"><Icon icon={userCircle} className={iconcolor}/></Link></li>
</ul>
</nav>
<span>{open}</span>


</div>

  );
}
}
