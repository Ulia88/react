import React, {useState} from "react";
import CountBtn from "./CountBtn";

function Row(props) {
    const [count, setCount] = useState(10);

    const updateCounter = (n) => {
        setCount(count + n);
    }

    return (
        <div>
            {/*{CountBtn({'value': 4, 'count': count, 'updateCounter': updateCounter})}*/}
            <CountBtn value={+3} action={updateCounter}/>
            <CountBtn value={+2} action={updateCounter}/>
            <CountBtn value={+1} action={updateCounter}/>
            {count}
            <CountBtn value={-3} action={updateCounter}/>
            <CountBtn value={-2} action={updateCounter}/>
            <CountBtn value={-1} action={updateCounter}/>
        </div>
    );
}

function App() {
    const [currentCounters, setCurrentCounters] = useState(3);
    return (
        <div>
            <div>
                <p><b>~*~*~ I'm a Front-End Developer with Git ~*~*~ </b></p>
                {Array(currentCounters).fill(Row())}
            </div>

            <hr/>
            <button onClick={() => setCurrentCounters(currentCounters+1)}>ADD NEW COUNTER</button>
            <button onClick={() => setCurrentCounters(Math.max(currentCounters-1, 1))}>DELETE COUNTER</button>

        </div>
    );
}


export default App;
