//Tratar de que el render del APP sea lo mas pequeño posible, que la lista de persons se genere desde su
//propio componente, etc
import React, { Component } from 'react';
//import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            {id: 'asdsa', name: 'Oscar', age: 21},
            {id: 'asdsa2', name: 'Pedro', age: 22},
            {id: 'asdsa3', name: 'Ricky', age: 23}
        ]
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

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
    };

    deletePersonHandler = (personIndex) => {
        // OPCION 1
        //const persons = this.state.persons.slice();//crea una copia, es buena práctica porque si no devolveriamos una referencia del state original y eso es peligroso:0
        //OPCION 2
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };
//es mejor usar bind :v mas rapido
    render()  {
        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons //Como solo es un componente, no necesita estar encerrado en div
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }

        return (
            <div>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}
export default App;
