import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,ptext,
  passwordheader,registration,forminput,formstyle,submit,lasttext,hyperlink1,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {FooterText} from "./FooterText";
import {Input,Button} from "reactstrap";

export class CreatePassword extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        psw:'',
        confirmpsw:'',
        validation:true

  }
}
  handlepsw = (evt) =>{
    this.setState({
      psw:evt.target.value
    });
  }
  handlepsw1 = (evt) =>{
    this.setState({
      confirmpsw:evt.target.value

    });
  }
  onSubmit(){
    const { psw,confirmpsw  } = this.state;
    if(psw != confirmpsw){
      return false;
    }
    else{
      return true;
    }
  }

  render(){
    const { psw,confirmpsw  } = this.state;
    var re1 = new RegExp("^([a-zA-Z0-9]{0-5})$");
    const isEnabled = re1.test(psw);
    const isEnabled1 = this.onSubmit();

    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={passwordheader}>Create Password</p>
      <p className={ptext}>Thank you for registering and acivating your account with <span style={{color:'red'}}>H</span>rms.</p>
      <form className={formstyle}>
      <div class="form-group">
          <Input type="password"  className={forminput} placeholder="Password" value={this.state.psw} onChange={this.handlepsw} required />
      </div>
  <div class="form-group">
      <Input type="password"  className={forminput} placeholder="Confirm" value={this.state.confirmpsw} onChange={this.handlepsw1} required />
  </div>
  {isEnabled1 ? '' : <p style={{color:'red'}}> Password Mismatch</p>}
  {(isEnabled && isEnabled1) ?
    <Link to="/DemoPage"><Button outline className={submit}>Submit</Button>
    </Link>
    :
      <Button outline className={submit} >Submit</Button>
   }
</form>
      </div>
      </div>
      </div>
      <FooterText/>
      </div>
    );
  }
}
