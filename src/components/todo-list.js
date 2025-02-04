import React from "react";
import TodoListItem from "./todo-list-item";
import './todo-list.css';

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps}  = item;
        return (
            <li key={id} className={"list-group-item"}>
                <TodoListItem {...item } />
            </li>
        );
    });
    return(
        <ul className={"list-group-item"}>
            {elements}
        </ul>
    );
};

export default TodoList;