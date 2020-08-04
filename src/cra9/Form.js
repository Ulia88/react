import React, {useState} from 'react';


function Form(props) {


    const [inputValue, setInputValue] = useState('');

    const inputOnChange = e => {
        console.log(e)
        setInputValue(e.target.value)               // e.target дает возможность вытащить то что мы напечатали в input
    };

    const onCreateEmpty = () => {                   //вызывает функцию креейт и очищает инпут
        props.create(inputValue);
        setInputValue('');
    };

    return (
        <div>
            To do Create Form

            <input value={inputValue} onChange={inputOnChange} type="text"/>

            <button onClick={onCreateEmpty} class="btn btn-warning">Create</button>

        </div>
    );
}

export default Form;
