import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import styles from "./Layout.css";

export class Test extends React.Component{
  constructor() {
      super();
      this.state = {
        email: '',
        password: '',
      };
    }

    handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value });
    }

    handlePasswordChange = (evt) => {
      this.setState({ password: evt.target.value });
    }

    handleSubmit = () => {
      const { email, password } = this.state;
      alert(`Signed up with email: ${email} password: ${password}`);
    }

    render() {
      const { email, password } = this.state;
      const isEnabled =
            email.length > 0 &&
            password.length > 0;
      return (
        <div>
        <Header/>
        <div className={styles.displayContainer}>
        <form onSubmit={this.handleSubmit}>

          <input
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}

          />

          <input
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <button disabled={!isEnabled} class="btn btn-primary">Sign up</button>

        </form>
      </div>
           <Footer/>
      </div>
    );
  }
}
