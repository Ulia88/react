import React, {useState} from 'react';

function App() {

    const [count1, setCount1] = useState(0);
    const [count10, setCount10] = useState(0);
    const [countR, setCountR] = useState(0);
    const randInt = () => Math.floor(Math.random() * 10 + 1);

    const add1 = () => {
        setCount1(count1 + 1);
    }
    const minus1 = () => {
        setCount1(count1 - 1);
    }

    const add10 = () => {
        setCount10(count10 + 10);
    };

    const minus10 = () => {
        setCount10(count10 - 10);
    };

    const addZeroRandom = () => {
        setCountR(countR + randInt());
    };

    const minusZeroRandom = () => {
        setCountR(countR - randInt());
    };

    return (

        <div>
            <h1> I'M FRONT - END DEV</h1>

            <button onClick={add1}>Add 1</button>
            {count1}
            <button onClick={minus1}>Minus 1</button>

            <hr/>

            <button onClick={add10}>Add 10 </button>
            {count10}
            <button onClick={minus10}>Minus 10 </button>

            <hr/>

            <button onClick={addZeroRandom}>Random Plus</button>
            {countR}
            <button onClick={minusZeroRandom}>Random Minus</button>

        </div>
    );
}

export default App;
