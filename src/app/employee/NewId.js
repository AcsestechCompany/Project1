import React from "react";

export class NewID extends React.Component{
  function(prefix='id') {
      lastId++;
      return `${prefix}${lastId}`;
  }
  render(){
      var lastId = 0;
      var prefix = 'HR';

    return(



    );
  }
}
