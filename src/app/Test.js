import React from "react";



export class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        secondsElapsed:59
    }
  }
  getHours(){
    return Math.floor(this.state.secondsElapsed/3600);
  }
  getMinutes(){
    return Math.floor(this.state.secondsElapsed/60);
  }
  getSeconds(){
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }



  render(){

    return(
      <div>Welcome {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</div>



    );
  }
}
