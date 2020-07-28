import React, {useState} from 'react';
import Counter from './Counter';

const btnApp = {
    color: 'black',
    fontSize: '18px',
    backgroundImage: 'linear-gradient(orange, yellow)',
    marginTop: '10px',
    borderRadius: '8px'
}

function App() {
    const [counters, setCounters] = useState([4, 11, 34]);


    const addCounter = () => {
        const r = Math.round(Math.random() * 10);
        setCounters([...counters, r])
    };

    const plusOne = (index) => {
        console.log('plusOne', index);
        const plusAdded = [...counters];
        plusAdded [index]++;
        setCounters(plusAdded);
    };

    const minusOne = (index) => {
        console.log('plusOne', index);
        const minusAdded = [...counters];
        minusAdded [index]--;
        setCounters(minusAdded);

    };

    const resetOne = (index) => {
        const resetCurrent = [...counters];
        resetCurrent[index] = 0;
        setCounters(resetCurrent);

    };

    const deleteOneRow = (index) => {
        const deleteRow = counters.filter((el, i) => {
            return i !== index
        })
        setCounters(deleteRow);
    }

    const resetAll = () => {
        const letReset = [...counters].map(el => 0);
        setCounters(letReset);

    }

    return (
        <div align='center'>
            {/*<Counter count={+3}/>*/}
            {/*<Counter count={+8}/>*/}

            {counters.map((el, i) => (
                <Counter count={el}
                         key={i}
                         index={i}
                         plus={plusOne}
                         minus={minusOne}
                         reset={resetOne}
                         deleteRow={deleteOneRow}
                />
            ))}

            <button onClick={addCounter} style={btnApp}> ADD Counter</button>
            {<button onClick={resetAll} style={btnApp}> RESET ALL </button>}


        </div>
    );
}

export default App;
