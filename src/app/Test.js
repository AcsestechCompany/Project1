import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";
import {Link} from "react-router-dom";


export class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      emailtest:''
    }
  }
  handleEmailChange = (evt) => {

  this.setState({ email: evt.target.value });
  }


  render(){
var re = new RegExp("^([a-z0-9]{5,})$");
var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
    const { email } = this.state;
    const isEnabled =  re1.test(email);


    return(
      <div>
        <Header/>
         <div className={styles.displayContainer}>
         <form onSubmit={this.handleSubmit}>
  <input type="text" value={this.state.email}
  onChange={this.handleEmailChange}/>

  <Link to="/Home"><button disabled={!isEnabled} class="btn btn-primary">SAVE</button></Link>
  </form>
        </div>
        <Footer/>
    </div>
  );
  }
}
