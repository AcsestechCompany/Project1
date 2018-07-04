import React from "react";
import styles from "./employee/LayoutEmployee.css";

export class Test extends React.Component{
  render(){
    return(
      <div>
      <label class="lblForm">FirstName</label><br />
<input type="text" required="required" className={styles.inputstyle1} pattern="[a-z]{2,10}"/><br/>
<label class="lblForm">FirstName</label><br />
<input type="text" required="required" className={styles.inputstyle2} pattern="[a-z]{3,10}"/>
 </div>
    );
  }
}
