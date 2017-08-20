import React from 'react';
import { connect } from 'react-redux';

import './style.css';

import { TOGGLE_TODO } from '../actions';
import filterTodos from '../helpers';

const TodoList = ( { todos, toggleTodo } ) => {
    console.log();
    return (
        <div>
            <ul>
                {todos.map(
                    todo =>
                        (<li key={todo.id}
                            onClick={() => { toggleTodo(todo.id) }}
                            style={{
                                textDecoration:
                                    todo.completed ?
                                        'line-through' : 'none'
                            }}
                        >
                            {todo.text}
                        </li>)
                )}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todos, state.visibility),
    }
};

const mapDispatchToProps = (dispatch) => ({
    toggleTodo(id) {
        dispatch({
            type: TOGGLE_TODO,
            id,
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);