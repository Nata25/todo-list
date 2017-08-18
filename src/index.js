import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoReducer from './reducers';
import { addTodo, toggleTodo } from './actions';

import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoReducer);
console.log(store.getState());
store.dispatch(addTodo);
store.dispatch(toggleTodo);
console.log(store.getState());
// store.subscribe(() => console.log('store:', store.getState()));

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
