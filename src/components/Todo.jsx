import React, { Component } from 'react';
import './TodoList.css';

const TodoList = (props) => (
    <div>
        <h1>Redux-based Todo App</h1>
        <ul>
            {props.todos.map(
                todo =>
                    <li key={todo.id}>
                        {todo.text}
                    </li>
            )}
        </ul>
    </div>
);

export default TodoList;