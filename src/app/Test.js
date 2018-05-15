import React from "react";
import {testdiv,imageoverlay,dropdownmenu,border,pagecontent,hrid,example1,trstyle,btnstyle,borderdiv} from "./Layout.css";
import {divider} from "./EmployeeModule/Employee.css";
import {DelayInput} from 'react-delay-input';


export class Test extends React.Component{

  state = {
     value: '',
     value1:''
   };
  render(){

    return(

<div className={pagecontent}>



<div>
      <DelayInput
        minLength={2}
        onChange={event => this.setState({value: event.target.value})}
        />
        <select type="text" onChange={event => this.setState({value1: event.target.value})}>
         <option>JAN</option>
         <option>FEB</option>
      </select>

      <p>{this.state.value}</p>

    </div>



</div>
    );
  }


}
