import React from 'react';
const btn = {
    color: 'black',
    fontSize: '18px',
    background: 'gold',
    marginTop: '10px',
    backgroundImage: 'linear-gradient(orange, yellow)',
    borderRadius: '8px'
}

function Counter(props) {


    return (

        <div>
            {/*Index: ({props.index})*/}
            <button onClick={() => props.plus(props.index)} style={btn}> +</button>
            {props.count}
            <button onClick={() => props.minus(props.index)} style={btn}> -</button>
            <button onClick={() => props.reset(props.index)} style={btn}> Reset</button>
            <button onClick={() => props.deleteRow(props.index)} style={btn}> Delete</button>

        </div>


    );
}

export default Counter;
