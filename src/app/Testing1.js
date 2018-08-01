import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";

export class Testing1 extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <div className={styles.displayContainer}>
      Testing 1
      </div>
      <Footer/>
      </div>
    );
  }
}
