import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";
import {Link} from "react-router-dom";

var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
  var re2 = new RegExp("^([a-zA-Z]{0,25}(?: [a-zA-Z]+){0,2})$");
export class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      emailtest:'',
      name:'',
      showErrors:false,
      errors:false

    }
  }
  handleEmailChange = (evt) => {
  this.setState({
    email: evt.target.value,
    errors:!this.state.errors

  });
  }
  handleTextChange = (evt) => {
    this.setState({
      name: evt.target.value,
      errors:!this.state.errors

    })
  }

  render(){

    const { email,name } = this.state;
    const isEnabled =  re1.test(email);
    const namecheck = re2.test(name);
    const emailcheck = re1.test(email);

    return(
      <div>

        <Header/>

         <div className={styles.displayContainer}>
         <form onSubmit={this.handleSubmit}>
         <div>
         <div class="col-md-3">
  <input type="text" value={this.state.email}
  placeholder="Email ID"
  onChange={this.handleEmailChange}/>
  {this.state.errors ? <p> { emailcheck ? '' :  <p className={styles.errortext}> *Email cannot contain letters or special characters </p> } </p> : ''}
</div>

<div class="col-md-3">
  <input type="text" value={this.state.name}
  placeholder="Name"
  onChange={this.handleTextChange}/>
    {this.state.errors ? <p> { namecheck ? '' :  <p className={styles.errortext}> *Name cannot contain letters or special characters </p> } </p> : ''}
  </div>

  </div>
    <br/><br/>

<button disabled={!isEnabled} class="btn btn-primary">SAVE</button>

  </form>

        </div>
        <Footer/>

    </div>
  );
  }
}
