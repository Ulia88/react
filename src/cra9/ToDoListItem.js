import React, {useState} from 'react';


function ToDoListItem(props) {

    const {todo, doneButton, unMark, remove, edit} = props

    const isTodoDone = todo.done
    const toDoTitle = todo.title
    const todoId = todo.id
    const titleStyle = isTodoDone === true ? {textDecorationLine: 'line-through'} : {};              //ccs.styles

    const [isEditMode, setIsEditMode] = useState(false)
    const [updateToDo, setUpdateToDo] = useState(toDoTitle)


    const inputHandler = (e) => {
        setUpdateToDo(e.target.value)
    }

    const saveButtonHandler = () => {
        edit(todoId, updateToDo)
        setIsEditMode(false)
    };

return (
    <div>
        {
            isEditMode ? (

                <div>
                    <input onChange={inputHandler} value={updateToDo} />
                    <button onClick={saveButtonHandler}>Save</button>

                </div>
            ) : (
                <div>
                    {
                        isTodoDone ? (
                        <div>
                            <span className="title"  style={titleStyle}>{toDoTitle}</span>
                            <button onClick={() => unMark(todoId)}> Unmark</button>
                            <button onClick={() => remove(todoId)}> X</button>
                            <button onClick={() => setIsEditMode(true)}> Edit</button>
                        </div>
                    ) : (
                        <div>
                            <span className="title" style={titleStyle}>{toDoTitle}</span>
                            <button onClick={() => doneButton(todoId)}> Done </button>
                            <button onClick={() => setIsEditMode(true)}> Edit</button>
                            <button onClick={() => remove(todoId)}> X</button>

                        </div>)
                    }

                 </div>
            )}

    </div>

  );
}

        export default ToDoListItem;
