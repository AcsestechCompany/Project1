import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";

export class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  handleClick(){

  {
    let me = 'go';  // globally scoped
    var i = 'able';
      console.log(me);
        console.log(i + 'inside block');
  }

  console.log(i + 'outside block inside function');

  }
  render(){
    return(
      <div>
      <Header/>
      <div className={styles.displayContainer}>
      <button class="btn btn-primary" onClick={this.handleClick.bind(this)}>Click ME !</button>
      </div>
      <Footer/>
      </div>
    );
  }
}
