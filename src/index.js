import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoReducer from './reducers';
import { ADD_TODO, addTodo, toggleTodo, setVisibilityFilter } from './actions';
import filterTodos from './helpers';

// import App from './App';
import './index.css';
import {SET_VISIBILITY_FILTER, TOGGLE_TODO} from "./actions/index";


// import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoReducer);
// console.log(store.getState());
// store.dispatch(addTodo);
// store.dispatch(toggleTodo);
// store.dispatch(setVisibilityFilter);
const state = store.getState();
let newTodoId = 0;

console.log(state);

const TodoList = (props) => (
    <div>
        <ul>
            {props.todos.map(
                todo =>
                    <li key={todo.id}
                        onClick={() => {
                            store.dispatch({
                                type: TOGGLE_TODO,
                                id: todo.id,
                            })
                        }}
                        style={{
                            textDecoration:
                                todo.completed ?
                                'line-through' : 'none'
                        }}
                    >
                        {todo.text}
                    </li>
            )}
        </ul>
    </div>
);

const Link = (props) => {
    if (props.filter === store.getState().visibility) {
        return (
            <span>{props.children}</span>
        )
    }
    else {
        return (
            <a href="#"
               onClick={(event) => {
                   event.preventDefault();
                   store.dispatch({
                       type: SET_VISIBILITY_FILTER,
                       filter: props.filter,
                   })
               }}>
                {props.children}
            </a>
        )
    }
};

const App = (props) => {
    let input;
    const visibleTodos = filterTodos(props.todos, store.getState().visibility);
    return (
        <div>
            <h1>Redux-based Todo App</h1>
            <input ref={item => { input = item; }} />
            <button onClick={() => {
                store.dispatch({
                    type: ADD_TODO,
                    text: input.value,
                    id: newTodoId++,
                });
                input.value = '';
            }}>+ Add todo</button>
            <TodoList todos={visibleTodos} />
            <Link filter="SHOW_ALL">Show all</Link>
            {' '}
            <Link filter="COMPLETED">Completed</Link>
            {' '}
            <Link filter="IN_PROGRESS">In progress</Link>
        </div>
    )
};

const render = () => {
    ReactDOM.render(
        <App todos={store.getState().todos}/>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    render();
    console.log(store.getState());
});

render();

// registerServiceWorker();
