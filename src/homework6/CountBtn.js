import React from 'react';

function CountBtn(props) {

    const send = () => {
        props.action(props.value + props.count)
    }


    return (
        <button onClick={send}>{props.value}</button>

    );
}

export default CountBtn;
