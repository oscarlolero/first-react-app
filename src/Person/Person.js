import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>Alo {props.name}, años: {props.age}</h1>
            <h2>{props.children}</h2>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
export default person;
//probando RADIUM
/*
import React from 'react';
import Radium from 'radium';

import './Person.css';

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
