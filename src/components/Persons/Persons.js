import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    //Como no hay state, no se recomienda usar esta funcion 1
    //Do: Sync state to props
    //Dont: Cause side-effects
    // static getDerivedStateFromProps(props, state) {
    //     console.log('Persons.js getDerivedStateFromProps');
    //     return state;
    // }

    //May cancel updating process! 2
    //Do: Decide whether to continue or not
    //Dont: Cause side-effects
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons.js shouldComponentUpdate');
        //los dos apuntan a punteros, es muy importante entender este video:
        //https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/13556300#questions/6411320
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }
    //5
    //Do: Last-minute dom ops
    //Don't: Cause side-effects
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    //Do: Cause side-effects
    //Dont: Update state (triggers re render)
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons.js componentDidUpdate');
        console.log(snapshot);
    }

    //su equivalente en functional components, se hace en el useEffect, haciendo un return a una funcion anonima
    componentWillUnmount() {
        console.log('Persons.js componentWillUnmount');
    }

    //3
    render() {
        console.log('Persons.js rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
    //Update child component props 4
}

export default Persons;