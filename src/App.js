import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: 'asdsa', name: 'Oscar', age: 21},
      {id: 'asdsa2', name: 'Pedro', age: 22},
      {id: 'asdsa3', name: 'Ricky', age: 23}
    ]
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //evitar mutar, por lo tanto se usa asi:
    const person = {
      ...this.state.persons[personIndex]
    };
 
    //const person = Object.assign({}, this.state.persons[personIndex]); // alternativa

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({ persons: persons }); //es mucho código, pero es la forma más eficiente
  }

  deletePersonHandler = (personIndex) => {
    // OPCION 1
    //const persons = this.state.persons.slice();//crea una copia, es buena práctica porque si no devolveriamos una referencia del state original y eso es peligroso:0
    //OPCION 2
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
//es mejor usar bind :v mas rapido
  render()  {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show persons</button> 
        {persons}
      </div>
    );
  }
}

export default App;