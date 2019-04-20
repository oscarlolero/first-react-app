import React, {Component} from 'react';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('Person.js rendering...');
        return (
            <div className={classes.Person}>
                <h1 onClick={this.props.click}>Alo {this.props.name}, años: {this.props.age}</h1>
                <h2>{this.props.children}</h2>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}
export default Person;
//probando RADIUM
/*
import React from 'react';
import Radium from 'radium';

import './Person.module.css';

const person = (props) => {
    const style = {
      '@media (max-width: 600px)': {
          width: '350px'
      }
    };
    return (
        <div className="Person" style={style}>
            <h1 onClick={props.click}>Alo {props.name}, años: {props.age}</h1>
            <h2>{props.children}</h2>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>   
    )
};
export default Radium(person);*/
