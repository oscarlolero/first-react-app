import React, {Component} from 'react';
import PropTypes from 'prop-types'; //for functional and class based components

//import React, {Component, Fragment} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliar';
import withClass from '../../../hoc/withClass';
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElement.focus();//con esto se hace focus al ultimo elemento añadido en la lista de persons
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js rendering...');
        return (
            <Aux>
                <h1 onClick={this.props.click}>Alo {this.props.name}, años: {this.props.age}</h1>
                <h2>{this.props.children}</h2>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
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

Person.propTypes = {
    click: PropTypes.func, //pointer to function
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);
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
