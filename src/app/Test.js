import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";

export class Test extends React.Component{
  render(){
    return(
      <div>
      <Header/>

      <div className={styles.displayContainer}>
      Test
      </div>
      <Footer/>
      </div>
    );
  }
}
