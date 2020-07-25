import React from 'react';

function Counter(props) {

    console.log(props)
    let {value, action} = props;

    const send = () => {
        action(value)
    }

    return (
        <button onClick={send}>{value}</button>

    );
}

export default Counter;
