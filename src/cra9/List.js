import React from 'react';
import ToDoListItem from "./ToDoListItem";



function List(props) {

 const {doneButton, unMark, list, remove, edit} = props

  return (
    <div>
      To do list

      {list.map(el => <ToDoListItem
          todo ={el}
          key={el.id}
          doneButton ={doneButton}
          unMark={unMark}
          remove={remove}
          edit={edit}/>)}

    </div>
  );
}

export default List;
