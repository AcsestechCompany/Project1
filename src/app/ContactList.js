import React from "react";
import Contact from "./Contact";

export class ContactList extends React.Component {
  render() {
    return (
      <ul>
    {this.props.contacts.map((contact)=>{
      return <Contact contact={contact}/>
    })

    }

        </ul>
    )
  }
}
