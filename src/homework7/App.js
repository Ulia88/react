import React, {useState} from 'react';              // импортируем библиотеку Реакт,вызываем hook useState
import Counter from './Counter';                    //подключаем child компонент

function App() {
    const [counters, setCounters] = useState([1, 2, 3]);// создаем переменную в виде массива: (переменной-counters, функции-setCounters)
                                                                   // применяем hook useState который вернет масиив из значений
    const [count, setCount] = useState(4); // создаем переменную в виде массива: (переменной-counters, функции-setCounters)
                                                     // применяем применяем hook useState, добавляем

    const addCounter = () => {                       //вызываем стрелочную функию, которая будет срабатывать при нажатии на кнопку 'ADD Counters' in JSX
        //const r = Math.round(Math.random()*10);    // вводим переменную, которая содержит Math.random который будет генерировать случайное число
                                                     // и метод round, который будет округлять случайное число
        setCount(count + 1);                   //функция, которая добавляет +1 к переменной count
        setCounters([...counters, count]);     // функция, которая записывает переменной count используя spread оператор
        };

    const plusOne = (index) => {                      //вызываем стрелочную функцию callback к которой обращаемся по индексу елемента в массиве
        const plusAdded = [...counters];              //вводим переменную со значением текущего массива counters применяя spread оператор
        plusAdded [index]++;                          //к переменной по идексу массива добавляем инкримент +1
        setCounters(plusAdded);                       //с помощью функции  setCounters передаем значения plusAdded в массив counters
    };

    const minusOne = (index) => {                     //вызываем стрелочную функцию callback к которой обращаемся по индексу елемента в массиве
        const minusAdded = [...counters];             // вводим переменную со значением текущего массива counters применяя spread оператор
        minusAdded [index]--;                         //к переменной по идексу массива добавляем инкримент -1
        setCounters(minusAdded);                      //с помощью функции  setCounters передаем значения minusAdded в массив counters
    };

    const resetOne = (index) => {                     //декларируем стрелочную функцию callback к которой обращаемся по индексу елемента в массиве
        const resetCurrent = [...counters];           //вводим переменную со значением текущего массива counters применяя spread оператор
        resetCurrent[index] = 0;                      //присваеваем значения 0 текущему счетчику
        setCounters(resetCurrent);                    //с помощью функции  setCounters передаем значения resetCurrent в массив counters
                                                      // который обнулит текущее значения счетчика
    };

    const deleteOneRow = (index) => {                 //декларируем стрелочную функцию callback к которой обращаемся по индексу елемента в массиве
        const deleteRow = counters.filter((el, i) => {  //передаем в setCounters новый массив полученный из counters исключением одного элемента по индексу
            return i !== index
        })
        setCounters(deleteRow);                       //с помощью функции setCounters передаем значения deleteRow в массив counters
                                                      // который удалит массив текущего счетчика

    }

    const resetAll = () => {                          //декларируем стрелочную функцию которая обнулит значения текущего счетчика
        const letReset = [...counters].map(el => 0);  //вводим переменную со значением текущего массива counters применяя spread оператор и
                                                      // вызываем метод  map который пройдется по каждому из елементов массива counters приведя их значения к 0
        setCounters(letReset);                        //с помощью функции  setCounters передаем значения letReset в массив counters и выведет новый массив из значений

    }

    return (                                          // вывод значений на экран
        <div align='center'>                         {/*блок который будет выводить контент по центру */}

            <ul className="list-group">                  {/*применяем класс list-group*/}
                {counters.map((el, i) => (   //объект -------------
                    <Counter count={el}                  //вызываем компонент Calculate и обращаемся с помощью props к елементу массива count
                             key={i}                     //уникальный ключ который выводится в DOM и нужден Реакту для разпознавания елементов
                             index={i}                   //индекс массива
                             plus={plusOne}              //опускаем с помощью props функцию plusOne и обращаемся по имени plus
                             minus={minusOne}            //опускаем с помощью props функцию minusOne и обращаемся по имени minus
                             reset={resetOne}            //опускаем с помощью props функцию resetOne и обращаемся по имени reset
                             deleteRow={deleteOneRow}    //опускаем с помощью props функцию deleteOneRow и обращаемся по имени deleteRow
                    />
                ))}
            </ul>

            <button onClick={addCounter} class="btn btn-info btn-lg mr-2"> ADD Counter</button>  {/*создаем кнопку ADD Calculate при нажатии на которую будет срабатьвать функция addCounter*/}
            <button onClick={resetAll} class="btn btn-info btn-lg mr-2"> RESET ALL</button>      {/*создаем кнопку RESET ALL при нажатии на которую будет срабатьвать функция resetAll*/}


        </div>
    );
}

export default App;    //экспортируем функцию App в индекс
