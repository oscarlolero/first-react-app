import React, {useEffect, useRef} from 'react'; //react hook
import classes from "./Cockpit.module.css";
//Como no se usa el state, se crea una funcion y no una class extends
//Como es un functional component, no se pueden usar los metodos de componentShouldUpdate etc, se usa useState
const Cockpit = (props) => {
    //Cuando se cargue la pag que automaticamente se presione el boton
    const toggleBtnRef = useRef(null);


    //useState()
    //useEffect
    //Runs on every update/every render cycle
    //Combinacion de componentDidMount and componentDidUpdate
/*    useEffect( () => {
        console.log('Cockpit.js useEffect');
        //Http request...
        console.log('CACA');
    }, [props.persons]); //solo se ejecuta el codigo de arriba si props.persons cambia
    //Se pueden agregar varios useEffect*/

    useEffect( () => {
        console.log('Cockpit.js useEffect');
        //Http request...
        toggleBtnRef.current.click();
        return () => { //el equivalente de componentWillUnmount(), return es opcional
            //RETURN se ejecutra antes del useEffect pero después del render cycle
            console.log('Cockpit cleanup work in useEffect');
        }
    }, []); //no depende de nada, solo correra una vez, se ejecutara el return solo si el componente de desmonta
    //Se pueden agregar varios useEffect

    useEffect(() => {
        console.log('Cockpit.js 2nd useEffect');
        return () => { //el equivalente de componentWillUnmount()
            console.log('Cockpit cleanup work in 2nd useEffect');
        }
    });

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Show persons
            </button>
        </div>
    );
};

export default React.memo(Cockpit);