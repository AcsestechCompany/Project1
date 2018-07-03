import React from "react";

export class Test extends React.Component{
  render(){
    return(
      <div><form action="mailto:someone@example.com" method="post" enctype="text/plain">
      Name:<br/>
      <input type="text" name="name"/><br/>
      E-mail:<br/>
      <input type="text" name="mail"/><br/>
      Comment:<br/>
      <input type="text" name="comment" size="50"/><br/><br/>
      <input type="submit" value="Send"/>
      <input type="reset" value="Reset"/>
      </form>
      </div>
    );
  }
}
