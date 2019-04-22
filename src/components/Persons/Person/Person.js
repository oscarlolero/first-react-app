import React, {Component} from 'react';
//import React, {Component, Fragment} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliar';
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
        //Por si no queremos envolver en un div
        // return (
        //     <Fragment>
        //         <h1 onClick={this.props.click}>Alo {this.props.name}, años: {this.props.age}</h1>
        //         <h2>{this.props.children}</h2>
        //         <input type="text" onChange={this.props.changed} value={this.props.name}/>
        //     </Fragment>
        // );
        //Por si no queremos envolver en un div
        // return (
        //     <Aux>
        //         <h1 onClick={this.props.click}>Alo {this.props.name}, años: {this.props.age}</h1>
        //         <h2>{this.props.children}</h2>
        //         <input type="text" onChange={this.props.changed} value={this.props.name}/>
        //     </Aux>
        // );
        //Por si no queremos envolver en un div
        // return [
        //         <h1 key="asd1" onClick={this.props.click}>Alo {this.props.name}, años: {this.props.age}</h1>,
        //         <h2 key="asd2" >{this.props.children}</h2>,
        //         <input key="asd2" type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
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
