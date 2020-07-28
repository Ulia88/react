import React, {useState} from "react";
import CountBtn from "./CountBtn";

function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const updateCounter1 = (n) => {
        setCount(n);
    }
    const updateCounter2 = (n) => {
        setCount2(n);
    }
    const updateCounter3 = (n) => {
        setCount3(n);
    }


    return (
        <div>
            <p><b>~*~*~ I'm a Front-End Developer with PASV ~*~*~ </b></p>

            <div>
                <CountBtn value={+3} count={count} action={updateCounter1}/>
                <CountBtn value={+2} count={count} action={updateCounter1}/>
                <CountBtn value={+1} count={count} action={updateCounter1}/>
                {count}
                <CountBtn value={-3} count={count} action={updateCounter1}/>
                <CountBtn value={-2} count={count} action={updateCounter1}/>
                <CountBtn value={-1} count={count} action={updateCounter1}/>
            </div>

            <div>
                <CountBtn value={+3} count={count2} action={updateCounter2}/>
                <CountBtn value={+2} count={count2} action={updateCounter2}/>
                <CountBtn value={+1} count={count2} action={updateCounter2}/>
                {count2}
                <CountBtn value={-3} count={count2} action={updateCounter2}/>
                <CountBtn value={-2} count={count2} action={updateCounter2}/>
                <CountBtn value={-1} count={count2} action={updateCounter2}/>
            </div>

            <div>
                <CountBtn value={+3} count={count3} action={updateCounter3}/>
                <CountBtn value={+2} count={count3} action={updateCounter3}/>
                <CountBtn value={+1} count={count3} action={updateCounter3}/>
                {count3}
                <CountBtn value={-3} count={count3} action={updateCounter3}/>
                <CountBtn value={-2} count={count3} action={updateCounter3}/>
                <CountBtn value={-1} count={count3} action={updateCounter3}/>
            </div>

            <hr/>


        </div>
    );

}


// function App() {
//     const [currentCounters, setCurrentCounters] = useState(1);
//
//     return (
//         <div>
//
//
//             <div>
//                 {Array(currentCounters).fill(Row())}
//             </div>
//
//             <hr/>
//
//             {<button onClick={() => setCurrentCounters(currentCounters +1)}>ADD NEW COUNTER</button>}
//             {<button onClick={() => setCurrentCounters(Math.max(currentCounters -1, 1))}>DELETE COUNTER</button>}
//
//         </div>
//     );
// }


export default App;



