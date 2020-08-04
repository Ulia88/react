import React from 'react';


function Counter(props) {  //функция Calculate в которую передаем props и выводим 4 счетчика в виде кнопок

    return (                            //функция возвращает

        <div className="list-group-item">    {/*к блоку div  применяем класс list-group-item из Bootstrap*/}
            {/*Index: ({props.index})*/}
            <button className="btn-info" onClick={() => props.minus(props.index)}>-</button>  {/*на кнопку вещаем функцию onClick при нажатии на
                                                                                                которую будет вызвана функция callback minus которая будет применима к индексу элемента */}
            <span className="h3">{props.count}</span>  {/* передаем значения count */}
            <button className="btn-info h3"onClick={() => props.plus(props.index)}> + </button> {/*на кнопку вещаем функцию onClick при нажатии на которую будет вызвана функция callback plus которая будет применима к индексу элемента */}
            <button className="btn-warning ml-2 mr-2 h3"onClick={() => props.reset(props.index)}> Reset </button>  {/*на кнопку вещаем функцию onClick при нажатии на которую будет вызвана функция callback reset которая будет применима к индексу элемента */}
            <button className="btn-danger h3"onClick={() => props.deleteRow(props.index)}> Delete</button> {/*на кнопку вещаем функцию onClick при нажатии на которую будет вызвана функция callback deleteRow которая будет применима к индексу элемента */}

        </div>
    );
}

export default Counter; {/*экспортируем функию и будем применять в дочернем компоненте */}
