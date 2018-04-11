import React from 'react';
import style from './TodoList.css';
import Item from '../components/Todo';

const List = props => {
  const todoListElements = props.list.map(element => 
    <Item key={element.id} id={element.id} remove={props.rem.bind(this)} name={element.text} />)
    return (
      <ul className={style.TodoList}>{todoListElements}</ul>
    )
}

export default List;