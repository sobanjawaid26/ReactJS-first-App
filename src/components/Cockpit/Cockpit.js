import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HttpRequest
        toggleBtnRef.current.click();
        // const timer = setTimeout(() => {
        //     alert('Saved Data to Cloud');
        // }, 1000);
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work is useEffect');
        }
    }, []);
    // [props.persons] is added in order to make sure that useEffect comes into play only when the person changes

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    })

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons)
        btnClass = classes.Red;

    if(props.personsLength <= 2)
        assignedClasses.push(classes.red);
    if(props.personsLength <= 1)
        assignedClasses.push(classes.bold);
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default React.memo(cockpit);