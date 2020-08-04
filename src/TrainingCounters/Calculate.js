import React from 'react';

function Calculate(props) {  //функция Calculate в которую передаем props и выводим 4 счетчика в виде кнопок
    return (                 //функция возвращает массив из кнопок

        <div>
            <button onClick={() => props.minusOne(props.index)}>-</button>        {/*на кнопку вешаем функцию onClick при нажатии на
                                                                                  которую будет вызвана функция callback minus которая будет применима к индексу элемента */}
            {props.digit}                                                         {/* передаем значения count */}
            <button onClick={() => props.plusOne(props.index)}>+</button>         {/*на кнопку вешаем функцию onClick при нажатии на которую будет вызвана функция callback
                                                                                  plus которая будет применима к индексу элемента */}
            <button onClick={() => props.resetOne(props.index)}>Reset</button>    {/*на кнопку вешаем функцию onClick при нажатии на которую будет вызвана функция
                                                                                  callback reset которая будет применима к индексу элемента */}
            <button onClick={() => props.deleteOne(props.index)}>Delete</button>  {/*на кнопку вешаем функцию onClick при нажатии на которую будет вызвана функция callback deleteOne
                                                                                   которая будет применима к индексу элемента */}


        </div>
    );
}

export default Calculate;


