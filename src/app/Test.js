import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";

export class Test extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <div className={styles.displayContainer} >
      Testing Page
      <input placeholder="Date" class="textbox-n" type="date" onfocus="(this.type='date')"  id="date"/>
      </div>
      <Footer/>
      </div>
    );
  }
}
