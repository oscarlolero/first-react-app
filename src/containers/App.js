//Tratar de que el render del APP sea lo mas pequeño posible, que la lista de persons se genere desde su
//propio componente, etc
import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliar';

class App extends Component {

    //LIFE CICLE HOOKS
/*    Call super(props) (PASO 1)
    Do: Set up state
    Don't: Cause side-effects*/
    constructor(props) {
        super(props);
        console.log('App.js constructor');
        this.state = {
            persons: [
                {id: 'asdsa', name: 'Oscar', age: 21},
                {id: 'asdsa2', name: 'Pedro', age: 22},
                {id: 'asdsa3', name: 'Ricky', age: 23}
            ],
            showPersons: false,
            showCockpit: true,
            changeCounter: 0
        };
    };

/*    A partir de React 16.3
    Cuando los props cambian, se puede hacer sync al state (PASO 2)
    Dont: Cause side-effects*/
    static getDerivedStateFromProps(props, state) {
        console.log('App.js getDerivedStateFromProps', props);
        return state;
    }

    //May cancel updating process! (intermedio)
    //Do:  Decide whether to continue or not
    //Don't: Cause side-effects
    //Se ejecuta después del getDerivedStateFromProps y antes del render()
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    // }

    /*    Se ejecuta al final de haberse renderizado todo'
        Paso 4
        Do: Cause side-effects
        Dont: update state (triggers re-render)*/
    componentDidMount() {
        console.log('App.js componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('app.js shouldComponentUpdate');
        return true;
    }

    //Do: Cause side-effects
    //Don't: update state (triggers re-render)
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('App.js componentDidUpdate');
    }
    
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
        //Manage state correctly when there are counters or any other vars that depends of prev state
        //https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/13556334#questions
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        });
    };

    deletePersonHandler = (personIndex) => {
        // OPCION 1
        //const persons = this.state.persons.slice();//crea una copia, es buena práctica porque si no devolveriamos una referencia del state original y eso es peligroso:0
        //OPCION 2
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        });


    };
//es mejor usar bind :v mas rapido

    //PASO 3
    render()  {
        console.log('App.js render');

        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons //Como solo es un componente, no necesita estar encerrado en div
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }
        //con hoc simple seria:
        //<WithClass classes={classes.App}>
        return (
            <Aux>
                <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
                {
                    this.state.showCockpit ? <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler}/> : null
                }
                {persons}
            </Aux>
        );
    }

    //Do: last-minute DOM ops
    //Don't: Cause side-effects
    //Se ejecuta después del render > update child component props y antes de componentDidUpdate(), es muy raro su uso
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    // }
}
export default withClass(App, classes.App);
