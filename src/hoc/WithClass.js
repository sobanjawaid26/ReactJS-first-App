import React from 'react';

// This is one of two ways
// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// );

// This is the second way
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;