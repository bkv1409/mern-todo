import React from 'react';
import TodoElement from "./TodoElement";

const ListTodo = ({ todos, deleteTodo, editTodo }) => {
    return (
        <ul>
            {todos && todos.length > 0
                ? (
                todos.map((todo) => {
                    return (<TodoElement key={todo._id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>);
                }))
                : (
                <li>No todo(s) left</li>
                )
            }
        </ul>
    );
}

export default ListTodo;