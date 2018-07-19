enablefunc(){
  if(this.state.enable){
    return <div><div class="form-check">
      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
      style={{marginTop:'0.7vw'}}/>
      <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.4vw',marginLeft:'1vw'}} id={styles1.radiocheck}>
        On Holidays
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
      <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw'}} id={styles1.radiocheck}>
      On Week Off
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
      <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.4vw',marginLeft:'1vw'}} id={styles1.radiocheck}>
       Daily
      </label>
    </div></div>;
  }
}
disablefunc(){
  if(this.state.disable){
    return <div></div>;
  }
}
<a href={"mailto:" + this.state.email} >email</a>
