import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoReducer from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';

import App from './App';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoReducer);
console.log(store.getState());
store.dispatch(addTodo);
store.dispatch(toggleTodo);
store.dispatch(setVisibilityFilter);
let state = store.getState();
console.log(state);

const render = () => {
    ReactDOM.render(
        <App todos={state.todos}/>,
        document.getElementById('root')
    );
}

store.subscribe(() => { render() });
render();

// registerServiceWorker();
