import React from "react";

export class Contact extends React.Component {
  render() {
    return (

          <li>
          {this.props.contact.name}
          {this.props.contact.phone}
          </li>

    )
  }
}
