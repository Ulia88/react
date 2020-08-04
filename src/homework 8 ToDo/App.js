import React, {useState} from 'react';
import Form from "../cra9/Form";


function App() {
    const [list, setList] = useState(
        [

            {id: 1, title: 'First', done: false},
            {id: 2, title: 'Second', done: false},
            {id: 3, title: 'Third', done: false}

        ])


    return (
        <div>
            {/*<li>{list[0].title}</li>*/}
            {/*<li>{list[1].title}</li>*/}
            {/*<li>{list[2].title}</li>*/}

            <Form />

            {list.map(el => (<li>{el.title}</li>))}         {/*каждый элемент оборачивает в тег li*/}



        </div>
    );
}

export default App;
