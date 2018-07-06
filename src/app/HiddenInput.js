import React from "react";
import {Form,Input} from "reactstrap";
import styles from "./employee/LayoutEmployee.css";

export class HiddenInput extends React.Component{
  render(){
    return(
      <Form>
      <Input type="text" className={styles.inputstyledepartment}/>
      </Form>
    );
  }
}
