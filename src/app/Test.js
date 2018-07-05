import React from "react";
const people = [
  { id: 1,
    first: 'Sarah',
    last: 'Johnson',
    age:25
  },
  { id: 2,
    first: 'Caldwell',
    last: 'Thompson',
    age: 32
  },
  { id: 3,
    first: 'Hart',
    last: 'Maynard',
    age:45
  },
  { id: 4,
    first: 'David',
    last: 'jayson',
    age:45
  },
  { id: 5,
    first: 'Kate',
    last: 'jenifer',
    age:45
  },
  { id: 6,
    first: 'Jeff',
    last: 'winslet',
    age:45
  }
]
function searchingFor(term){
  return function(x){
    return x.last.toLowerCase().includes(term.toLowerCase()) || x.first.toLowerCase().includes(term.toLowerCase()) ;
  }
}


export class Test extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        people: people,
        term:''
      }
      this.searchHandler = this.searchHandler.bind(this)

  }
  searchHandler(event){
    this.setState({
      term: event.target.value
    })
  }
  render(){
    return(
      <div>
      <form>
      <input type="text"
onChange={this.searchHandler}
       />
      </form>
      <table class="table table-bordered">
      <tr>
      <th>First Name </th>
      <th> Last Name </th>
      <th> Age </th>

      </tr>
{
this.state.people.filter(searchingFor(this.state.term)).map(function(person){
    return (


      <tr  key={person.id}>
      <td>{person.first}</td>
      <td>{person.last}</td>
      <td> {person.age} </td>
      </tr>


    )
  })
}
</table>



       </div>
    );
  }
}
