import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,registrationheader,registration,forminput,submit,lasttext,hyperlink,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {FooterText} from "./FooterText";
import {Input,Button} from "reactstrap";

export class SignUp extends React.Component{
  render(){
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={registrationheader}>Registration</p>
      <form>
      <div class="form-group">
      <Input type="text"  className={forminput} placeholder="Name" />
      </div>
  <div class="form-group">
  <Input type="email"  className={forminput} placeholder="Email ID" />
  </div>
  <div class="form-group">
  <Input type="password" className={forminput} placeholder="Password" />
  </div>
  <Link to="/VerifyAccount"><Button outline className={submit}>Submit</Button>
  </Link>
</form>
<p className={lasttext}>Existing user? <Link to="/Login" className={hyperlink}>Log In</Link></p>
      </div>
      </div>
      </div>
    <FooterText/>
      </div>
    );
  }
}
