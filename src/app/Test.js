import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";

export class Test extends React.Component{
  handleClick(){
    window.location = "#/PersonalDetails";
  }


  render(){
    return(
      <div>
      <Header/>
      <div className={styles.displayContainer}>
    <button class="btn btn-primary" onClick={this.handleClick.bind(this)}>Go to Website </button>
      </div>
      <Footer/>
      </div>
    );
  }
}
