import React from 'react';

const withClass = (WrappedComponent, className) => { //los argumentos que se necesiten
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};
// const withClass = props => ( //hoc simple
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

export default withClass;