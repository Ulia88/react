import React, {useState} from 'react';
import Form from './Form';
import List from './List';
import './App.css';


const initialList = [
    {id: 1, title: 'firstToDo', done: false},   // несделанный айтем
    {id: 2, title: 'secondToDo', done: false},
    {id: 3, title: 'thirdToDo', done: false},
]

function App() {
    const [list, setList] = useState(initialList);

    const create = title => {                   //принимает тайтл
        const newItem = {
            id: Math.random() * 10,
            title,                              //same as title: title
            done: false,
        }

        const updatedList = [...list, newItem];
        setList(updatedList);
    }


    const doneButton = (todoId) => {
        const newList = [...list].map(el => {
            if (el.id === todoId) return {...el, done: true}
            return el
        })
        setList(newList)
    };
    const unMark = (todoId) => {
        const unCheck = [...list].map(el => {
            if (el.id === todoId) return {...el, done: false}
            return el
        })
        setList(unCheck)
    };
    const remove = (todoId) => {
        const newList = list.filter(el => el.id !== todoId) //выведи нам массив элемента без ид на который мы нажали
        setList(newList)

    };

    const edit = (todoId, title) => {                         //вешаем получает арг todoId и новый title
        const newList = list.map(el => {                     //метод мэп создает новый массив
            if (el.id === todoId) return {...el, title}     // внутри мэп мы передаем аноним функцию которая сравнит по ид и вернет новый тайтл
            return el
        })
            setList(newList)
    };

    return (
        <div>

            <Form create={create}/>
            <List list={list} doneButton={doneButton} unMark={unMark} remove={remove} edit={edit}/>


        </div>
    );
}

export default App;
