import React, {useState} from 'react';             // импортируем библиотеку Реакт,вызываем hook useState
import Calculate from './Calculate';               //подключаем child компонент
import './App.css';                               // импортируем стили вместе с картинкой


function App() {
    const [digit, setDigits] = useState([1, 2, 3]); // создаем переменную в виде массива: (переменной-counters, функции-setCounters)
                                                              // применяем hook useState который вернет масиив из значений



    const plusOne = (index) => {                //вызываем стрелочную функцию callback к которой обращаемся по индексу елемента в массиве
        const add1 = [...digit];                //вводим переменную со значением текущего массива counters применяя spread оператор
        add1 [index]++;                         //к переменной по идексу массива добавляем инкримент +1
        setDigits(add1);                        //с помощью функции  setDigits передаем значения plusOne в массив counters
    };

    const minusOne = (index) => {               //вызываем стрелочную функцию callback к которой обращаемся по индексу елемента в массиве
        const min1 = [...digit];                // вводим переменную со значением текущего массива digit применяя spread оператор
        min1 [index]--;                         //к переменной по идексу массива добавляем инкримент -1
        setDigits(min1);                        //с помощью функции  setDigits передаем значения minusOne в массив counters
    };

    const resetOne = (index) => {               //декларируем стрелочную функцию callback к которой обращаемся по индексу елемента в массиве
        const reset = [...digit];               //вводим переменную со значением текущего массива digit применяя spread оператор
        reset[index] = 0;                       //присваеваем значения 0 текущему счетчику
        setDigits(reset);                       /*с помощью функции  setDigits передаем значения resetDigits в массив counters
                                                который обнулит текущее значения счетчика*/
    };

    const deleteOne = (index) => {                 //декларируем стрелочную функцию callback к которой обращаемся по индексу елемента в массиве
        const del1 = digit.filter((el, i) => {  //передаем в setDigits новый массив полученный из digit за исключением одного элемента по индексу
            return i !== index
        })
        setDigits(del1);                       /*с помощью функции setDigits передаем значения del1 в массив digit
                                               который удалит массив текущего счетчика*/
    }

    const addCounter = () => {                         // вызываем стрелочную функию, которая будет срабатывать при нажатии на кнопку 'ADD Counter' in JSX
        const rand = Math.round(Math.random()*10);  /* вводим переменную, которая содержит Math.random который будет генерировать случайное число
                                                       и метод round, который будет округлять случайное число*/
        setDigits([...digit, rand]);             //функция, которая записывает переменной count используя spread оператор
    };

    const resetAll = () => {                    //декларируем стрелочную функцию которая обнулит значения текущего счетчика
        const res = [...digit].map((el =>0));   //вводим переменную со значением текущего массива counters применяя spread оператор и
                                                //вызываем метод  map который пройдется по каждому из елементов массива counters приведя их значения к 0
        setDigits(res);                         //с помощью функции  setDigits передаем значения res в массив counters и выведет новый массив из значений
    };


    return (                                             // вывод значений на экран

        <div className="text-warning h3" align='center'> {/*применяем класс к существующему div */}
            {digit.map((el, i) => (
                <Calculate digit={el}             //вызываем компонент Calculate и обращаемся с помощью props к елементу массива digit
                           key={i}                //уникальный ключ который выводится в DOM и нужен Реакту для разпознавания елементов
                           index={i}              //индекс массива
                           plusOne={plusOne}      //опускаем с помощью props функцию plusOne и обращаемся по имени plusOne
                           minusOne={minusOne}    //опускаем с помощью props функцию minusOne и обращаемся по имени minusOne
                           resetOne={resetOne}    //опускаем с помощью props функцию resetOne и обращаемся по имени resetOne
                           deleteOne={deleteOne}  //опускаем с помощью props функцию deleteOneRow и обращаемся по имени deleteOne

                />

            ))}

            <button onClick={addCounter}>Add Counter</button> {/*создаем кнопку ADD Counter при нажатии на которую будет срабатьвать функция addCounter*/}
            <button onClick={resetAll}> Reset All</button>    {/*создаем кнопку RESET ALL при нажатии на которую будет срабатьвать функция resetAll*/}

        </div>


    );

}


export default App;