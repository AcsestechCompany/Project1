import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";
import {Link} from "react-router-dom";

var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
export class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      emailtest:'',
      showErrors:false,
      errors:false

    }
  }
  handleEmailChange = (evt) => {
  this.setState({
    email: evt.target.value ,
    errors:true
  });
  }



  render(){

    const { email } = this.state;
    const isEnabled =  re1.test(email);
    const emailcheck = re1.test(email);

    return(
      <div>

        <Header/>

         <div className={styles.displayContainer}>
         <form onSubmit={this.handleSubmit}>
  <input type="text" value={this.state.email}
  onChange={this.handleEmailChange}/>

  {this.state.errors ? <p> { emailcheck ? '' :  <p className={styles.errortext}> *Match the required email format </p> } </p> : ''}

  <br/><br/>

<button disabled={!isEnabled} class="btn btn-primary">SAVE</button>

  </form>

        </div>
        <Footer/>

    </div>
  );
  }
}
