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
        return true;
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