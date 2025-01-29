import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
    return(
        <ul>
            <li><TodoListItem label="Check children's works"/></li>
            <li><TodoListItem label="Make new files for test"/></li>
            <li><TodoListItem label="Go for a walk"/></li>
            <li><TodoListItem label="Read 5 pages of current book" important/>/></li>
        </ul>
    );
};

export default TodoList;